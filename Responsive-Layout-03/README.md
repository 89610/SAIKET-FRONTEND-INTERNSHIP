# Task 03 – TechHub Responsive Developer Dashboard

A responsive developer dashboard layout that reflows from a desktop grid to a single-column mobile view.

## Project Description

TechHub is a dashboard interface built for Task 03 of the SaiKet Systems Front-End Development Internship. It simulates a developer workspace with a navigation header, workspace sidebar, welcome area, statistics, recent project cards, and learning resources.

The project demonstrates a complete responsive layout built with CSS Grid and Flexbox. The only interaction is the "Explore Projects" button, which smooth-scrolls to the projects section using a small inline script.

## Technologies Used

- HTML5
- CSS3
- CSS Grid
- CSS Flexbox
- CSS custom properties
- Media queries
- JavaScript (inline DOM interaction)
- Google Fonts (Inter)

## Features Implemented

- Full-page CSS Grid layout with a full-width header, sidebar, main content area, and footer
- Full-height dashboard structure with a fixed-width sidebar on desktop
- Header with the TechHub logo, primary navigation, and developer profile indicator
- Sidebar navigation with an active "Dashboard" state and hover effects
- Sidebar learning card with a link to the resources section
- Welcome section with a short workspace summary
- "Explore Projects" button that scrolls smoothly to the Recent Projects section
- Statistics grid displaying total projects, completed tasks, and pending tasks
- Recent project cards with status labels, descriptions, progress bars, and technology tags
- Learning resources list covering HTML, CSS, and JavaScript
- Responsive layout at 1024px with a narrower sidebar and single-column resources
- Mobile layout at 768px that stacks the header, sidebar, content, and footer into one column
- Small-screen adjustments at 380px for navigation, sidebar links, and headings
- Smooth scrolling through both `scroll-behavior` and `scrollIntoView`
- Accessible labels on navigation regions and the statistics section
- Hover states and transitions for cards, buttons, and links

## Project Screenshots

No screenshots are currently stored in this task folder, so no image previews are included here.

To add screenshots later, place the image files in a `screenshots/` directory inside this folder and reference them with relative paths:

```markdown
![TechHub dashboard desktop view](screenshots/dashboard-desktop.png)
```

## Project Structure

```text
Responsive-Layout-03/
├── index.html
├── README.md
└── css/
    └── style.css
```

`index.html` contains the dashboard markup and the inline JavaScript for the explore button. `css/style.css` contains the layout, component styles, and all responsive breakpoints.

## Installation and Setup

### Prerequisites

- A modern web browser such as Chrome, Edge, Firefox, or Safari
- An internet connection to load the Google Font
- No package manager, dependencies, or build step

### Steps to Run Locally

1. Download or clone the repository.
2. Open a terminal in the repository root and move into this task folder:

   ```bash
   cd Responsive-Layout-03
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

5. Resize the browser window or use the browser's device emulation to review the desktop, tablet, and mobile layouts.

## What I Learned

- How to plan a full dashboard layout with CSS Grid and explicit rows and columns
- How to make a sidebar collapse into a horizontal navigation strip on smaller screens
- How to use breakpoints purposefully rather than hiding content arbitrarily
- How to combine `scroll-behavior: smooth` with `scrollIntoView` for predictable navigation
- How progress bars and status badges communicate project state without extra content
- How semantic landmarks and labelled navigation regions improve a complex page

## Author

**Anandakannan S.**

## Internship

**SaiKet Systems** – Front-End Development Internship
