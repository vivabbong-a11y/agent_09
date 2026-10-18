# python-pptx 1.0.2 API 참고 문서

설치된 소스(`site-packages/pptx/`)를 조사해 정리했다. 필요한 절만 읽는다.

## 목차
1. 프레젠테이션 · 2. 슬라이드 · 3. 레이아웃과 마스터 · 4. 도형(공통) · 5. 도형 만들기 · 6. 텍스트 · 7. 그림 · 8. 표 · 9. 차트 · 10. 개체 틀 · 11. 채우기, 선, 색 · 12. 링크와 동작 · 13. 미디어와 OLE · 14. 덱 읽기 · 15. 지원하지 않는 작업과 우회 방법

```python
from pptx import Presentation
from pptx.util import Inches, Pt, Cm, Emu
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE, MSO_CONNECTOR
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR, MSO_AUTO_SIZE
from pptx.enum.chart import XL_CHART_TYPE, XL_LEGEND_POSITION, XL_LABEL_POSITION
from pptx.chart.data import CategoryChartData, XyChartData, BubbleChartData
from pptx.enum.dml import MSO_THEME_COLOR, MSO_PATTERN_TYPE, MSO_LINE_DASH_STYLE
from pptx.enum.shapes import MSO_SHAPE_TYPE, PROG_ID
```

## 1. 프레젠테이션

```python
prs = Presentation()                    # 기본 템플릿 (4:3)
prs = Presentation("template.pptx")     # 기존 파일 / 템플릿 열기
prs.slide_width, prs.slide_height = Inches(13.333), Inches(7.5)   # 16:9
prs.core_properties.title = "..."       # author, subject, keywords, category,
                                        # comments, revision, version, created, modified 등도 가능
prs.save("report/deck_20261018.pptx")   # 또는 BytesIO
```

## 2. 슬라이드

```python
slide = prs.slides.add_slide(prs.slide_layouts[6])   # 0 제목, 1 제목+내용, 5 제목만, 6 빈 화면
prs.slides.index(slide); prs.slides.get(slide_id)
slide.background.fill.solid(); slide.background.fill.fore_color.rgb = RGBColor(0xF5, 0xF5, 0xF5)
slide.follow_master_background = False
slide.notes_slide.notes_text_frame.text = "speaker notes"
```

## 3. 레이아웃과 마스터

```python
for layout in prs.slide_layouts: print(layout.name, [p.placeholder_format.idx for p in layout.placeholders])
layout = prs.slide_layouts.get_by_name("Title Only")
prs.slide_layouts.remove(layout)        # layout.used_by_slides가 비어 있을 때만
master = prs.slide_master; master.shapes; master.slide_layouts
```

## 4. 도형 (공통)

`left, top, width, height, rotation, name, shape_id, shape_type` (id/type 외에는 읽기/쓰기),
`has_text_frame, has_table, has_chart, is_placeholder`, `shadow.inherit = False`,
`click_action`, `slide.shapes.title`, `slide.shapes.index(shape)` (z-order 위치),
`slide.shapes.turbo_add_enabled = True` (대량 추가 속도 향상).
겹침 순서 변경: `spTree = slide.shapes._spTree; spTree.remove(el); spTree.insert(2, el)` (인덱스 2 = 맨 뒤).

## 5. 도형 만들기

```python
s = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1), Inches(1), Inches(3), Inches(1))  # 182종
s.adjustments[0] = 0.2                  # 모서리 둥글기 / 화살촉 등
tb = slide.shapes.add_textbox(Inches(1), Inches(2), Inches(5), Inches(1))
ff = slide.shapes.build_freeform(Inches(1), Inches(1), scale=Inches(1))
ff.add_line_segments([(2, 1), (1.5, 2)], close=True); poly = ff.convert_to_shape()
c = slide.shapes.add_connector(MSO_CONNECTOR.ELBOW, 0, 0, Inches(1), Inches(1))
c.begin_connect(shape_a, 3); c.end_connect(shape_b, 1)     # 연결점에 붙이기
g = slide.shapes.add_group_shape([s, tb]); g.shapes.add_shape(...)
```

## 6. 텍스트

