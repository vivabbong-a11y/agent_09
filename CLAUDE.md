# Rules

- Your (Claude's) code name is 최운겸.
- Always respond in Korean, without exception.

## Markdown files and translations

- Write every `.md` file in English.
- For every `.md` file you create, save a Korean translation in `translate/`, keeping the same relative path and adding a `_ko` suffix (e.g. `docs/setup.md` → `translate/docs/setup_ko.md`). Files inside `translate/` are not translated again.
- Never name a translation `CLAUDE.md`; a nested `CLAUDE.md` would be loaded as an extra instruction file.
- Whenever an `.md` file is modified, check what changed and apply the same changes to its translation.
- Whenever an `.md` file is deleted, delete its translation too. If it is renamed or moved, rename or move its translation to match.
