# Task 05 – TaskFlow Task Manager

A browser-based task management application with persistent storage, live search, filters, and sorting.

## Project Description

TaskFlow is a smart task manager built for Task 05 of the SaiKet Systems Front-End Development Internship. Users can add, edit, complete, and delete tasks while tracking their progress through live statistics.

All tasks and the selected sorting preference are stored in the browser's `localStorage`, so the list survives page refreshes. The application is entirely client-side and does not use a backend, database, or account system.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Web Storage API (`localStorage`)
- Web Crypto API (`crypto.randomUUID()`)
- DOM APIs and event delegation
- Google Fonts (Inter)

## Features Implemented

- Add tasks through a form with empty-input validation and a 120-character limit
- Unique task IDs generated with `crypto.randomUUID()`
- Edit existing tasks through a prompt, with empty values rejected
- Delete tasks with a confirmation dialog before removal
- Mark tasks as pending or completed using a checkbox
- Completed tasks receive a completed text style and a status label
- Task statistics for total, pending, and completed counts
- Current date displayed in the welcome section
- Task list persisted in `localStorage` under the `taskflow_tasks` key
- Stored task data validated when the page loads, with corrupted or invalid entries filtered out
- Error handling for browsers where storage is unavailable
- Filters for All, Active, and Completed tasks
- Real-time, case-insensitive search with a clear-search button
- Search result count and context-aware empty states for no tasks, no matches, and empty filters
- Sorting by newest first, oldest first, A–Z, Z–A, and due date
- Sorting preference persisted under the `taskflow_sort` key
- Dynamic task count with correct singular and plural wording
- Event delegation for task completion, edit, and delete actions
- Accessible labels, live-region status messages, and visible keyboard focus styles
- Responsive layout at 768px, 550px, and 480px

Tasks without a due date are placed after dated tasks when the due-date sort is selected. Since the current form does not include a due-date field, this option is available for datasets that contain due dates.

## Project Screenshots

No screenshots are currently stored in this task folder, so no image previews are included here.

To add screenshots later, place the image files in a `screenshots/` directory inside this folder and reference them with relative paths:

```markdown
![TaskFlow task manager](screenshots/taskflow-desktop.png)
```

## Project Structure

```text
Todo-Application-05/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── script.js
```

`index.html` provides the application shell, form, statistics, search, filters, and task list container. `css/style.css` contains the component styles and responsive rules. `js/script.js` handles state, persistence, rendering, filtering, searching, sorting, and task actions.

## Installation and Setup

### Prerequisites

- A modern web browser with `localStorage` and Web Crypto support
- An internet connection to load the Google Font
- No package manager, dependencies, backend, or build step

### Steps to Run Locally

1. Download or clone the repository.
2. Open a terminal in the repository root and move into this task folder:

   ```bash
   cd Todo-Application-05
   ```

3. Open `index.html` in your browser:

   ```bash
   # Windows
   start index.html

   # macOS
   open index.html

   # Linux
   xdg-open index.html
   ```

4. Optional: serve the folder over HTTP with Python 3:

   ```bash
   python -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

5. Add a task, refresh the page, and confirm that the task remains in the list to verify local persistence.

## What I Learned

- How to implement complete create, read, update, and delete behaviour with plain JavaScript
- How to persist application state in `localStorage` and validate it safely on load
- How to combine filtering, searching, and sorting in a single rendering pipeline
- How event delegation reduces the number of listeners in a dynamic task list
- How to derive statistics from a single source of truth instead of storing duplicate counts
- How to handle browser storage errors without breaking the interface
- How responsive layout, focus styles, and live regions improve usability and accessibility

## Author

**Anandakannan S.**

## Internship

**SaiKet Systems** – Front-End Development Internship
