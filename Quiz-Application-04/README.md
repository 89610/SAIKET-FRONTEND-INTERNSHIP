# Task 04 – QuizMaster Quiz Application

An interactive multiple-choice quiz that tests web development knowledge and calculates a final score.

## Project Description

QuizMaster is a browser-based quiz application created for Task 04 of the SaiKet Systems Front-End Development Internship. It presents ten web development questions, validates that an answer is selected before continuing, tracks the user's score, and displays a result screen with a performance message.

All quiz logic runs in the browser with plain JavaScript. Questions are stored in a local array, and there is no backend, external quiz API, or saved progress.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- DOM APIs
- Google Fonts (Inter)

## Features Implemented

- Start screen with a quiz summary: 10 questions, 4 options each, and 10 points per question
- Ten built-in questions covering HTML, CSS, and JavaScript fundamentals
- Four answer options per question, generated dynamically with letter labels A to D
- Answer selection with a clear selected state and `aria-pressed` state updates
- Validation that prevents moving forward until an answer is selected
- Inline error message with `role="alert"` when no answer is chosen
- Question counter showing the current position in the quiz
- Progress bar and percentage text that update with each question
- Accessible progress indicator with `role="progressbar"` and live `aria-valuenow` values
- Scoring logic that awards 10 points for each correct answer, for a maximum of 100
- "Next Question" button that changes to "View Results" on the final question
- Result screen showing the final score out of 100
- Performance messages based on the final percentage: perfect, 70% or above, 40% or above, or below 40%
- Restart button that resets the score, question index, and selections
- Responsive layout below 600px
- Keyboard focus styles and hover feedback on buttons and options

Correct answers are evaluated when the user moves to the next question. The quiz does not display correct answers during the attempt; only the final score and performance message are shown.

## Project Screenshots

No screenshots are currently stored in this task folder, so no image previews are included here.

To add screenshots later, place the image files in a `screenshots/` directory inside this folder and reference them with relative paths:

```markdown
![QuizMaster start screen](screenshots/quiz-start.png)
```

## Project Structure

```text
Quiz-Application-04/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── script.js
```

`index.html` defines the start, quiz, and result screens. `css/style.css` contains the visual design and responsive rules. `js/script.js` holds the question data, application state, and all quiz behaviour.

## Installation and Setup

### Prerequisites

- A modern web browser such as Chrome, Edge, Firefox, or Safari
- An internet connection to load the Google Font
- No package manager, dependencies, or build step

### Steps to Run Locally

1. Download or clone the repository.
2. Open a terminal in the repository root and move into this task folder:

   ```bash
   cd Quiz-Application-04
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

- How to manage application state with a small set of variables instead of a framework
- How to render questions and options dynamically from a data array
- How to validate user input before advancing and provide clear feedback
- How to calculate scores and derive result messages from percentage thresholds
- How to update a progress bar and keep its accessibility attributes in sync
- How to reset an interface cleanly when a quiz is restarted
- How focus styles and semantic roles make an interactive quiz easier to use

## Author

**Anandakannan S.**

## Internship

**SaiKet Systems** – Front-End Development Internship
