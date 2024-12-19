# Intra-mart

## Project Structure

/intra-mart
├── bloommaker/ # BloomMaker applications
│ ├── apl102_scn_stock_nw_04
│ │ ├── data/ # Data files and sample datasets
│ │ ├── docs/ # Documentation and specifications
│ │ └── src/ # Source code
│ │ │ ├── sql/ # SQL scripts and queries
│ │ │ ├── js/ # JavaScript source files
│ ├── apl210_inventory_supply_nw_04
│ ├── apl409_parts_master_nw_04
│ └── ...
└── forma/ # Forma applications
├── apl001_machine
└── ...

## Commit Messages Convention

Format: `<type>(<scope>): <subject>`

Types:

- `feat` New feature
- `fix` Bug fix
- `docs` Documentation changes
- `style` Code formatting, missing semicolons, etc.
- `refactor` Code changes that neither fix bugs nor add features
- `test` Adding or modifying tests
- `chore` Updating build tasks, package manager configs, etc.

Example Commit Messages: feat(apl102): implement stock calculation logic; docs(bloommaker): update API documentation
