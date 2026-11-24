# Task 02 – CARTIVA Product Card

A modern, responsive product card for a premium sneaker, designed as an e-commerce interface component.

## Project Description

CARTIVA is a focused product card interface created for Task 02 of the SaiKet Systems Front-End Development Internship. The page presents a single featured product with its image, category, rating, pricing, discount, and call-to-action.

The layout is built entirely with HTML and CSS. It demonstrates visual hierarchy, card composition, hover feedback, and responsive sizing without relying on a framework or JavaScript.

## Technologies Used

- HTML5
- CSS3
- CSS Flexbox
- CSS custom properties
- CSS transitions and media queries
- Google Fonts (Inter)
- Unsplash product photograph

## Features Implemented

- Centered product showcase with a page heading and collection label
- Single product card with a rounded layout, subtle shadow, and clean spacing
- Product image with descriptive alternative text and a "25% OFF" badge
- Product category, name, and short description
- Rating display with stars, a 4.5 value, and a review count of 128
- Price block showing the current price, struck-through original price, and savings
- Full-width "Add to Cart" button with hover, active, and keyboard focus styles
- Delivery information confirming free delivery
- Card lift and image zoom effects on hover using CSS transitions
- Responsive behaviour below 480px, including a fluid card width and reduced spacing
- CSS custom properties for consistent colours across the component
- Accessible details such as an `aria-label` on the star rating and `aria-hidden` on the decorative cart icon

The "Add to Cart" button is presentational only. No cart, checkout, or payment functionality is implemented in this task.

## Project Screenshots

No screenshots are currently stored in this task folder, so no image previews are included here.

To add screenshots later, place the image files in a `screenshots/` directory inside this folder and reference them with relative paths:

```markdown
![CARTIVA product card](screenshots/product-card-desktop.png)
```

## Project Structure

```text
Product-Card-02/
├── index.html
├── README.md
└── css/
    └── style.css
```

`index.html` contains the product card markup, while `css/style.css` holds all styling, transitions, and responsive rules.

## Installation and Setup

### Prerequisites

- A modern web browser such as Chrome, Edge, Firefox, or Safari
- An internet connection to load the Google Font and product image
- No package manager, dependencies, or build step

### Steps to Run Locally

1. Download or clone the repository.
2. Open a terminal in the repository root and move into this task folder:

   ```bash
   cd Product-Card-02
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

- How to compose a product card with a clear visual hierarchy from image to call-to-action
- How to present pricing information using current, original, and discount values
- How CSS custom properties keep colours consistent and make updates easier
- How hover transitions and keyboard focus states improve perceived quality and usability
- How to adapt a fixed-width component to smaller screens with a single media query
- How small accessibility details, such as rating labels and decorative icons, affect screen-reader output

## Author

**Anandakannan S.**

## Internship

**SaiKet Systems** – Front-End Development Internship
