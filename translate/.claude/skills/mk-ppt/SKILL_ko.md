---
name: mk-ppt
description: 이 프로젝트에서 python-pptx로 PowerPoint(.pptx) 덱을 만들고, 수정하고, 분석한다. 사용자가 프레젠테이션, PPT, 슬라이드, 슬라이드 덱, 발표 자료, PPT 제작/수정을 요청하거나, 보고서나 조사 노트를 슬라이드로 바꾸고 싶어 하거나, 기존 .pptx를 읽거나 재구성(슬라이드 삭제/이동/복제)하거나 텍스트를 추출하려 할 때는 "python-pptx"라고 말하지 않더라도 항상 이 스킬을 사용한다.
---

# mk-ppt

`agent_09` 프로젝트에서 python-pptx 1.0.2로 `.pptx` 파일을 만들고 수정한다. 가장 빠른 방법은 JSON 스펙을 `scripts/build_deck.py`로 렌더링하는 것이고, 스펙으로 처리할 수 없는 부분에만 python-pptx를 직접 사용한다.

## 여기에 적용되는 프로젝트 규칙

프로젝트의 CLAUDE.md에서 온 규칙이므로 사용자가 다시 말하지 않아도 따른다.

- 빌드하기 전에 todo list(슬라이드 개요 포함)를 사용자에게 보여 주고 승인을 기다린다.
- 완성된 덱은 `report/`에 저장한다. 기존 덱을 덮어쓰지 않는다. `_20261018` 같은 날짜 접미사를 쓰고, 그것도 있으면 `_v2`를 붙인다. 두 스크립트 모두 덮어쓰기를 거부하므로, 이름이 겹치면 작업을 잃는 대신 바로 오류가 난다.
- 사용자가 스펙 보관을 원하지 않는 한, 스펙 파일과 테스트 결과물은 프로젝트가 아니라 세션 scratchpad에 둔다.
- 사용자와는 한국어로 대화한다.

## 작업 순서

1. **환경 확인.** `python -c "import pptx; print(pptx.__version__)"`를 실행한다. `python`이 Microsoft Store를 열거나 찾을 수 없으면 `C:\Users\vivab\AppData\Local\Programs\Python\Python313\python.exe`를 사용한다. python-pptx가 없으면 `python -m pip install python-pptx`로 설치하되, 먼저 사용자에게 묻는다.
2. **내용 구성.** 원본 자료를 개요로 바꾼다. 슬라이드당 메시지 하나, 글머리 3~6개, 문장보다 짧은 구절로 쓴다. 원본이 `research/`나 `report/`의 파일이면 먼저 읽는다. 슬라이드가 읽기 쉽도록 자세한 내용은 발표자 노트(`notes`)에 넣는다.
3. **스펙 작성** (아래 형식). scratchpad에 둔다.
4. **빌드**: `python .claude/skills/mk-ppt/scripts/build_deck.py <spec.json>`
5. **검증**: `python .claude/skills/mk-ppt/scripts/pptx_tools.py inspect report/<file>.pptx`. 슬라이드 수, 모든 표·차트·그림이 들어갔는지, 노트가 붙었는지 확인한다. 결과를 읽고, 문제가 있으면 스펙을 고쳐 다시 빌드한다.
6. **보고**: 파일 경로와 슬라이드 목록을 사용자에게 알린다.

## 스펙 형식

```json
{
  "output": "report/AI_발전_발표_20261018.pptx",
  "title": "덱 제목 (문서 속성에도 저장)",
  "author": "최운겸",
  "theme": "blue",
  "font": "맑은 고딕",
  "footer": "선택 사항: 바닥글 텍스트",
  "slides": [
    {"type": "title", "title": "메인 제목", "subtitle": "부제목\n날짜"},
    {"type": "section", "title": "1. 섹션 이름"},
    {"type": "bullets", "title": "슬라이드 제목", "bullets": ["요점", ["하위 요점", "하위 요점"], "요점"],
     "notes": "발표자 노트"},
    {"type": "two_column", "title": "비교", "left_title": "A", "left": ["..."],
     "right_title": "B", "right": ["..."]},
    {"type": "table", "title": "표", "columns": ["이름", "값"], "rows": [["a", "1"]],
     "col_widths": [3, 1]},
    {"type": "chart", "title": "차트", "chart_type": "COLUMN_CLUSTERED",
     "categories": ["2024", "2025"], "series": [{"name": "매출", "values": [10, 12]}],
     "number_format": "#,##0", "data_labels": true},
    {"type": "chart", "title": "분산형", "chart_type": "XY_SCATTER",
     "series": [{"name": "S1", "points": [[1, 2], [3, 4]]}]},
    {"type": "image", "title": "그림", "path": "스펙 기준 상대 경로 또는 절대 경로.png", "caption": "캡션"},
    {"type": "closing", "title": "감사합니다", "subtitle": "Q&A"}
  ]
}
```

