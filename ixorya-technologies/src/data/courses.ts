export interface CourseModule {
  moduleNumber: number;
  title: string;
  duration: string;
  summary: string;
  lessons: string[];
  handsOnLab: string;
}

export interface CourseProject {
  title: string;
  description: string;
  technologies: string[];
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  category: "kids" | "foundations" | "python" | "web" | "advanced";
  level: "Beginner" | "Intermediate" | "All Levels";
  duration: string;
  format: string;
  schedule: string;
  description: string;
  longDescription: string;
  audience: string;
  beginnerFriendly: boolean;
  topics: string[];
  prerequisites: string;
  outcomes: string[];
  curriculum: CourseModule[];
  projects: CourseProject[];
  toolsAndTech: string[];
  keyHighlights: string[];
  faqs: CourseFAQ[];
}

export const courses: Course[] = [
  {
    slug: "coding-for-kids",
    title: "Coding for Kids & Young Creators",
    subtitle: "Playful visual programming, logical puzzles, and game creation designed for bright young minds.",
    badge: "Ages 7–14",
    category: "kids",
    level: "Beginner",
    duration: "6 Weeks · 18 Live Hours",
    format: "Live Small Batches (Max 6) + Fun Gamified Quests",
    schedule: "Weekend Mornings & After-School Slots",
    description: "Age-appropriate activities and visual challenges that build curiosity, computational thinking, and creative problem-solving.",
    longDescription:
      "Coding for Kids is Ixorya Academy's flagship program for young explorers aged 7 to 14. We replace dull lectures with playful, colorful interactive challenges, visual block coding (Scratch), and foundational logic. Children learn how computers take instructions, build their own playable arcade games, craft animated storybooks, and discover the thrilling joy of creating their own software from scratch.",
    audience: "Kids (Ages 7–14) & Young Beginners",
    beginnerFriendly: true,
    topics: [
      "Computers and programs",
      "Algorithms",
      "Logical thinking",
      "Simple problem-solving",
      "Visual block coding",
      "Game mechanics & animations",
    ],
    prerequisites: "None! Just curiosity, a laptop or tablet, and excitement to create games.",
    keyHighlights: [
      "No boring syntax — visual drag-and-drop block coding first",
      "Max 6 students per batch for warm, attentive mentor focus",
      "Publish 3 playable mini-games to share with family & friends",
      "Graduation showcase with verified Junior Coder Certificate",
    ],
    toolsAndTech: ["Scratch 3.0", "Blockly", "Visual Logic Simulators", "Kid-Friendly Code Editors"],
    outcomes: [
      "Understand how computers, algorithms, and software work behind the scenes",
      "Develop strong analytical reasoning, step-by-step thinking, and debugging resilience",
      "Design, animate, and code interactive stories with custom characters and sounds",
      "Build playable games with score tracking, levels, collision physics, and sound effects",
      "Gain confidence using computers as creative instruments rather than passive screen time",
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: "How Computers Think & The Magic of Algorithms",
        duration: "Week 1",
        summary: "Discovering what code really is through fun real-world analogies, puzzles, and instructions.",
        lessons: [
          "Meet the Computer: Input, processing, and output",
          "What is an Algorithm? Giving precise instructions to a robot",
          "Exploring the Scratch studio: Sprites, stages, and backdrops",
          "First creation: Making your avatar move and speak",
        ],
        handsOnLab: "Build an interactive animated greeting card with speech bubbles and sound effects.",
      },
      {
        moduleNumber: 2,
        title: "Visual Storytelling, Costumes & Sound Effects",
        duration: "Week 2",
        summary: "Bringing characters to life with multi-frame animation, voice recording, and event triggers.",
        lessons: [
          "Event listeners: When Green Flag clicked & Key Press triggers",
          "Costume switching for walking and jumping animations",
          "Adding background music and custom voice effects",
          "Coordinates & positioning: X and Y on the digital screen",
        ],
        handsOnLab: "Craft an animated interactive story with multiple scenes and speaking characters.",
      },
      {
        moduleNumber: 3,
        title: "Loops, Repetition & Arcade Motion",
        duration: "Week 3",
        summary: "Learning loops to create smooth movement, bouncing balls, and gravity mechanics.",
        lessons: [
          "Why repeat? Using Repeat and Forever blocks",
          "Smooth keyboard movement for players (Arrow keys and WASD)",
          "Bouncing off edges and edge detection",
          "Creating obstacle sprites that move automatically",
        ],
        handsOnLab: "Program a 'Catch the Falling Stars' arcade game with timer countdown.",
      },
      {
        moduleNumber: 4,
        title: "Logic, Decisions & High Score Tracking",
        duration: "Week 4",
        summary: "Introducing conditionality: If/Else statements, score counters, and win/lose states.",
        lessons: [
          "If-Then and If-Then-Else conditional blocks",
          "Variables: Creating scores, health bars, and timer counters",
          "Sprite collisions: Touching color and touching sprite triggers",
          "Game states: Start screen, playing, and Game Over screen",
        ],
        handsOnLab: "Build a multi-level Maze Runner game with collectible coins and obstacle hazards.",
      },
      {
        moduleNumber: 5,
        title: "Cloning, Sound FX & Capstone Game Development",
        duration: "Week 5",
        summary: "Advanced mechanics: spawning waves of items with cloning and custom power-ups.",
        lessons: [
          "Sprite cloning: Generating endless obstacles and laser blasts",
          "Random numbers: Adding unpredictable surprises and game difficulty",
          "Brainstorming the capstone project: Concept, mechanics, and rules",
          "Live mentor pair-programming and troubleshooting",
        ],
        handsOnLab: "Code the core engine of your final arcade project with personalized artwork.",
      },
      {
        moduleNumber: 6,
        title: "Capstone Polish, Demo Day & Graduation",
        duration: "Week 6",
        summary: "Polishing user experience, playtesting with peers, and presenting at Demo Day.",
        lessons: [
          "Playtesting and bug fixing with classmates and mentor",
          "Adding bonus items, secret easter eggs, and victory fanfare",
          "Publishing the game online to the Scratch Community",
          "Junior Coder Demo Day presentation and certificate awarding",
        ],
        handsOnLab: "Present your finished game live to parents and peers on Demo Day!",
      },
    ],
    projects: [
      {
        title: "Catch the Falling Stars",
        description: "An animated arcade game where the player moves a basket to catch falling objects while dodging obstacles.",
        technologies: ["Scratch 3.0", "Motion Events", "Variables", "Sound FX"],
      },
      {
        title: "The Mystery Maze Runner",
        description: "A top-down puzzle adventure with walls, hidden keys, enemy guards, and a celebratory winning screen.",
        technologies: ["Collision Detection", "Coordinates (X/Y)", "If/Else Logic", "Costume Animation"],
      },
      {
        title: "Space Defender Arcade Capstone",
        description: "A feature-packed shooter game with sprite cloning, laser sounds, health meters, and high score persistence.",
        technologies: ["Cloning", "Game State Management", "Custom Sprites", "Score Persistence"],
      },
    ],
    faqs: [
      {
        question: "Does my child need any prior computer experience?",
        answer: "No prior coding experience is needed. If your child can use a mouse and keyboard to browse or play a game, they are ready to thrive in this course.",
      },
      {
        question: "What equipment or computer is required?",
        answer: "A laptop, desktop computer, or Chromebook with a modern web browser (Chrome, Edge, or Safari) and an internet connection. Scratch runs entirely in the browser.",
      },
      {
        question: "What are the class sizes?",
        answer: "We strictly cap our Kids batches at 6 students to ensure every child gets patient, enthusiastic, 1-on-1 support from our mentors.",
      },
    ],
  },
  {
    slug: "programming-fundamentals",
    title: "Programming Fundamentals & Algorithmic Thinking",
    subtitle: "The universal mental models, data structures, and problem-solving habits every software engineer must master.",
    badge: "Must-Have Foundation",
    category: "foundations",
    level: "Beginner",
    duration: "6 Weeks · 24 Live Hours",
    format: "Live Interactive Lectures + Mentored Problem-Solving Labs",
    schedule: "Weekend & Weekday Evening Batches",
    description: "Core ideas every programmer uses, taught step by step. Master variables, memory, control flow, functions, and algorithmic debugging.",
    longDescription:
      "Programming Fundamentals is the essential launching pad for anyone serious about mastering software engineering. Rather than having you memorize syntax blindly, this course demystifies how computers execute code, allocate memory, evaluate logic, and execute loops. By learning the universal building blocks present in C, Python, JavaScript, and Java, you build bulletproof engineering instincts that make learning any future programming language feel effortless.",
    audience: "Students, College Beginners, and Non-Tech Professionals",
    beginnerFriendly: true,
    topics: [
      "Variables",
      "Data types",
      "Conditionals",
      "Loops",
      "Functions",
      "Memory & scope",
      "Algorithmic thinking",
      "Debugging strategies",
    ],
    prerequisites: "None. Basic comfort with typing and general computer usage.",
    keyHighlights: [
      "Language-agnostic principles: Write clean code in Python and JavaScript",
      "Over 40 hands-on algorithmic problem challenges with live mentor feedback",
      "Build genuine mental models for recursion, complexity, and memory storage",
      "1-on-1 code reviews with practicing software engineers",
    ],
    toolsAndTech: ["VS Code", "Python 3", "JavaScript Runtime", "Git Basics", "CLI Terminal"],
    outcomes: [
      "Break down complex real-world problems into clear, step-by-step pseudo-code",
      "Master variable data types, memory references, and mutability vs immutability",
      "Write clean, idiomatic conditional branches and avoid common nested-if anti-patterns",
      "Implement efficient for, while, and do-while loops with correct termination conditions",
      "Architect modular programs with pure functions, parameters, return values, and scoped memory",
      "Confidently debug runtime errors, logic bugs, and off-by-one boundary conditions",
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: "Computation, Compilers & Memory Architecture",
        duration: "Week 1",
        summary: "How computers execute human code, from high-level instructions down to bytes in RAM.",
        lessons: [
          "Compilers vs. Interpreters: The translation bridge",
          "Variables as labeled boxes in memory",
          "Primitive types: Integers, floating points, booleans, and strings",
          "Operator precedence, arithmetic evaluation, and string concatenation",
        ],
        handsOnLab: "Write an interactive terminal unit converter and financial calculator.",
      },
      {
        moduleNumber: 2,
        title: "Control Flow: Boolean Logic & Branching Decisions",
        duration: "Week 2",
        summary: "Teaching programs to make intelligent choices using boolean algebra and conditional paths.",
        lessons: [
          "Boolean expressions: AND, OR, NOT truth tables",
          "If, Else-If, and Else branching structures",
          "Short-circuit evaluation and avoiding deep nesting",
          "Switch/Match case statements for clean multi-state logic",
        ],
        handsOnLab: "Build an Automated Loan Eligibility & Credit Assessment engine.",
      },
      {
        moduleNumber: 3,
        title: "Iteration Mastery: Loops & Sequence Processing",
        duration: "Week 3",
        summary: "Harnessing the computer's greatest superpower: lightning-fast repetitive execution.",
        lessons: [
          "While loops: Sentinel values, indefinite iteration, and infinite loop traps",
          "For loops: Ranges, counters, and iterating through sequences",
          "Loop control statements: Break, Continue, and Pass",
          "Nested loops: 2D grids, pattern printing, and time complexity intuition",
        ],
        handsOnLab: "Create a Prime Number sieve and an ASCII Art grid generator.",
      },
      {
        moduleNumber: 4,
        title: "Functions, Modularity & The Call Stack",
        duration: "Week 4",
        summary: "Organizing code into clean, testable, reusable units of logic.",
        lessons: [
          "Function definition, parameters, default arguments, and return values",
          "Scope: Global vs. Local memory namespaces",
          "Pure functions and side-effect management",
          "The Execution Call Stack and understanding stack traces",
        ],
        handsOnLab: "Develop a modular Command-Line Shopping Cart with tax and coupon calculations.",
      },
      {
        moduleNumber: 5,
        title: "Data Collections: Arrays, Lists & Dictionaries",
        duration: "Week 5",
        summary: "Structuring and manipulating grouped data efficiently.",
        lessons: [
          "Indexed arrays/lists: Access, slicing, appending, and deletion",
          "Key-Value pairs (Hash maps / Dictionaries)",
          "Searching fundamentals: Linear Search vs. Binary Search",
          "Sorting basics: Bubble sort mechanics and built-in algorithms",
        ],
        handsOnLab: "Build an in-memory Student Gradebook and Class Statistics analyzer.",
      },
      {
        moduleNumber: 6,
        title: "Defensive Coding, File I/O & Capstone Project",
        duration: "Week 6",
        summary: "Writing resilient software with exception handling and persistent file operations.",
        lessons: [
          "Exception handling: Try, Catch/Except, and Finally blocks",
          "Reading and writing text and structured JSON files",
          "Clean code principles and documentation docstrings",
          "Capstone build: Architecting a complete console application",
        ],
        handsOnLab: "Deliver the Console Banking & Account Ledger capstone application.",
      },
    ],
    projects: [
      {
        title: "Console Banking & Ledger Engine",
        description: "A secure terminal banking simulator handling deposits, withdrawals, PIN authentication, and transaction histories.",
        technologies: ["Data Structures", "Functions", "File I/O", "Exception Handling"],
      },
      {
        title: "Caesar Cipher Cryptography Suite",
        description: "An encryption/decryption CLI tool that implements classic cryptographic algorithms with custom key rotation.",
        technologies: ["String Manipulation", "ASCII Arithmetic", "Modular Math"],
      },
      {
        title: "Automated Habit & Task Tracker",
        description: "A persistent command-line productivity system with task prioritization, completion analytics, and JSON export.",
        technologies: ["JSON Storage", "Dictionary Mapping", "Input Validation"],
      },
    ],
    faqs: [
      {
        question: "Which programming language is used in this course?",
        answer: "We primarily use Python for its clean, readable syntax, while demonstrating how the exact same algorithmic structures translate to JavaScript and C.",
      },
      {
        question: "Is this suitable if I have zero coding background?",
        answer: "Yes, this course was engineered specifically for beginners. We assume zero prior programming knowledge and build your skills step-by-step.",
      },
      {
        question: "Will this help me in university computer science exams?",
        answer: "Extremely so! We cover the exact core syllabus tested in university CS101 and BCA/BTech data structure foundation courses.",
      },
    ],
  },
  {
    slug: "python-for-beginners",
    title: "Python for Beginners: From Zero to Automation",
    subtitle: "Write clean, real-world Python code for scripting, file automation, API consumption, and data analysis.",
    badge: "Most Popular",
    category: "python",
    level: "Beginner",
    duration: "8 Weeks · 32 Live Hours",
    format: "Live Interactive Mentorship + 1-on-1 Code Reviews",
    schedule: "Weekday Evenings & Weekend Batches",
    description: "Start programming in Python with practical exercises. Build CLI tools, automate repetitive tasks, handle files, and fetch live internet data.",
    longDescription:
      "Python is the world's most versatile, beginner-friendly, and in-demand programming language. In this hands-on course, you will leap from writing your first 'Hello World' to automating daily computer tasks, processing Excel and CSV files, consuming live REST APIs, and building object-oriented applications. Every lesson is anchored around practical software you can use in your daily workflow or add to your developer portfolio.",
    audience: "Students, Working Professionals, Data Aspirants, and Automation Seekers",
    beginnerFriendly: true,
    topics: [
      "Python syntax & PEP 8",
      "Lists, tuples & dictionaries",
      "File I/O & CSV processing",
      "Reusable code & modules",
      "Small automation projects",
      "REST APIs & JSON requests",
      "Object-oriented programming (OOP)",
      "Web scraping basics",
    ],
    prerequisites: "Programming Fundamentals is helpful, but motivated beginners can start directly.",
    keyHighlights: [
      "Write production-grade Python following industry PEP 8 conventions",
      "Build 4 real automation scripts: Excel cleaner, PDF organizer, web scraper, and API bot",
      "Learn Git version control and publish clean repositories to GitHub",
      "Weekly live code reviews by working Python engineers",
    ],
    toolsAndTech: ["Python 3.12+", "VS Code", "Pip & Virtualenv", "Requests", "BeautifulSoup4", "Git & GitHub"],
    outcomes: [
      "Write clean, idiomatic Python code with proper type hints, docstrings, and error handling",
      "Automate repetitive OS tasks: bulk renaming files, organizing directories, and extracting text",
      "Parse and transform complex data structures using list comprehensions and dictionaries",
      "Connect to live internet APIs to fetch weather, stock data, currencies, and news feeds",
      "Scrape data responsibly from public websites using BeautifulSoup4",
      "Architect scalable programs using Object-Oriented Programming (Classes, Methods, Inheritance)",
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: "Python Setup, Virtual Environments & Core Syntax",
        duration: "Week 1",
        summary: "Setting up a professional Python workstation with VS Code, virtual environments, and syntax fundamentals.",
        lessons: [
          "Installing Python 3.12 and setting up VS Code with Python extensions",
          "Working with virtual environments (venv) and pip package manager",
          "Dynamic typing, variables, formatted f-strings, and type conversions",
          "Interactive input and crafting user-friendly terminal prompts",
        ],
        handsOnLab: "Build an interactive Tip & Currency Splitter with formatted output.",
      },
      {
        moduleNumber: 2,
        title: "Advanced Data Structures & Pythonic Patterns",
        duration: "Week 2",
        summary: "Unlocking Python's superpower collections: Lists, Tuples, Dictionaries, and Sets.",
        lessons: [
          "List operations: Slicing, sorting, mapping, and filtering",
          "Dictionary deep dive: Nested records, get defaults, and key iteration",
          "Tuples, unpacking, and immutability advantages",
          "List and dictionary comprehensions for elegant one-liners",
        ],
        handsOnLab: "Create an Inventory Management & Price Analytics utility.",
      },
      {
        moduleNumber: 3,
        title: "Modular Code, Custom Modules & Package Ecosystem",
        duration: "Week 3",
        summary: "Structuring code into reusable functions, helper modules, and third-party packages.",
        lessons: [
          "Keyword arguments, *args, **kwargs, and return tuples",
          "Creating and importing local Python modules",
          "Exploring the Python Standard Library: math, datetime, random, and pathlib",
          "Installing and managing external packages with pip and requirements.txt",
        ],
        handsOnLab: "Develop a multi-file Date & Event Countdown Notification script.",
      },
      {
        moduleNumber: 4,
        title: "File Systems, CSV Data & Automated File Organization",
        duration: "Week 4",
        summary: "Reading, writing, and organizing local disk files, spreadsheets, and CSV datasets.",
        lessons: [
          "Safe file reading and writing with Python 'with' context managers",
          "Pathlib: Traversing directories, checking extensions, and moving files",
          "Parsing and generating CSV files with Python's built-in csv module",
          "Handling structured JSON configurations and exports",
        ],
        handsOnLab: "Build an Automated Desktop & Downloads Folder Cleaner that sorts files into categorized folders.",
      },
      {
        moduleNumber: 5,
        title: "Consuming REST APIs & Live Internet Data",
        duration: "Week 5",
        summary: "Connecting your Python scripts to the world web using HTTP requests and JSON endpoints.",
        lessons: [
          "HTTP verbs: GET, POST, status codes, and query parameters",
          "Making API requests using the popular 'requests' library",
          "Parsing nested JSON responses and extracting key metrics",
          "Authentication: Handling API keys securely using .env files",
        ],
        handsOnLab: "Build a Real-Time Weather & Exchange Rate Dashboard CLI.",
      },
      {
        moduleNumber: 6,
        title: "Web Scraping & Data Extraction with BeautifulSoup",
        duration: "Week 6",
        summary: "Extracting structured data from public web pages using HTML parsers.",
        lessons: [
          "Understanding HTML tree structure, tags, classes, and IDs",
          "Scraping web pages ethically with BeautifulSoup4",
          "Navigating DOM trees, finding elements, and extracting text/attributes",
          "Exporting scraped data into cleaned CSV and Excel reports",
        ],
        handsOnLab: "Develop a Real-Time E-Commerce Price Tracker with threshold alert notifications.",
      },
      {
        moduleNumber: 7,
        title: "Object-Oriented Programming (OOP) in Python",
        duration: "Week 7",
        summary: "Modeling complex real-world systems with classes, instances, and inheritance.",
        lessons: [
          "Classes, __init__ constructor, and self instance binding",
          "Instance attributes vs. Class attributes",
          "Methods: Instance methods, @classmethod, and @staticmethod",
          "Inheritance, method overriding, and polymorphism",
        ],
        handsOnLab: "Code an OOP Vehicle Rental & Customer Billing system.",
      },
      {
        moduleNumber: 8,
        title: "Capstone Project, Testing & GitHub Portfolio",
        duration: "Week 8",
        summary: "Architecting a comprehensive capstone project, writing unit tests, and pushing to GitHub.",
        lessons: [
          "Writing unit tests using Python's unittest and pytest",
          "Defensive programming with custom exception classes",
          "Creating a professional README.md with usage demos",
          "Publishing your project repository to GitHub for your portfolio",
        ],
        handsOnLab: "Complete, document, and present your Python Capstone project live to mentors.",
      },
    ],
    projects: [
      {
        title: "Smart Downloads & Disk Cleaner",
        description: "An automated background script that categorizes downloads, archives old files, and generates space-saving reports.",
        technologies: ["Python Pathlib", "File I/O", "Shutil", "Datetime"],
      },
      {
        title: "Live Crypto & Currency Tracker CLI",
        description: "A terminal dashboard fetching real-time market data from CoinGecko/Exchange APIs with ASCII sparkline charts.",
        technologies: ["Requests", "REST API", "JSON Parsing", "Rich CLI"],
      },
      {
        title: "Product Price Watchdog & Web Scraper",
        description: "A web crawler that monitors product listings, detects price discounts, and triggers desktop/email alerts.",
        technologies: ["BeautifulSoup4", "Requests", "CSV Export", "Email Notifications"],
      },
      {
        title: "Bank & Customer Account Management System",
        description: "A complete OOP system with user authentication, transactional safety, balance checking, and persistent logging.",
        technologies: ["Object-Oriented Python", "Classes & Inheritance", "JSON Persistence", "Unit Testing"],
      },
    ],
    faqs: [
      {
        question: "Is Python difficult to learn for someone without a technical background?",
        answer: "Not at all! Python has the cleanest, most English-like syntax of any modern language, making it the perfect first language for beginners.",
      },
      {
        question: "Will I learn how to build websites or AI with Python?",
        answer: "This course gives you the core foundation. After completing it, you can smoothly transition into our Web Development or AI Engineering advanced modules.",
      },
      {
        question: "Do I get 1-on-1 support when I get stuck on code?",
        answer: "Yes! You have direct access to our engineering mentors through our dedicated WhatsApp cohort channel and weekly 1:1 office hours.",
      },
    ],
  },
  {
    slug: "web-development-fundamentals",
    title: "Modern Web Development: HTML, CSS & JavaScript",
    subtitle: "Build responsive, accessible, high-performance websites from scratch and deploy them to the global web.",
    badge: "High Demand",
    category: "web",
    level: "All Levels",
    duration: "8 Weeks · 32 Live Hours",
    format: "Project-Centric Live Classes + Deployed GitHub Portfolios",
    schedule: "Weekend & Evening Batches",
    description: "Build interactive, responsive webpages using modern HTML5 semantic markup, modern CSS layouts (Flexbox & Grid), and vanilla JavaScript ES6+.",
    longDescription:
      "Every company in the world needs a modern web presence. In this flagship web development program, you will learn the three cornerstone technologies of the internet: semantic HTML5, cutting-edge CSS3 (Flexbox, CSS Grid, custom properties, and responsive design), and modern JavaScript (ES6+, DOM manipulation, event loops, and asynchronous APIs). You will build real-world sites and deploy them live on Vercel and GitHub Pages.",
    audience: "Students, Aspiring Frontend Developers, UI/UX Designers, and Business Owners",
    beginnerFriendly: true,
    topics: [
      "HTML5 semantic markup",
      "CSS3 styling & modern layouts",
      "Flexbox & CSS Grid",
      "Responsive & mobile-first design",
      "JavaScript ES6+ fundamentals",
      "DOM manipulation & browser events",
      "Fetch API & Async/Await",
      "Git, GitHub & Live Deployment",
    ],
    prerequisites: "Basic computer navigation skills. No prior coding experience required.",
    keyHighlights: [
      "Zero fluff: Write clean code without relying on bulky page builders or templates",
      "Build 4 real websites from mobile mockups to live production URLs",
      "Master modern responsive layouts with Flexbox and CSS Grid",
      "Host your personal developer portfolio live on the web with custom domain setup",
    ],
    toolsAndTech: ["HTML5", "CSS3", "JavaScript ES6+", "VS Code", "Chrome DevTools", "Git & GitHub", "Vercel"],
    outcomes: [
      "Structure accessible, SEO-optimized web documents with HTML5 semantic elements",
      "Master CSS architecture: The Box Model, Cascade, Specificity, and CSS Variables",
      "Build complex responsive multi-column layouts using CSS Flexbox and 2D CSS Grid",
      "Implement mobile-first responsive design that looks stunning on phones, tablets, and 4K displays",
      "Program interactive user interfaces using vanilla JavaScript DOM events and state management",
      "Fetch dynamic data asynchronously from internet APIs using Async/Await and render live updates",
      "Manage source code with Git version control and deploy live websites to Vercel/GitHub Pages",
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: "The Architecture of the Web & Semantic HTML5",
        duration: "Week 1",
        summary: "How the web works, client-server relationships, HTTP, and clean semantic document markup.",
        lessons: [
          "How the Internet works: DNS, IP addresses, HTTP/HTTPS, and browsers",
          "Setting up VS Code with Emmet shortcuts and Live Server",
          "Semantic HTML5 tags: header, nav, main, section, article, aside, footer",
          "Accessible forms: Labels, inputs, select, validation, and accessibility (a11y) basics",
        ],
        handsOnLab: "Build an accessible, SEO-optimized Multi-Page Restaurant Menu & Reservation website.",
      },
      {
        moduleNumber: 2,
        title: "CSS3 Foundations, Typography & The Box Model",
        duration: "Week 2",
        summary: "Mastering CSS selectors, visual styling, typography, and box model mechanics.",
        lessons: [
          "The CSS Box Model: Margin, border, padding, and content dimensions",
          "Box-sizing border-box and CSS reset best practices",
          "Google Fonts typography, line heights, font-weights, and color theory",
          "CSS Custom Properties (Variables) and structuring maintainable stylesheets",
        ],
        handsOnLab: "Style a luxury Product Showcase Card with hover effects and custom shadows.",
      },
      {
        moduleNumber: 3,
        title: "Modern Layouts with Flexbox & CSS Grid",
        duration: "Week 3",
        summary: "Say goodbye to float hacks: Master 1D Flexbox and 2D CSS Grid systems.",
        lessons: [
          "Flexbox axes: Justify-content, align-items, flex-direction, and flex-wrap",
          "Flex sizing: flex-grow, flex-shrink, and flex-basis math",
          "CSS Grid: Grid-template-columns, fr units, minmax, and repeat syntax",
          "Grid areas and building complex bento-grid layouts",
        ],
        handsOnLab: "Create a modern SaaS Feature Bento Grid with responsive column spans.",
      },
      {
        moduleNumber: 4,
        title: "Mobile-First Responsive Design & Micro-Animations",
        duration: "Week 4",
        summary: "Designing for small screens first, media queries, and smooth transitions.",
        lessons: [
          "The Mobile-First mindset: Why and how to design for smartphones first",
          "CSS Media Queries (@media) and standard responsive breakpoints",
          "Responsive images with srcset and picture tags",
          "CSS transitions, transforms, keyframe animations, and subtle micro-interactions",
        ],
        handsOnLab: "Build a fully responsive Startup Landing Page with mobile hamburger navigation.",
      },
      {
        moduleNumber: 5,
        title: "JavaScript Foundations & DOM Manipulation",
        duration: "Week 5",
        summary: "Adding life to web pages: Variables, conditions, functions, and manipulating HTML elements.",
        lessons: [
          "Linking JavaScript to HTML: Defer vs. async script tags",
          "Variables (let/const), data types, and template literals",
          "Querying the DOM: querySelector, querySelectorAll, and element navigation",
          "Modifying DOM elements: textContent, innerHTML, classList, and inline styles",
        ],
        handsOnLab: "Program an interactive Dark/Light Mode Theme Toggle with localStorage persistence.",
      },
      {
        moduleNumber: 6,
        title: "Event Listeners, Forms & Interactive UI Components",
        duration: "Week 6",
        summary: "Capturing clicks, key presses, form submissions, and building dynamic UI components.",
        lessons: [
          "Event listeners: click, submit, input, change, and keydown",
          "Event object: preventDefault, stopPropagation, and event delegation",
          "Building interactive tabs, accordions, and modal dialogs",
          "Client-side form validation with real-time error feedback",
        ],
        handsOnLab: "Develop an Interactive Filterable Product Catalog with dynamic cart counters.",
      },
      {
        moduleNumber: 7,
        title: "Asynchronous JavaScript, APIs & Fetching Data",
        duration: "Week 7",
        summary: "Communicating with backend servers and updating the interface without refreshing.",
        lessons: [
          "Synchronous vs. Asynchronous execution in the JavaScript Event Loop",
          "Promises and the modern Async/Await syntax",
          "Fetching data with the native Fetch API and handling HTTP errors",
          "Dynamically rendering API response cards into the DOM",
        ],
        handsOnLab: "Build a Live Global Weather Web Application with city search and animated weather icons.",
      },
      {
        moduleNumber: 8,
        title: "Git, GitHub & Live Portfolio Deployment",
        duration: "Week 8",
        summary: "Version control workflows, pushing code to GitHub, and deploying to Vercel.",
        lessons: [
          "Git basics: git init, add, commit, branch, and status",
          "Pushing repositories to GitHub and writing clear commit messages",
          "Continuous deployment with Vercel and GitHub Pages",
          "Publishing your complete Personal Developer Portfolio to a live URL",
        ],
        handsOnLab: "Deploy your polished Personal Developer Portfolio live to the web!",
      },
    ],
    projects: [
      {
        title: "Modern SaaS Landing Page",
        description: "A conversion-optimized, mobile-responsive startup page featuring glassmorphic navigation, pricing toggle, and animated testimonials.",
        technologies: ["HTML5", "CSS3 Flexbox/Grid", "Mobile-First Design", "Micro-Animations"],
      },
      {
        title: "Interactive E-Commerce Storefront",
        description: "A dynamic shopping interface with category filtering, instant search, modal product previews, and shopping cart persistence.",
        technologies: ["JavaScript ES6+", "DOM Manipulation", "LocalStorage", "Event Delegation"],
      },
      {
        title: "Live Weather & Forecast Web App",
        description: "A responsive weather application fetching real-time meteorological data and 5-day forecasts from the OpenWeatherMap API.",
        technologies: ["Async/Await", "Fetch API", "REST Endpoints", "Dynamic DOM Rendering"],
      },
      {
        title: "Personal Developer Portfolio & Showcase",
        description: "A custom personal portfolio website highlighting projects, technical skills, interactive contact form, and dark mode.",
        technologies: ["HTML5", "CSS Custom Properties", "Git & GitHub", "Vercel Deployment"],
      },
    ],
    faqs: [
      {
        question: "Do I need to learn frameworks like React before this course?",
        answer: "No! Mastering vanilla HTML, CSS, and modern JavaScript first is what separates great developers from struggling ones. After this course, React will feel natural and easy.",
      },
      {
        question: "Will I have live websites I can show to employers or clients?",
        answer: "Yes, you will finish the course with at least 4 deployed, publicly accessible projects hosted on Vercel and GitHub Pages.",
      },
      {
        question: "Is this course live or pre-recorded?",
        answer: "All our classes are 100% live with interactive engineering mentors who answer your questions, review your code, and guide your hands-on labs in real time.",
      },
    ],
  },
  {
    slug: "full-stack-web-development",
    title: "Full-Stack Web Engineering: React, Next.js & Node",
    subtitle: "Level up to build scalable, database-backed web applications with modern React, Next.js, and server-side APIs.",
    badge: "Career Booster",
    category: "web",
    level: "Intermediate",
    duration: "10 Weeks · 40 Live Hours",
    format: "Engineering Team Sprints + Live Pull Request Reviews",
    schedule: "Weekend Intensive Batches",
    description: "Transition from basic scripts to production-grade applications with React components, Next.js server actions, PostgreSQL/MongoDB, and REST/GraphQL APIs.",
    longDescription:
      "Modern full-stack engineering demands mastery across the entire digital stack: component-driven user interfaces in React 19, server-rendered high-performance architectures in Next.js, robust backend REST APIs in Node.js, and persistent relational data in PostgreSQL. In this intensive program, you will build and deploy a production-grade SaaS application complete with user authentication, database ORMs, file uploads, and payment webhooks.",
    audience: "Frontend Developers, CS Undergraduates, and Career Switchers",
    beginnerFriendly: false,
    topics: [
      "React 19 components & hooks",
      "Next.js App Router & SSR",
      "Node.js & Express / Server Actions",
      "PostgreSQL & Prisma ORM",
      "Authentication & JWT / NextAuth",
      "API design & state management",
      "Vercel & Cloud deployment",
      "CI/CD & Production security",
    ],
    prerequisites: "Comfortable with JavaScript ES6+, HTML5, and CSS fundamentals.",
    keyHighlights: [
      "Architect a complete SaaS product with user auth, PostgreSQL database, and Stripe payments",
      "Hands-on experience with modern Next.js 15+ App Router, Server Components, and Server Actions",
      "Simulate engineering agency sprints with GitHub PR reviews and automated linting",
      "Career preparation: Portfolio review, technical mock interviews, and resume guidance",
    ],
    toolsAndTech: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "Vercel"],
    outcomes: [
      "Build complex, interactive single-page and server-rendered web applications with React & Next.js",
      "Master modern React state patterns with useState, useEffect, useContext, and custom hooks",
      "Architect relational database schemas and write type-safe queries using PostgreSQL and Prisma ORM",
      "Implement secure authentication with session cookies, JWTs, and social OAuth providers",
      "Design robust REST APIs with error handling, rate limiting, and input validation schemas",
      "Deploy scalable full-stack applications with environment management and production logging",
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: "Modern React 19: Components, Props & Hooks",
        duration: "Weeks 1–2",
        summary: "The mental model of declarative UI: Component hierarchy, state, effects, and memoization.",
        lessons: [
          "JSX syntax, component decomposition, and composition patterns",
          "State management with useState and handling complex state transitions",
          "Side effects, cleanup functions, and lifecycle with useEffect",
          "Custom React hooks for reusable logic and data fetching",
        ],
        handsOnLab: "Build a Kanban Task Management Board with drag-and-drop state.",
      },
      {
        moduleNumber: 2,
        title: "Next.js App Router, Server Components & SSR",
        duration: "Weeks 3–4",
        summary: "Next-generation full-stack React: Server Components, client boundaries, routing, and metadata.",
        lessons: [
          "Next.js file-system routing, layouts, error boundaries, and loading skeletons",
          "React Server Components (RSC) vs. Client Components ('use client')",
          "Data fetching on the server, caching strategies, and revalidation",
          "SEO optimization with dynamic OpenGraph metadata and sitemaps",
        ],
        handsOnLab: "Develop a high-performance Content Publishing & Blog Platform with dynamic routing.",
      },
      {
        moduleNumber: 3,
        title: "Backend Engineering, Node.js & Server Actions",
        duration: "Weeks 5–6",
        summary: "Handling server logic, API endpoints, Server Actions, and validation.",
        lessons: [
          "Next.js Server Actions and Route Handlers (API routes)",
          "Form data processing, optimistic UI updates, and useTransition",
          "Input validation and schema enforcement using Zod",
          "Handling file uploads, cloud storage, and email notifications",
        ],
        handsOnLab: "Build a Customer Feedback & Ticketing portal with automated email alerts.",
      },
      {
        moduleNumber: 4,
        title: "Databases, PostgreSQL & Prisma ORM",
        duration: "Weeks 7–8",
        summary: "Relational data modeling, migrations, relationships, and type-safe querying.",
        lessons: [
          "Relational databases: Tables, primary keys, foreign keys, and indexes",
          "Modeling schemas with Prisma ORM (1-to-1, 1-to-Many, Many-to-Many)",
          "Database migrations, seeding, and connecting to Neon / Supabase PostgreSQL",
          "Type-safe CRUD operations, transactions, and pagination algorithms",
        ],
        handsOnLab: "Build the complete data layer for an E-Commerce Marketplace with cart and order relations.",
      },
      {
        moduleNumber: 5,
        title: "Authentication, Security & Capstone SaaS Deployment",
        duration: "Weeks 9–10",
        summary: "User sessions, password hashing, OAuth, payment webhooks, and production deployment.",
        lessons: [
          "Authentication workflows: NextAuth/Auth.js with credentials and Google OAuth",
          "Role-based access control (RBAC) and protected route middleware",
          "Security essentials: CORS, CSRF, sanitization, and environment secrets",
          "Production deployment on Vercel with database pooling, monitoring, and domain DNS",
        ],
        handsOnLab: "Ship your full-stack Capstone SaaS platform live to production with complete auth and database.",
      },
    ],
    projects: [
      {
        title: "DevSprint - Project Management SaaS",
        description: "A collaborative workspace tool with kanban boards, real-time comment threads, role assignments, and team invitations.",
        technologies: ["Next.js App Router", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
      },
      {
        title: "Digital Marketplace Platform",
        description: "A digital assets marketplace where creators sell templates and downloads, complete with Stripe checkout and download links.",
        technologies: ["React 19", "Next.js Server Actions", "Stripe API", "Supabase", "Zod"],
      },
    ],
    faqs: [
      {
        question: "Do I need to know TypeScript before joining?",
        answer: "Basic JavaScript experience is needed; we introduce TypeScript step-by-step from day one and teach you how to write type-safe code naturally.",
      },
      {
        question: "Can I use the projects from this course on my job resume?",
        answer: "Absolutely. These are complete, deployable, database-backed applications with live URLs and GitHub repositories that demonstrate real full-stack capability.",
      },
    ],
  },
  {
    slug: "ai-engineering-and-prompting",
    title: "Applied AI, Prompt Engineering & Automation",
    subtitle: "Harness modern LLMs, prompt patterns, agentic workflows, and API integrations for real business automation.",
    badge: "Future-Ready",
    category: "advanced",
    level: "All Levels",
    duration: "4 Weeks · 16 Live Hours",
    format: "Hands-On Interactive Workshops + AI Pipeline Building",
    schedule: "Weekend Cohorts",
    description: "Learn how to use AI practically. Integrate OpenAI/Gemini/Anthropic APIs, build autonomous agents, parse documents, and automate repetitive workflows.",
    longDescription:
      "Artificial Intelligence is redefining how software is engineered and how modern companies operate. Rather than treating AI like a novelty, this intensive hands-on program teaches you how to systematically engineer prompts, leverage structured outputs, connect LLMs to external tools and databases, and build real-world automation pipelines that save hours of human labor every week.",
    audience: "Developers, Tech Professionals, Solopreneurs, and Product Builders",
    beginnerFriendly: true,
    topics: [
      "Prompt engineering & system personas",
      "OpenAI, Gemini & Anthropic APIs",
      "Structured JSON outputs & function calling",
      "RAG & vector embeddings basics",
      "AI agent workflows & tool use",
      "Automated document processing",
      "Building web-based AI assistants",
    ],
    prerequisites: "Basic familiarity with Python or JavaScript is helpful, but motivated learners with good computer literacy can succeed.",
    keyHighlights: [
      "Master systematic prompt engineering techniques (Few-Shot, Chain-of-Thought, ReAct)",
      "Build a custom AI knowledge base assistant that answers questions from company PDFs",
      "Connect LLMs to real-time APIs to perform autonomous tasks and data summaries",
      "Learn how to choose between OpenAI, Anthropic Claude, and Google Gemini models",
    ],
    toolsAndTech: ["OpenAI API", "Google Gemini API", "Anthropic Claude", "Python", "LangChain / AI SDK", "Pinecone", "Next.js"],
    outcomes: [
      "Design robust system prompts that prevent hallucination and guarantee predictable formats",
      "Use Function Calling and Tool Use to give LLMs the power to execute code and search the web",
      "Build Retrieval-Augmented Generation (RAG) pipelines that accurately query private PDFs and documents",
      "Automate business workflows like customer support routing, document summarization, and lead qualification",
      "Deploy an interactive web-based AI chatbot powered by Next.js and streaming response UI",
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: "Prompt Engineering & Cognitive Architectures",
        duration: "Week 1",
        summary: "Mastering the science of prompt design, system instructions, and token economics.",
        lessons: [
          "How LLMs process tokens, temperature, top-p, and context windows",
          "Zero-shot, Few-shot, and Chain-of-Thought prompting patterns",
          "System instructions, developer personas, and guardrails against jailbreaks",
          "Enforcing structured JSON outputs with schema validation",
        ],
        handsOnLab: "Build an automated Resume Screening & Evaluation Engine that returns structured scores.",
      },
      {
        moduleNumber: 2,
        title: "LLM APIs, SDKs & Streaming Responses",
        duration: "Week 2",
        summary: "Connecting to OpenAI, Gemini, and Claude APIs using Python and TypeScript.",
        lessons: [
          "Authentication, API keys, rate limits, and cost management",
          "Handling chat completion histories and conversation state",
          "Streaming server-sent event (SSE) responses for instant user feedback",
          "Multi-modal inputs: Processing images, invoices, and charts with vision models",
        ],
        handsOnLab: "Code a Multimodal Invoice & Receipt Parser that extracts financial line items into CSV.",
      },
      {
        moduleNumber: 3,
        title: "Function Calling, Tools & Autonomous Agents",
        duration: "Week 3",
        summary: "Giving AI hands: Function calling, external tool execution, and the ReAct pattern.",
        lessons: [
          "Function calling / Tool use: Defining tool schemas and parameter types",
          "Handling tool calls: Executing database queries or web searches and returning results to the LLM",
          "The ReAct (Reason + Act) loop: How autonomous agents make sequential decisions",
          "Building an agent that searches live weather, currency rates, and calendar bookings",
        ],
        handsOnLab: "Create an Autonomous Research Assistant that searches the web and synthesizes an executive memo.",
      },
      {
        moduleNumber: 4,
        title: "RAG Knowledge Bases & Capstone AI Chatbot",
        duration: "Week 4",
        summary: "Retrieval-Augmented Generation: Vector embeddings, document chunking, and final project demo.",
        lessons: [
          "Why RAG? Overcoming LLM knowledge cutoffs and private data limitations",
          "Text chunking strategies, vector embeddings, and semantic similarity search",
          "Querying vector stores (Pinecone / ChromaDB) and injecting context into prompts",
          "Deploying a custom AI Chatbot with streaming UI on Vercel",
        ],
        handsOnLab: "Ship a live AI Knowledge Assistant that answers customer questions from company PDF manuals.",
      },
    ],
    projects: [
      {
        title: "Smart Document & Contract Analyzer",
        description: "An automated pipeline that ingests multi-page legal contracts, identifies liability clauses, and generates risk summaries.",
        technologies: ["OpenAI Vision", "Python", "PDFPlumber", "Structured JSON"],
      },
      {
        title: "Customer Support AI Agent with Tool Calling",
        description: "A customer care bot capable of checking order status from a database, issuing refunds, and escalating issues to human agents.",
        technologies: ["Function Calling", "Tool Use", "REST APIs", "Streaming Responses"],
      },
      {
        title: "Private PDF Knowledge Base Chatbot",
        description: "A full-stack web application allowing users to upload documents and chat with their content with cited sources.",
        technologies: ["Next.js", "AI SDK", "Vector Embeddings", "Vercel"],
      },
    ],
    faqs: [
      {
        question: "Do I need a strong math or machine learning background?",
        answer: "No. This course focuses on Applied AI and Software Engineering — using state-of-the-art foundation models through APIs and tools rather than training raw neural networks from scratch.",
      },
      {
        question: "Are API credits provided during the workshops?",
        answer: "We provide guided sandbox access, and most exercises take advantage of free-tier credits (like Google Gemini and OpenAI developer trials) with minimal cost.",
      },
    ],
  },
];
