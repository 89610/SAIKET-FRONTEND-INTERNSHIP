# Task 06 – NOVA Landing Page

A responsive product landing page for premium wireless headphones, with mobile navigation and newsletter validation.

## Project Description

NOVA is a marketing landing page created for Task 06 of the SaiKet Systems Front-End Development Internship. It promotes a fictional pair of premium wireless headphones through a hero section, product features, a product spotlight, customer reviews, and a newsletter signup.

The page is built with HTML, CSS, and JavaScript and adapts across desktop, tablet, and mobile screens. The newsletter form performs client-side validation only; no subscription data is sent to a server.

## Technologies Used

- HTML5
- CSS3
- CSS Grid and Flexbox
- Media queries and CSS transitions
- JavaScript (ES6)
- Google Fonts (Inter)
- Unsplash product photography

## Features Implemented

- Sticky navigation bar with the NOVA logo, section links, and a "Shop Now" call-to-action
- Mobile hamburger menu below 768px that toggles the navigation links
- Menu state reflected through `aria-expanded` and a changing toggle icon
- Menu closes automatically when a navigation link is selected
- Hero section with a headline, description, two calls-to-action, and key product statistics
- Four feature cards covering sound quality, noise cancellation, battery life, and comfort
- Product spotlight with a product image, description, price, and purchase link
- Three customer review cards with star ratings and verified-customer labels
- Newsletter form with empty-field and email-format validation
- Clear error and success messages displayed below the form
- Error message cleared when the user starts typing again
- Form reset after successful validation
- Dynamic copyright year updated by JavaScript
- Responsive breakpoints at 1024px, 767px, and 480px
- Feature grid changes from four columns to two and then one column on smaller screens
- Hover transitions on cards, buttons, images, and navigation links
- Accessible alternative text for images and an accessible label on the menu toggle

The "Shop Now" and "Get Yours Today" links navigate to page sections. No shopping cart, checkout, or backend subscription system is included.

## Project Screenshots

No screenshots are currently stored in this task folder, so no image previews are included here.

To add screenshots later, place the image files in a `screenshots/` directory inside this folder and reference them with relative paths:

```markdown
![NOVA landing page desktop view](screenshots/landing-desktop.png)
```

## Project Structure

```text
Landing-Page-06/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── script.js
```

`index.html` contains the page sections and form markup. `css/style.css` contains the design system, layout, and responsive breakpoints. `js/script.js` handles the mobile menu, newsletter validation, and dynamic copyright year.

## Installation and Setup

### Prerequisites

- A modern web browser such as Chrome, Edge, Firefox, or Safari
- An internet connection to load the Google Font and product images
- No package manager, dependencies, or build step

### Steps to Run Locally

1. Download or clone the repository.
2. Open a terminal in the repository root and move into this task folder:

   ```bash
   cd Landing-Page-06
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

5. Narrow the browser window below 768px to test the hamburger navigation.

## What I Learned

- How to structure a long marketing page into clear, reusable sections
- How to build a responsive navigation menu and keep its expanded state accessible
- How to validate a form on the client side and present success and error feedback
- How mobile-first breakpoints affect grids, typography, and spacing
- How CSS transitions add polish without requiring a JavaScript animation library
- How to keep page behaviour organized inside a `DOMContentLoaded` handler
- Why front-end form validation should not be treated as a substitute for server-side validation

## Author

**Anandakannan S.**

## Internship

**SaiKet Systems** – Front-End Development Internship
