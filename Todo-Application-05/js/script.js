/* ==========================================
   TASKFLOW - SMART TASK MANAGER
   Version: 1.4

   Modules:
   - Task Management
   - Local Storage
   - Task Statistics
   - Task Filtering
   - Search Functionality
   - Task Sorting
   - Sorting Preference Persistence
========================================== */


/* ==========================================
   1. APPLICATION STATE
========================================== */

// Local Storage configuration.

const STORAGE_KEY = "taskflow_tasks";

const SORT_STORAGE_KEY = "taskflow_sort";


// Load previously saved tasks.

function loadTasks() {

    try {

        const savedTasks = localStorage.getItem(STORAGE_KEY);

        if (!savedTasks) {
            return [];
        }

        const parsedTasks = JSON.parse(savedTasks);

        // Validate stored data.

        if (!Array.isArray(parsedTasks)) {
            return [];
        }

        return parsedTasks.filter((task) => {

            return (
                task &&
                typeof task.id === "string" &&
                typeof task.text === "string" &&
                task.text.trim() !== "" &&
                typeof task.completed === "boolean"
            );

        });

    } catch (error) {

        console.error("Error loading tasks:", error);

        return [];

    }

}


// Application state.

const tasks = loadTasks();

let currentFilter = "all";

let currentSearch = "";


/* ==========================================
   2. DOM ELEMENT REFERENCES
========================================== */

// Task elements.

const taskForm = document.getElementById("taskForm");

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");


// Statistics elements.

const totalTasks = document.getElementById("totalTasks");

const pendingTasks = document.getElementById("pendingTasks");

const completedTasks = document.getElementById("completedTasks");


// Other elements.

const errorMessage = document.getElementById("errorMessage");

const taskCount = document.getElementById("taskCount");

const todayDate = document.getElementById("todayDate");


// Filter elements.

const filterButtons = document.querySelectorAll(".filter-button");


// Search elements.

const searchInput = document.getElementById("searchInput");

const clearSearchButton = document.getElementById("clearSearch");

const searchResultsCount = document.getElementById(
    "searchResultsCount"
);


// Sorting element.

const sortSelect = document.getElementById("sortSelect");


/* ==========================================
   3. SAVE TASKS TO LOCAL STORAGE
========================================== */

function saveTasks() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(tasks)
        );

        return true;

    } catch (error) {

        console.error("Error saving tasks:", error);

        errorMessage.textContent =
            "Unable to save tasks. Browser storage may be unavailable.";

        return false;

    }

}


/* ==========================================
   4. DISPLAY CURRENT DATE
========================================== */

function displayDate() {

    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

    todayDate.textContent = formattedDate;

}


/* ==========================================
   5. ADD NEW TASK
========================================== */

function addTask(event) {

    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (!taskText) {

        errorMessage.textContent =
            "Please enter a task description.";

        taskInput.focus();

        return;

    }

    const newTask = {

        id: crypto.randomUUID(),

        text: taskText,

        completed: false,

        createdAt: new Date().toISOString()

    };

    tasks.push(newTask);

    saveTasks();

    errorMessage.textContent = "";

    taskInput.value = "";

    renderTasks();

    updateStatistics();

    taskInput.focus();

}


/* ==========================================
   6. GET FILTERED AND SEARCHED TASKS
========================================== */

function getFilteredTasks() {

    let filteredTasks;


    // Apply status filter.

    switch (currentFilter) {

        case "active":

            filteredTasks = tasks.filter(
                (task) => !task.completed
            );

            break;


        case "completed":

            filteredTasks = tasks.filter(
                (task) => task.completed
            );

            break;


        default:

            filteredTasks = [...tasks];

    }


    // Apply case-insensitive search.

    if (currentSearch !== "") {

        filteredTasks = filteredTasks.filter((task) => {

            return task.text
                .toLowerCase()
                .includes(currentSearch);

        });

    }

    return filteredTasks;

}


/* ==========================================
   7. TASK SORTING
========================================== */

function sortTasks(taskArray) {

    const sortValue = sortSelect.value;

    // Create a copy to preserve original task order.

    const sortedTasks = [...taskArray];

    switch (sortValue) {


        // Newest tasks first.

        case "newest":

            sortedTasks.sort((a, b) => {

                return (
                    new Date(b.createdAt || 0) -
                    new Date(a.createdAt || 0)
                );

            });

            break;


        // Oldest tasks first.

        case "oldest":

            sortedTasks.sort((a, b) => {

                return (
                    new Date(a.createdAt || 0) -
                    new Date(b.createdAt || 0)
                );

            });

            break;


        // Alphabetical order.

        case "az":

            sortedTasks.sort((a, b) => {

                return a.text.localeCompare(
                    b.text,
                    undefined,
                    { sensitivity: "base" }
                );

            });

            break;


        // Reverse alphabetical order.

        case "za":

            sortedTasks.sort((a, b) => {

                return b.text.localeCompare(
                    a.text,
                    undefined,
                    { sensitivity: "base" }
                );

            });

            break;


        // Due date sorting.

        case "dueDate":

            sortedTasks.sort((a, b) => {

                const dateA = a.dueDate || "9999-12-31";

                const dateB = b.dueDate || "9999-12-31";

                return dateA.localeCompare(dateB);

            });

            break;

    }

    return sortedTasks;

}