```python
tf = shape.text_frame
tf.text = "first paragraph"; tf.word_wrap = True
tf.auto_size = MSO_AUTO_SIZE.TEXT_TO_FIT_SHAPE      # PowerPoint가 열 때 적용
tf.fit_text(font_family="Malgun Gothic", max_size=24)  # C:\Windows\Fonts의 글꼴 파일로 크기 계산
tf.margin_left = Inches(0.1); tf.vertical_anchor = MSO_ANCHOR.MIDDLE
p = tf.add_paragraph(); p.text = "..."; p.level = 1
p.alignment = PP_ALIGN.CENTER; p.line_spacing = 1.2; p.space_before = Pt(6)
r = p.add_run(); r.text = "bold part"
f = r.font; f.size = Pt(18); f.bold = True; f.italic = False; f.underline = True
f.color.rgb = RGBColor.from_string("1F4E79")   # 또는 f.color.theme_color = MSO_THEME_COLOR.ACCENT_1
f.color.brightness = 0.4
r.hyperlink.address = "https://example.com"
p.add_line_break()
```

한글 텍스트: `font.name`은 `<a:latin>`만 설정한다. `<a:ea>`도 설정해야 한다. `scripts/build_deck.py`의 `set_typeface()`를 참고한다.

텍스트 상자의 글머리 기호: 기본적으로 없다. `pPr`에 `marL`/`indent`와 함께 `<a:buChar char="•"/>`를 추가한다(`build_deck.py`의 `set_bullet()` 참고). 레이아웃의 개체 틀에는 글머리 기호가 이미 들어 있다.

## 7. 그림

```python
pic = slide.shapes.add_picture("img.png", Inches(1), Inches(1), width=Inches(4))  # 높이는 비율 유지
pic.crop_left = 0.1                     # 원본 대비 비율
pic.line.color.rgb = RGBColor(0, 0, 0); pic.line.width = Pt(1)
pic.auto_shape_type = MSO_SHAPE.OVAL    # 도형 모양으로 마스킹
pic.image.blob, pic.image.ext, pic.image.size, pic.image.dpi   # 추출
```

## 8. 표

```python
t = slide.shapes.add_table(4, 3, Inches(0.5), Inches(1.5), Inches(9), Inches(3)).table
t.columns[0].width = Inches(3); t.rows[0].height = Inches(0.5)
t.first_row = True; t.horz_banding = False   # first_col, last_row, last_col, vert_banding도 가능
cell = t.cell(0, 0); cell.text = "Header"
cell.fill.solid(); cell.fill.fore_color.rgb = RGBColor.from_string("1F4E79")
cell.margin_left = Inches(0.1); cell.vertical_anchor = MSO_ANCHOR.MIDDLE
cell.merge(t.cell(0, 2)); cell.is_merge_origin; cell.split()
for c in t.iter_cells(): ...
```

## 9. 차트

```python
cd = CategoryChartData(number_format="#,##0")
cd.categories = ["Q1", "Q2", "Q3"]
cd.add_series("2025", (10, 12, 15))
gf = slide.shapes.add_chart(XL_CHART_TYPE.COLUMN_CLUSTERED, x, y, cx, cy, cd)
ch = gf.chart
ch.has_title = True; ch.chart_title.text_frame.text = "Title"
ch.has_legend = True; ch.legend.position = XL_LEGEND_POSITION.BOTTOM; ch.legend.include_in_layout = False
ch.chart_style = 2; ch.font.size = Pt(12)
va = ch.value_axis; va.maximum_scale = 100; va.major_unit = 20; va.has_major_gridlines = True
va.tick_labels.number_format = '0"%"'; va.tick_labels.number_format_is_linked = False
ch.category_axis.reverse_order = True; ch.category_axis.has_title = True
plot = ch.plots[0]; plot.gap_width = 80; plot.overlap = 0; plot.vary_by_categories = False
plot.has_data_labels = True; dl = plot.data_labels
dl.show_value = True; dl.position = XL_LABEL_POSITION.OUTSIDE_END; dl.font.size = Pt(10)
s = ch.series[0]; s.format.fill.solid(); s.format.fill.fore_color.rgb = RGBColor(0x2E, 0x75, 0xB6)
s.points[1].format.fill.solid()          # 막대 하나만 색 지정
s.smooth = True; s.marker.style; s.invert_if_negative = False   # 꺾은선 / 막대 계열
ch.replace_data(new_chart_data)          # 서식은 유지하고 숫자만 갱신
xy = XyChartData(); s = xy.add_series("S"); s.add_data_point(1.0, 2.5)
bub = BubbleChartData(); s = bub.add_series("S"); s.add_data_point(1, 2, 10)
```

