# python-pptx 1.0.2 API reference

Surveyed from the installed source (`site-packages/pptx/`). Read the section you need.

## Contents
1. Presentation · 2. Slides · 3. Layouts and masters · 4. Shapes (common) · 5. Creating shapes · 6. Text · 7. Pictures · 8. Tables · 9. Charts · 10. Placeholders · 11. Fill, line, color · 12. Links and actions · 13. Media and OLE · 14. Reading decks · 15. Not supported and workarounds

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

## 1. Presentation

```python
prs = Presentation()                    # default template (4:3)
prs = Presentation("template.pptx")     # open existing / template
prs.slide_width, prs.slide_height = Inches(13.333), Inches(7.5)   # 16:9
prs.core_properties.title = "..."       # also author, subject, keywords, category,
                                        # comments, revision, version, created, modified...
prs.save("report/deck_20261018.pptx")   # or a BytesIO
```

## 2. Slides

```python
slide = prs.slides.add_slide(prs.slide_layouts[6])   # 0 title, 1 title+content, 5 title only, 6 blank
prs.slides.index(slide); prs.slides.get(slide_id)
slide.background.fill.solid(); slide.background.fill.fore_color.rgb = RGBColor(0xF5, 0xF5, 0xF5)
slide.follow_master_background = False
slide.notes_slide.notes_text_frame.text = "speaker notes"
```

## 3. Layouts and masters

```python
for layout in prs.slide_layouts: print(layout.name, [p.placeholder_format.idx for p in layout.placeholders])
layout = prs.slide_layouts.get_by_name("Title Only")
prs.slide_layouts.remove(layout)        # only if layout.used_by_slides is empty
master = prs.slide_master; master.shapes; master.slide_layouts
```

## 4. Shapes (common)

`left, top, width, height, rotation, name, shape_id, shape_type` (read/write except id/type),
`has_text_frame, has_table, has_chart, is_placeholder`, `shadow.inherit = False`,
`click_action`, `slide.shapes.title`, `slide.shapes.index(shape)` (z-order position),
`slide.shapes.turbo_add_enabled = True` (faster bulk adds).
Z-order change: `spTree = slide.shapes._spTree; spTree.remove(el); spTree.insert(2, el)` (index 2 = back).

## 5. Creating shapes

```python
s = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1), Inches(1), Inches(3), Inches(1))  # 182 presets
s.adjustments[0] = 0.2                  # corner radius / arrow head etc.
tb = slide.shapes.add_textbox(Inches(1), Inches(2), Inches(5), Inches(1))
ff = slide.shapes.build_freeform(Inches(1), Inches(1), scale=Inches(1))
ff.add_line_segments([(2, 1), (1.5, 2)], close=True); poly = ff.convert_to_shape()
c = slide.shapes.add_connector(MSO_CONNECTOR.ELBOW, 0, 0, Inches(1), Inches(1))
c.begin_connect(shape_a, 3); c.end_connect(shape_b, 1)     # glue to connection points
g = slide.shapes.add_group_shape([s, tb]); g.shapes.add_shape(...)
```

## 6. Text

```python
tf = shape.text_frame
tf.text = "first paragraph"; tf.word_wrap = True
tf.auto_size = MSO_AUTO_SIZE.TEXT_TO_FIT_SHAPE      # PowerPoint applies it on open
tf.fit_text(font_family="Malgun Gothic", max_size=24)  # computes size from font file in C:\Windows\Fonts
tf.margin_left = Inches(0.1); tf.vertical_anchor = MSO_ANCHOR.MIDDLE
p = tf.add_paragraph(); p.text = "..."; p.level = 1
p.alignment = PP_ALIGN.CENTER; p.line_spacing = 1.2; p.space_before = Pt(6)
r = p.add_run(); r.text = "bold part"
f = r.font; f.size = Pt(18); f.bold = True; f.italic = False; f.underline = True
f.color.rgb = RGBColor.from_string("1F4E79")   # or f.color.theme_color = MSO_THEME_COLOR.ACCENT_1
f.color.brightness = 0.4
r.hyperlink.address = "https://example.com"
p.add_line_break()
```

Korean text: `font.name` sets only `<a:latin>`. Also set `<a:ea>`. See `set_typeface()` in `scripts/build_deck.py`.

Bullets on a text box: none by default. Add `<a:buChar char="•"/>` to `pPr` with `marL`/`indent` (see `set_bullet()` in `build_deck.py`). Placeholders from layouts already carry bullets.

## 7. Pictures

```python
pic = slide.shapes.add_picture("img.png", Inches(1), Inches(1), width=Inches(4))  # height keeps ratio
pic.crop_left = 0.1                     # fraction of original
pic.line.color.rgb = RGBColor(0, 0, 0); pic.line.width = Pt(1)
pic.auto_shape_type = MSO_SHAPE.OVAL    # mask into shape
pic.image.blob, pic.image.ext, pic.image.size, pic.image.dpi   # extract
```

## 8. Tables