빌더가 알아서 처리하므로 직접 설정할 필요가 없는 것들:

- **슬라이드 크기**는 16:9(13.333 × 7.5 in)이고, 모든 슬라이드는 빈 레이아웃에 같은 제목 막대, 강조선, 페이지 번호를 쓴다.
- **테마**: `blue`(기본), `dark`, `green`, 또는 `primary`, `accent`, `text`, `muted`, `light`를 16진수 색으로 덮어쓰는 객체.
- **한글 텍스트**: 글꼴을 라틴 슬롯뿐 아니라 동아시아 슬롯에도 기록한다. python-pptx의 `font.name`만 쓰면 한글이 테마 글꼴로 남는다.
- **글머리 크기**는 글머리 수가 늘수록 줄어든다(22pt에서 14pt까지). 8개를 넘으면 슬라이드가 비좁아지므로 두 장으로 나눈다.
- **표**: 머리글 행은 기본색, 행은 줄무늬로 표시되고, 숫자 셀은 오른쪽 정렬된다. 한 슬라이드에 12행 이하로 유지한다.
- **차트**: `chart_type`은 `XL_CHART_TYPE`의 어떤 이름이든 된다(73종: `COLUMN_CLUSTERED`, `BAR_STACKED`, `LINE_MARKERS`, `PIE`, `DOUGHNUT`, `AREA`, `XY_SCATTER`, `RADAR`, …). 범례는 계열이 둘 이상일 때 나타나고, 원형 차트에는 항상 나타난다. 원형·도넛형 차트에서 `data_labels`는 백분율을 표시한다.
- **이미지**는 비율을 유지한 채 콘텐츠 영역에 맞게 크기가 조정되고 가운데 정렬된다.

## 기존 덱 수정·분석

`scripts/pptx_tools.py`는 python-pptx에 공개 API가 없는 작업을 처리한다. 슬라이드 번호는 1부터 시작하고, `-o`는 새 파일이어야 한다.

| 명령 | 용도 |
|---|---|
| `inspect deck.pptx` | 슬라이드 수, 크기, 모든 도형의 종류와 첫 줄 텍스트, 표, 차트, 노트 |
| `text deck.pptx` | 모든 텍스트(들여쓰기 수준 포함), 표 셀, 노트를 출력. 덱 요약이나 번역 등에 사용 |
| `delete deck.pptx 3 -o new.pptx` | 3번 슬라이드 삭제 |
| `move deck.pptx 5 2 -o new.pptx` | 5번 슬라이드를 2번 위치로 이동 |
| `duplicate deck.pptx 2 -o new.pptx` | 2번 슬라이드를 바로 뒤에 복제 (차트가 있는 슬라이드는 불가) |

그 밖의 작업(텍스트 직접 수정, 도형 색 변경, 회사 템플릿의 개체 틀 채우기 등)은 짧은 python-pptx 스크립트를 작성한다. API는 `references/api.md`에서 찾는다. 이 문서에는 영역별 모든 기능과 코드 예제, python-pptx가 할 수 없는 작업과 우회 방법이 정리되어 있다. 사용자가 템플릿 `.pptx`를 주면 `Presentation(path)`로 열고, `inspect`로 레이아웃과 개체 틀을 확인한 뒤 개체 틀을 채운다. 템플릿 위에 덧그리지 않는다.

## 미리 알려야 할 한계

python-pptx는 애니메이션이나 슬라이드 전환 효과를 추가할 수 없다. SmartArt를 만들거나 편집할 수 없고, 슬라이드를 이미지나 PDF로 렌더링할 수 없으며, 암호로 보호된 파일을 열 수 없다. 요청이 이 중 하나에 의존하면 빌드한 뒤가 아니라 빌드하기 전에 말한다. 그 부분은 PowerPoint에서 덱을 열어 처리하는 것이 방법이다.