종류(73): COLUMN/BAR clustered/stacked/100, LINE(_MARKERS)(_STACKED), PIE(_EXPLODED), DOUGHNUT,
AREA(_STACKED), XY_SCATTER(_LINES/_SMOOTH...), BUBBLE, RADAR(_FILLED/_MARKERS), STOCK_*, SURFACE_*,
THREE_D_*, CONE_/CYLINDER_/PYRAMID_*, PIE_OF_PIE, BAR_OF_PIE.
다단계 범주: `cat = cd.add_category("2025"); cat.add_sub_category("Q1")`.

## 10. 개체 틀

```python
for ph in slide.placeholders: print(ph.placeholder_format.idx, ph.placeholder_format.type, ph.name)
slide.placeholders[0].text = "Title"
slide.placeholders[1].text_frame.text = "Body"        # 글머리 기호는 레이아웃에서 상속
pic_ph.insert_picture("img.png")                     # 채우도록 자동 자르기
tbl_ph.insert_table(rows=3, cols=4)
chart_ph.insert_chart(XL_CHART_TYPE.PIE, cd)
```

## 11. 채우기, 선, 색

```python
shape.fill.solid(); shape.fill.fore_color.rgb = RGBColor(255, 0, 0)
shape.fill.gradient(); shape.fill.gradient_angle = 90
stops = shape.fill.gradient_stops; stops[0].color.rgb = ...; stops[0].position = 0.0
shape.fill.patterned(); shape.fill.pattern = MSO_PATTERN_TYPE.WIDE_DOWNWARD_DIAGONAL  # 55종
shape.fill.background()                 # 투명
shape.line.color.rgb = ...; shape.line.width = Pt(2); shape.line.dash_style = MSO_LINE_DASH_STYLE.DASH
shape.line.fill.background()            # 윤곽선 없음
```

## 12. 링크와 동작

```python
shape.click_action.hyperlink.address = "https://..."   # 또는 "mailto:..."
shape.click_action.target_slide = prs.slides[3]       # 슬라이드로 이동
shape.click_action.action                              # PP_ACTION 읽기 (NEXT_SLIDE, END_SHOW, RUN_MACRO...)
run.hyperlink.address = "https://..."
```

## 13. 미디어와 OLE

```python
slide.shapes.add_movie("clip.mp4", x, y, cx, cy, poster_frame_image="poster.png", mime_type="video/mp4")  # 실험적
slide.shapes.add_ole_object("data.xlsx", PROG_ID.XLSX, x, y)   # 아이콘으로 표시; DOCX, PPTX도 가능
gf.ole_format.blob; gf.ole_format.prog_id
```

## 14. 덱 읽기

설정할 수 있는 것은 모두 읽을 수 있다. `pptx_tools.py text`가 모든 텍스트를 출력한다. 그림은 다음과 같이 추출한다.
`for sh in slide.shapes: if sh.shape_type == MSO_SHAPE_TYPE.PICTURE: open(f"img.{sh.image.ext}", "wb").write(sh.image.blob)`.
차트 데이터: `[(s.name, list(s.values)) for s in chart.series]`, `chart.plots[0].categories`.

## 15. 지원하지 않는 작업과 우회 방법

| 지원하지 않음 | 우회 방법 |
|---|---|
| 슬라이드 삭제 / 순서 변경 / 복제 | `scripts/pptx_tools.py delete / move / duplicate` (`prs.slides._sldIdLst`의 XML 조작) |
| 애니메이션, 전환 효과 | PowerPoint에서 처리 |
| PNG/PDF로 렌더링 | 설치되어 있다면 PowerPoint 또는 LibreOffice (`soffice --headless --convert-to pdf`) |
| SmartArt | 도형과 연결선으로 직접 구성 |
| 메모(댓글), 구역, 머리글/바닥글 설정 | 바닥글 텍스트 상자를 직접 그림 (`build_deck.py` 방식) |
| 글머리 기호 스타일 API | `pPr`에 XML `a:buChar` / `a:buAutoNum` |
| 표 셀 테두리, 이름으로 표 스타일 지정 | `a:tcPr`에 XML `a:lnL/a:lnR/a:lnT/a:lnB` |
| 네온, 반사, 3차원, 부드러운 가장자리 | `spPr`에 XML (`a:effectLst`) |
| 오디오만 삽입 | API로는 불가 |
| 암호로 보호된 파일 | 먼저 PowerPoint에서 암호 제거 |

이 모든 경우의 공통 우회 수단: `shape.element` / `slide.element`는 lxml 요소다. 네임스페이스 태그에는 `pptx.oxml.ns.qn("a:tag")`를 사용한다.