```python
t = slide.shapes.add_table(4, 3, Inches(0.5), Inches(1.5), Inches(9), Inches(3)).table
t.columns[0].width = Inches(3); t.rows[0].height = Inches(0.5)
t.first_row = True; t.horz_banding = False   # also first_col, last_row, last_col, vert_banding
cell = t.cell(0, 0); cell.text = "Header"
cell.fill.solid(); cell.fill.fore_color.rgb = RGBColor.from_string("1F4E79")
cell.margin_left = Inches(0.1); cell.vertical_anchor = MSO_ANCHOR.MIDDLE
cell.merge(t.cell(0, 2)); cell.is_merge_origin; cell.split()
for c in t.iter_cells(): ...
```

## 9. Charts

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
s.points[1].format.fill.solid()          # single bar color
s.smooth = True; s.marker.style; s.invert_if_negative = False   # line / bar series
ch.replace_data(new_chart_data)          # update numbers, keep formatting
xy = XyChartData(); s = xy.add_series("S"); s.add_data_point(1.0, 2.5)
bub = BubbleChartData(); s = bub.add_series("S"); s.add_data_point(1, 2, 10)
```

Types (73): COLUMN/BAR clustered/stacked/100, LINE(_MARKERS)(_STACKED), PIE(_EXPLODED), DOUGHNUT,
AREA(_STACKED), XY_SCATTER(_LINES/_SMOOTH...), BUBBLE, RADAR(_FILLED/_MARKERS), STOCK_*, SURFACE_*,
THREE_D_*, CONE_/CYLINDER_/PYRAMID_*, PIE_OF_PIE, BAR_OF_PIE.
Multi-level categories: `cat = cd.add_category("2025"); cat.add_sub_category("Q1")`.

## 10. Placeholders

```python
for ph in slide.placeholders: print(ph.placeholder_format.idx, ph.placeholder_format.type, ph.name)
slide.placeholders[0].text = "Title"
slide.placeholders[1].text_frame.text = "Body"        # bullets come from layout
pic_ph.insert_picture("img.png")                     # auto-cropped to fill
tbl_ph.insert_table(rows=3, cols=4)
chart_ph.insert_chart(XL_CHART_TYPE.PIE, cd)
```

## 11. Fill, line, color

```python
shape.fill.solid(); shape.fill.fore_color.rgb = RGBColor(255, 0, 0)
shape.fill.gradient(); shape.fill.gradient_angle = 90
stops = shape.fill.gradient_stops; stops[0].color.rgb = ...; stops[0].position = 0.0
shape.fill.patterned(); shape.fill.pattern = MSO_PATTERN_TYPE.WIDE_DOWNWARD_DIAGONAL  # 55 patterns
shape.fill.background()                 # transparent
shape.line.color.rgb = ...; shape.line.width = Pt(2); shape.line.dash_style = MSO_LINE_DASH_STYLE.DASH
shape.line.fill.background()            # no outline
```

## 12. Links and actions

```python
shape.click_action.hyperlink.address = "https://..."   # or "mailto:..."
shape.click_action.target_slide = prs.slides[3]       # jump to slide
shape.click_action.action                              # read PP_ACTION (NEXT_SLIDE, END_SHOW, RUN_MACRO...)
run.hyperlink.address = "https://..."
```

## 13. Media and OLE

```python
slide.shapes.add_movie("clip.mp4", x, y, cx, cy, poster_frame_image="poster.png", mime_type="video/mp4")  # EXPERIMENTAL
slide.shapes.add_ole_object("data.xlsx", PROG_ID.XLSX, x, y)   # shown as icon; DOCX, PPTX too
gf.ole_format.blob; gf.ole_format.prog_id
```

## 14. Reading decks

Everything settable is readable. `pptx_tools.py text` dumps all text. For pictures:
`for sh in slide.shapes: if sh.shape_type == MSO_SHAPE_TYPE.PICTURE: open(f"img.{sh.image.ext}", "wb").write(sh.image.blob)`.
Chart data: `[(s.name, list(s.values)) for s in chart.series]`, `chart.plots[0].categories`.

## 15. Not supported and workarounds

| Not supported | Workaround |
|---|---|
| Delete / reorder / duplicate slides | `scripts/pptx_tools.py delete / move / duplicate` (XML on `prs.slides._sldIdLst`) |
| Animations, transitions | Do it in PowerPoint |
| Render to PNG/PDF | PowerPoint or LibreOffice (`soffice --headless --convert-to pdf`), if installed |
| SmartArt | Build from shapes + connectors |
| Comments, sections, header/footer settings | Draw footer text boxes yourself (as `build_deck.py` does) |
| Bullet style API | XML `a:buChar` / `a:buAutoNum` in `pPr` |
| Table cell borders, named table styles | XML `a:lnL/a:lnR/a:lnT/a:lnB` in `a:tcPr` |
| Glow, reflection, 3-D, soft edges | XML in `spPr` (`a:effectLst`) |
| Audio-only insert | Not available as an API |
| Password-protected files | Remove the password in PowerPoint first |

Escape hatch for all of these: `shape.element` / `slide.element` are lxml elements. Use `pptx.oxml.ns.qn("a:tag")` for namespaced tags.
