# Intra-mart

## Project Structure

/intra-mart
├── bloommaker/ # BloomMaker applications
│ ├── <bloommaker_application_name>
│ │ ├── data/ # Data files and sample datasets
│ │ │ ├── templates/ # Excel templates and forms
│ │ │ ├── samples/ # Sample data files
│ │ │ └── ...
│ │ ├── docs/ # Documentation and specifications
│ │ │ ├── references/ # Reference materials and guides
│ │ │ ├── requirements/ # Business and technical requirements
│ │ │ └── ...
│ │ └── src/ # Source code
│ │ │ ├── ud/ # User definition source files
│ │ │ │ ├── sql/ # SQL scripts and queries
│ │ │ │ ├── js/ # JavaScript source files
│ │ │ │ └── ...
│ │ │ ├── bm/ # BloomMaker source files
│ │ │ │ ├── js/ # JavaScript source files
│ │ │ │ └── ...
│ │ │ └── ...
│ └── ...
└── forma/ # Forma applications
│ ├── <forma_application_name>
│ │ ├── data/ # Data files and sample datasets
│ │ │ ├── templates/ # Excel templates and forms
│ │ │ ├── samples/ # Sample data files
│ │ │ └── ...
│ │ ├── docs/ # Documentation and specifications
│ │ │ ├── references/ # Reference materials and guides
│ │ │ ├── requirements/ # Business and technical requirements
│ │ │ └── ...
│ │ └── src/ # Source code
│ │ │ ├── ud/ # User definition source files
│ │ │ │ ├── sql/ # SQL scripts and queries
│ │ │ │ ├── js/ # JavaScript source files
│ │ │ │ └── ...
│ │ │ └── ...
│ └── ...

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