/* ==========================================
   8. RENDER TASKS
========================================== */

function renderTasks() {

    taskList.replaceChildren();


    // Apply filtering, searching and sorting.

    const filteredTasks = sortTasks(
        getFilteredTasks()
    );


    // Update counters.

    updateTaskCount();

    updateSearchResultsCount();


    // Show empty state when no tasks match.

    if (filteredTasks.length === 0) {

        const emptyState = document.createElement("div");

        emptyState.className = "empty-state";


        const emptyIcon = document.createElement("div");

        emptyIcon.className = "empty-icon";


        const heading = document.createElement("h3");

        const description = document.createElement("p");


        // No tasks available.

        if (tasks.length === 0) {

            emptyIcon.textContent = "📝";

            heading.textContent = "No tasks yet";

            description.textContent =
                "Add your first task and start being productive.";

        }


        // No search results.

        else if (currentSearch !== "") {

            emptyIcon.textContent = "🔍";

            heading.textContent = "No matching tasks";

            description.textContent =
                `No tasks found for "${currentSearch}". Try another keyword.`;

        }


        // No tasks in selected filter.

        else {

            emptyIcon.textContent = "📋";

            heading.textContent = "No matching tasks";

            description.textContent =
                "There are no tasks in this filter.";

        }


        emptyState.append(
            emptyIcon,
            heading,
            description
        );

        taskList.appendChild(emptyState);

        return;

    }


    // Generate task cards.

    filteredTasks.forEach((task) => {

        const taskItem = document.createElement("div");

        taskItem.className = "task-item";

        taskItem.dataset.taskId = task.id;


        // Task details.

        const taskDetails = document.createElement("div");

        taskDetails.className = "task-details";


        // Checkbox.

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.className = "task-checkbox";

        checkbox.checked = task.completed;

        checkbox.dataset.action = "toggle";

        checkbox.dataset.taskId = task.id;

        checkbox.setAttribute(
            "aria-label",
            `Mark ${task.text} as ${task.completed ? "pending" : "completed"}`
        );


        // Task description.

        const taskText = document.createElement("span");

        taskText.className = "task-text";

        taskText.textContent = task.text;

        taskText.classList.toggle(
            "completed",
            task.completed
        );


        // Task status.

        const status = document.createElement("span");

        status.className = "task-status";

        status.textContent = task.completed
            ? "Completed"
            : "Pending";

        status.classList.toggle(
            "completed-status",
            task.completed
        );


        // Task actions.

        const taskActions = document.createElement("div");

        taskActions.className = "task-actions";


        // Edit button.

        const editButton = document.createElement("button");

        editButton.type = "button";

        editButton.className = "action-button edit-button";

        editButton.dataset.action = "edit";

        editButton.dataset.taskId = task.id;

        editButton.textContent = "Edit";


        // Delete button.

        const deleteButton = document.createElement("button");

        deleteButton.type = "button";

        deleteButton.className = "action-button delete-button";

        deleteButton.dataset.action = "delete";

        deleteButton.dataset.taskId = task.id;

        deleteButton.textContent = "Delete";


        // Assemble task details.

        taskDetails.append(
            checkbox,
            taskText
        );


        // Assemble task actions.

        taskActions.append(
            editButton,
            deleteButton
        );


        // Assemble task card.

        taskItem.append(
            taskDetails,
            status,
            taskActions
        );


        taskList.appendChild(taskItem);

    });

}


/* ==========================================
   9. UPDATE TASK COUNTER
========================================== */

function updateTaskCount() {

    const count = getFilteredTasks().length;

    taskCount.textContent =
        `${count} ${count === 1 ? "task" : "tasks"}`;

}


/* ==========================================
   10. UPDATE SEARCH RESULTS COUNT
========================================== */

function updateSearchResultsCount() {

    if (currentSearch === "") {

        searchResultsCount.textContent = "";

        return;

    }

    const count = getFilteredTasks().length;

    searchResultsCount.textContent =
        `${count} ${count === 1 ? "result" : "results"} found`;

}


/* ==========================================
   11. EDIT TASK
========================================== */

function editTask(taskId) {

    const task = tasks.find(
        (item) => item.id === taskId
    );

    if (!task) {
        return;
    }

    const updatedText = window.prompt(
        "Enter your updated task:",
        task.text
    );

    if (updatedText === null) {
        return;
    }

    const cleanedText = updatedText.trim();

    if (!cleanedText) {

        errorMessage.textContent =
            "Task description cannot be empty.";

        return;

    }

    task.text = cleanedText;

    saveTasks();

    errorMessage.textContent = "";

    renderTasks();

    updateStatistics();

}


