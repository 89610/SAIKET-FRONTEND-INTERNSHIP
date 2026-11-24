/* ==========================================
   NOVA - PREMIUM HEADPHONES LANDING PAGE
   Task 6 - Saiket Systems Internship

   Module: JavaScript Interactivity
========================================== */


/* ==========================================
   1. APPLICATION INITIALIZATION
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("NOVA Landing Page Loaded Successfully!");

    initializeMobileMenu();

    initializeNewsletter();

    initializeNavigation();

    initializeCopyright();

});


/* ==========================================
   2. MOBILE NAVIGATION MENU
========================================== */

function initializeMobileMenu() {

    const menuToggle = document.getElementById("menuToggle");

    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) return;


    // Toggle mobile menu.

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    // Close menu when clicking a navigation link.

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}


/* ==========================================
   3. NEWSLETTER FORM VALIDATION
========================================== */

function initializeNewsletter() {

    const newsletterForm = document.getElementById("newsletterForm");

    const emailInput = document.getElementById("emailInput");

    const formMessage = document.getElementById("formMessage");


    if (!newsletterForm || !emailInput || !formMessage) return;


    newsletterForm.addEventListener("submit", function (event) {

        // Prevent page reload.

        event.preventDefault();


        const email = emailInput.value.trim();


        // Check empty email.

        if (email === "") {

            showFormMessage("Please enter your email address.", "error");

            return;

        }


        // Validate email format.

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            showFormMessage("Please enter a valid email address.", "error");

            return;

        }


        // Successful validation.

        showFormMessage(
            "Thank you! Your email has been validated successfully.",
            "success"
        );


        // Clear input.

        newsletterForm.reset();

    });


    // Remove previous message when user starts typing.

    emailInput.addEventListener("input", function () {

        formMessage.textContent = "";

        formMessage.className = "form-message";

    });

}


/* ==========================================
   4. DISPLAY FORM MESSAGES
========================================== */

function showFormMessage(message, type) {

    const formMessage = document.getElementById("formMessage");

    if (!formMessage) return;


    formMessage.textContent = message;

    formMessage.className = "form-message " + type;

}


/* ==========================================
   5. NAVIGATION INTERACTIONS
========================================== */

function initializeNavigation() {

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("Navigating to:", link.textContent.trim());

        });

    });

}


/* ==========================================
   6. DYNAMIC COPYRIGHT YEAR
========================================== */

function initializeCopyright() {

    const copyrightText = document.querySelector(".footer-bottom p");

    if (!copyrightText) return;


    const currentYear = new Date().getFullYear();

    copyrightText.textContent =
        `© ${currentYear} NOVA. All Rights Reserved.`;

}


/* ==========================================
   END OF JAVASCRIPT FUNCTIONALITY
========================================== */