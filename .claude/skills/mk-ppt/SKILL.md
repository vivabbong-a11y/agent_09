---
name: mk-ppt
description: Create, edit, and analyze PowerPoint (.pptx) decks in this project with python-pptx. Use this skill whenever the user asks for a presentation, PPT, slides, a slide deck, 발표 자료, 슬라이드, or PPT 제작/수정, wants a report or research note turned into slides, or wants to read, restructure (delete/move/duplicate slides), or extract text from an existing .pptx — even if they don't say "python-pptx".
---

# mk-ppt

Build and modify `.pptx` files with python-pptx 1.0.2 in the `agent_09` project. The fast path is a JSON spec rendered by `scripts/build_deck.py`; drop down to raw python-pptx only for things the spec doesn't cover.

## Project rules that apply here

These come from the project's CLAUDE.md, so follow them even when the user doesn't repeat them:

- Show the user a todo list (slide outline included) and wait for approval before building.
- Save finished decks in `report/`. Never overwrite an existing deck: use a date suffix such as `_20261018` (add `_v2` if that exists too). Both scripts refuse to overwrite, so a name clash fails loudly instead of losing work.
- Keep spec files and test output in the session scratchpad, not in the project, unless the user wants the spec kept.
- Talk to the user in Korean.

## Workflow

1. **Check the environment.** Run `python -c "import pptx; print(pptx.__version__)"`. If `python` opens the Microsoft Store or isn't found, use `C:\Users\vivab\AppData\Local\Programs\Python\Python313\python.exe`. If python-pptx is missing, install it with `python -m pip install python-pptx`, but ask the user first.
2. **Plan the content.** Turn the source material into an outline: one message per slide, 3–6 bullets, short phrases rather than sentences. If the source is a file in `research/` or `report/`, read it first. Put the detail in speaker notes (`notes`) so the slides stay readable.
3. **Write the spec** (format below) in the scratchpad.
4. **Build**: `python .claude/skills/mk-ppt/scripts/build_deck.py <spec.json>`
5. **Verify**: `python .claude/skills/mk-ppt/scripts/pptx_tools.py inspect report/<file>.pptx`. Check the slide count, that every table, chart, and picture is there, and that the notes are attached. Read the output, then fix the spec and rebuild if anything is off.
6. **Report** the file path and the slide list to the user.

## Spec format

```json
{
  "output": "report/AI_발전_발표_20261018.pptx",
  "title": "Deck title (also saved as document property)",
  "author": "최운겸",
  "theme": "blue",
  "font": "맑은 고딕",
  "footer": "Optional footer text",
  "slides": [
    {"type": "title", "title": "Main title", "subtitle": "Subtitle\nDate"},
    {"type": "section", "title": "1. Section name"},
    {"type": "bullets", "title": "Slide title", "bullets": ["Point", ["Sub-point", "Sub-point"], "Point"],
     "notes": "Speaker notes"},
    {"type": "two_column", "title": "Compare", "left_title": "A", "left": ["..."],
     "right_title": "B", "right": ["..."]},
    {"type": "table", "title": "Table", "columns": ["Name", "Value"], "rows": [["a", "1"]],
     "col_widths": [3, 1]},
    {"type": "chart", "title": "Chart", "chart_type": "COLUMN_CLUSTERED",
     "categories": ["2024", "2025"], "series": [{"name": "Sales", "values": [10, 12]}],
     "number_format": "#,##0", "data_labels": true},
    {"type": "chart", "title": "Scatter", "chart_type": "XY_SCATTER",
     "series": [{"name": "S1", "points": [[1, 2], [3, 4]]}]},
    {"type": "image", "title": "Picture", "path": "relative/to/spec/or/absolute.png", "caption": "Caption"},
    {"type": "closing", "title": "감사합니다", "subtitle": "Q&A"}
  ]
}
```

What the builder does for you, so you don't have to set it yourself:

- **Slide size** is 16:9 (13.333 × 7.5 in), and every slide uses the blank layout with the same title bar, accent line, and page number.
- **Themes**: `blue` (default), `dark`, `green`, or an object that overrides `primary`, `accent`, `text`, `muted`, `light` with hex colors.
- **Korean text**: the font is written to the East Asian slot as well as the Latin one. python-pptx's `font.name` alone would leave Hangul in the theme font.
- **Bullet size** shrinks as the bullet count grows (22pt down to 14pt). Past about 8 bullets the slide gets cramped, so split it into two slides instead.
- **Tables**: the header row uses the primary color, rows are banded, and numeric cells are right-aligned. Keep a table at 12 rows or fewer per slide.
- **Charts**: `chart_type` is any `XL_CHART_TYPE` name (73 types: `COLUMN_CLUSTERED`, `BAR_STACKED`, `LINE_MARKERS`, `PIE`, `DOUGHNUT`, `AREA`, `XY_SCATTER`, `RADAR`, …). A legend appears when there is more than one series, or always for pie charts. On pie and doughnut charts, `data_labels` shows percentages.
- **Images** are scaled to fit the content area with their aspect ratio kept, and centered.

## Editing or analyzing an existing deck

`scripts/pptx_tools.py` covers what python-pptx has no public API for. Slide numbers are 1-based, and `-o` must be a new file.

| Command | Purpose |
|---|---|
| `inspect deck.pptx` | Slide count, size, every shape with its type and first line of text, tables, charts, notes |
| `text deck.pptx` | Dump all text (with indent levels), table cells, and notes, e.g. to summarize or translate a deck |
| `delete deck.pptx 3 -o new.pptx` | Remove slide 3 |
| `move deck.pptx 5 2 -o new.pptx` | Move slide 5 to position 2 |
| `duplicate deck.pptx 2 -o new.pptx` | Copy slide 2 right after itself (not for slides with charts) |

For anything else, such as changing text in place, recoloring shapes, or filling a corporate template's placeholders, write a short python-pptx script. Look up the API in `references/api.md`, which lists every capability by area with code snippets, plus the things python-pptx cannot do and their workarounds. When the user hands you a template `.pptx`, open it with `Presentation(path)`, list its layouts and placeholders with `inspect`, and fill the placeholders. Don't draw over the template.

## Limits to tell the user about up front

python-pptx cannot add animations or slide transitions. It cannot create or edit SmartArt, render slides to images or PDF, or open password-protected files. If a request depends on one of these, say so before building rather than after. Opening the deck in PowerPoint is the way to do those parts.