/* ==========================================
   12. DELETE TASK
========================================== */

function deleteTask(taskId) {

    const taskIndex = tasks.findIndex(
        (task) => task.id === taskId
    );

    if (taskIndex === -1) {
        return;
    }

    const confirmation = window.confirm(
        "Are you sure you want to delete this task?"
    );

    if (!confirmation) {
        return;
    }

    tasks.splice(taskIndex, 1);

    saveTasks();

    errorMessage.textContent = "";

    renderTasks();

    updateStatistics();

}


/* ==========================================
   13. TOGGLE TASK COMPLETION
========================================== */

function toggleTask(taskId) {

    const task = tasks.find(
        (item) => item.id === taskId
    );

    if (!task) {
        return;
    }

    task.completed = !task.completed;

    saveTasks();

    renderTasks();

    updateStatistics();

}


/* ==========================================
   14. UPDATE TASK STATISTICS
========================================== */

function updateStatistics() {

    const total = tasks.length;

    const completed = tasks.filter(
        (task) => task.completed
    ).length;

    const pending = total - completed;

    totalTasks.textContent = total;

    pendingTasks.textContent = pending;

    completedTasks.textContent = completed;

}


/* ==========================================
   15. TASK EVENT DELEGATION
========================================== */


// Handle task completion.

taskList.addEventListener("change", (event) => {

    const checkbox = event.target.closest(
        '[data-action="toggle"]'
    );

    if (!checkbox || !taskList.contains(checkbox)) {
        return;
    }

    toggleTask(checkbox.dataset.taskId);

});


// Handle edit and delete actions.

taskList.addEventListener("click", (event) => {

    const actionElement = event.target.closest(
        "[data-action]"
    );

    if (
        !actionElement ||
        !taskList.contains(actionElement)
    ) {
        return;
    }

    const action = actionElement.dataset.action;

    const taskId = actionElement.dataset.taskId;


    if (action === "edit") {

        editTask(taskId);

        return;

    }


    if (action === "delete") {

        deleteTask(taskId);

    }

});


/* ==========================================
   16. TASK FILTER INITIALIZATION
========================================== */

function initializeFilters() {

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            currentFilter = button.dataset.filter;


            // Update active filter button.

            filterButtons.forEach((btn) => {

                btn.classList.remove("active");

            });

            button.classList.add("active");


            // Refresh task list.

            renderTasks();

        });

    });

}


/* ==========================================
   17. TASK SEARCH INITIALIZATION
========================================== */

function initializeSearch() {


    // Real-time search.

    searchInput.addEventListener("input", () => {

        currentSearch = searchInput.value
            .trim()
            .toLowerCase();


        // Show or hide clear button.

        clearSearchButton.hidden =
            currentSearch === "";


        // Refresh task list.

        renderTasks();

    });


    // Clear search.

    clearSearchButton.addEventListener("click", () => {

        searchInput.value = "";

        currentSearch = "";

        clearSearchButton.hidden = true;

        renderTasks();

        searchInput.focus();

    });

}


/* ==========================================
   18. SORTING PREFERENCE MANAGEMENT
========================================== */

// Valid sorting options.

const VALID_SORT_OPTIONS = [
    "newest",
    "oldest",
    "az",
    "za",
    "dueDate"
];


// Load saved sorting preference.

function loadSortPreference() {

    try {

        const savedSort = localStorage.getItem(
            SORT_STORAGE_KEY
        );

        if (VALID_SORT_OPTIONS.includes(savedSort)) {

            return savedSort;

        }

        return "newest";

    } catch (error) {

        console.error(
            "Error loading sorting preference:",
            error
        );

        return "newest";

    }

}


// Save sorting preference.

function saveSortPreference(sortValue) {

    try {

        if (!VALID_SORT_OPTIONS.includes(sortValue)) {
            return false;
        }

        localStorage.setItem(
            SORT_STORAGE_KEY,
            sortValue
        );

        return true;

    } catch (error) {

        console.error(
            "Error saving sorting preference:",
            error
        );

        return false;

    }

}


/* ==========================================
   19. TASK SORTING INITIALIZATION
========================================== */

function initializeSorting() {

    if (!sortSelect) {

        console.error(
            "Sorting dropdown not found."
        );

        return;

    }


    // Restore saved sorting preference.

    sortSelect.value = loadSortPreference();


    // Save preference whenever sorting changes.

    sortSelect.addEventListener("change", () => {

        saveSortPreference(sortSelect.value);

        renderTasks();

    });

}


/* ==========================================
   20. EVENT LISTENERS
========================================== */

taskForm.addEventListener("submit", addTask);


/* ==========================================
   21. APPLICATION INITIALIZATION
========================================== */

function initializeApp() {

    displayDate();

    // Initialize task filters.

    initializeFilters();


    // Initialize search functionality.

    initializeSearch();


    // Initialize sorting functionality.

    initializeSorting();


    // Display tasks.

    renderTasks();


    // Update statistics.

    updateStatistics();

}


// Start application.

initializeApp();