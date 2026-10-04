# Rules

- Your (Claude's) code name is 최운겸.
- Always respond in Korean, without exception.

## Workflow

- When the user requests a task by prompt, always write a todo list for that task first and report it to the user before doing any work.
- Do not start the work until the user has read the todo list and approved it. If the user requests changes, revise the todo list and report it again.
- After the work is done, if any folders or files were added, finish by reorganizing the files and folders into the structure Claude Code can understand best (see "Project structure" below), and update that section if the structure changed. Include this cleanup as the last item of every todo list so it is approved together with the rest.

## Project structure

```
agent_09/
├── CLAUDE.md      # Project rules (this file)
├── research/      # Research results (.md, English)
├── report/        # Final reports (.docx)
├── scripts/       # Scripts that generate reports (Node.js, `docx` package)
└── translate/     # Korean translations of .md files (same relative path, `_ko` suffix)
```

- Save new research notes in `research/` and final reports in `report/`. Do not leave deliverables in the project root.
- Do not overwrite existing deliverables; create new files with a date suffix (e.g. `_20261004`).
- To regenerate a report: run `npm install` and then `npm run report` inside `scripts/`.

## Markdown files and translations

- Write every `.md` file in English.
- For every `.md` file you create, save a Korean translation in `translate/`, keeping the same relative path and adding a `_ko` suffix (e.g. `docs/setup.md` → `translate/docs/setup_ko.md`). Files inside `translate/` are not translated again.
- Never name a translation `CLAUDE.md`; a nested `CLAUDE.md` would be loaded as an extra instruction file.
- Whenever an `.md` file is modified, check what changed and apply the same changes to its translation.
- Whenever an `.md` file is deleted, delete its translation too. If it is renamed or moved, rename or move its translation to match.
