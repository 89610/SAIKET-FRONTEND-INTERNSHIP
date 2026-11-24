# Task 01 – TechInsights Blog Post

A semantic, single-article blog page about artificial intelligence in web development.

## Project Description

TechInsights is a static blog page built for Task 01 of the SaiKet Systems Front-End Development Internship. It presents a complete article titled "The Future of Artificial Intelligence in Web Development", including an introduction, practical applications of AI, benefits, and a conclusion.

The focus of this task was semantic HTML5 document structure and content organization. No CSS or JavaScript is used, so the page intentionally renders with the browser's default styling.

## Technologies Used

- HTML5
- Remote featured image from Unsplash
- No CSS framework, JavaScript, or build tools

## Features Implemented

- Semantic page structure using `header`, `nav`, `main`, `article`, `section`, `figure`, and `footer` elements
- Site header with the TechInsights brand and a short tagline
- In-page navigation linking to the Introduction, Main Content, and Conclusion sections
- Article header with the full title, publication date, and author link
- Publication date marked up with the HTML `<time>` element and a machine-readable `datetime` value
- Featured image with descriptive alternative text and a visible `<figcaption>`
- Clearly separated article sections with a consistent heading hierarchy
- Bulleted list explaining AI use cases such as code generation, chatbots, personalization, and automated testing
- External "Read More About Web Development" link to MDN, opened safely with `rel="noopener noreferrer"`
- Document metadata including a meta description, author name, page title, and viewport settings
- Accessible navigation labelled with `aria-label`
- Footer with copyright information and author credit

## Project Screenshots

No screenshots are currently stored in this task folder, so no image previews are included here.

To add screenshots later, place the image files in a `screenshots/` directory inside this folder and reference them with relative paths:

```markdown
![TechInsights blog article](screenshots/blog-desktop.png)
```

## Project Structure

```text
Blog-Post-01/
├── index.html
└── README.md
```

All page content is contained in `index.html`. There are no stylesheet, script, or asset folders because the task was completed with plain HTML.

## Installation and Setup

### Prerequisites

- A modern web browser such as Chrome, Edge, Firefox, or Safari
- An internet connection to load the remote featured image
- No package manager, dependencies, or build step

### Steps to Run Locally

1. Download or clone the repository.
2. Open a terminal in the repository root and move into this task folder:

   ```bash
   cd Blog-Post-01
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

## What I Learned

- How to structure long-form content with semantic HTML rather than generic containers
- How to build a clear document outline using nested sections and correct heading levels
- How metadata such as the page title, description, author, and viewport affects SEO and sharing
- How features like `figcaption`, `time`, alternative text, and labelled navigation improve accessibility
- Why external links should use `rel="noopener noreferrer"` when opened in a new tab

## Author

**Anandakannan S.**

## Internship

**SaiKet Systems** – Front-End Development Internship
