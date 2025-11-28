export type LessonItem = {
  id: string;
  title: string;
  estimatedMinutes: number;
  tags: string[];
  type: "concept" | "exercise" | "vibeTip" | "reflection" | "aiPractice";
  summary: string;
  body: string; // markdown string
};

export type Section = {
  id: string;
  order: number;
  title: string;
  shortTitle: string;
  estimatedMinutes: number;
  summary: string;
  items: LessonItem[];
};

export const sections: Section[] = [
  {
    id: "vibe-coding-basics",
    order: 1,
    title: "Vibe Coding Basics",
    shortTitle: "Basics",
    estimatedMinutes: 60,
    summary: "Understand what programming is, how it's changed, and what vibe coding means. Learn about different types of software and pick your project idea.",
    items: [
      {
        id: "what-is-programming",
        title: "What Is Programming?",
        estimatedMinutes: 15,
        tags: ["basics", "concepts"],
        type: "concept",
        summary: "Programming is giving instructions to a computer to solve problems. Learn how it's evolved from punch cards to AI assistants.",
        body: `### The Story: From Punch Cards to AI Assistants

Imagine you're in 1960. To write a program, you'd punch holes in cards, feed them into a massive computer, and wait hours for results. If you made one typo, you'd start over.

Now? You can talk to your computer in English, and it helps you write code. You can build a website in your browser without installing anything. The tools have changed, but the core idea is the same: **you're giving instructions to a computer to solve a problem.**

### What Is an Algorithm?

An **algorithm** is just a step-by-step recipe. Like a recipe for making cookies:
1. Mix flour and sugar
2. Add eggs
3. Bake at 350°F

A computer algorithm is the same idea, but for solving problems:
1. Get the user's name
2. Check if they're logged in
3. Show them their dashboard

### What Is a Program?

A **program** is an algorithm written in a language the computer understands. Just like you can write a recipe in English, Spanish, or French, you can write programs in JavaScript, Python, or many other languages.`
      },
      {
        id: "types-of-software",
        title: "Types of Software",
        estimatedMinutes: 20,
        tags: ["basics", "concepts"],
        type: "concept",
        summary: "Learn about web, desktop, mobile, and embedded software with real-world examples.",
        body: `### The Four Big Categories

**1. Web Software** (websites and web apps)
- Examples: Instagram, Gmail, your school's website
- Runs in a browser
- Works on any device with internet

**2. Desktop Software** (apps installed on your computer)
- Examples: Microsoft Word, Photoshop, video games
- Installed directly on your laptop
- Usually faster, but you have to download and update them

**3. Mobile Software** (apps on your phone)
- Examples: TikTok, WhatsApp, your banking app
- Built specifically for phones and tablets
- Uses touch, camera, GPS, and other phone features

**4. Embedded Software** (code inside things)
- Examples: your car's computer, your washing machine, traffic lights
- Runs on tiny computers inside everyday objects
- You don't see it, but it's everywhere`
      },
      {
        id: "frontend-backend-database",
        title: "Front End, Backend, and Database",
        estimatedMinutes: 15,
        tags: ["basics", "concepts", "architecture"],
        type: "concept",
        summary: "Understand the three main parts of web applications using a restaurant analogy.",
        body: `Think of a restaurant:

- **Front end** = The dining room. It's what customers see and interact with—the menu, the tables, the ambiance. In web terms, this is what you see in your browser: buttons, text, colors, layouts.

- **Backend** = The kitchen. It's where the work happens behind the scenes—cooking, managing orders, coordinating staff. In web terms, this is code running on a server that handles logic, processes requests, and sends data.

- **Database** = The pantry. It's where ingredients (data) are stored long-term. In web terms, this is where user accounts, posts, settings, and all the information your app needs are kept.

**Simple example:**
When you log into Instagram:
- **Front end**: The login form you see and type into
- **Backend**: The code that checks if your password is correct
- **Database**: Where your username and password are stored`
      },
      {
        id: "what-is-vibe-coding",
        title: "What Is Vibe Coding?",
        estimatedMinutes: 10,
        tags: ["vibe-coding", "philosophy"],
        type: "vibeTip",
        summary: "Vibe coding is a mindset: start from people and problems, not from tech.",
        body: `Vibe coding isn't about memorizing syntax or following rigid rules. It's a mindset:

- **Start from where you are, with what you have.** You don't need the latest MacBook or a computer science degree. You need curiosity and a problem you care about.

- **Start from a real problem or story from your life.** Before you write a single line of code, ask: Who is this for? What problem does it solve? Why does it matter?

- **Think deeply about the people who will use or read your product.** How do they behave? What's their context? What accessibility needs might they have? Code is a tool to help real humans.

- **Use AI tools as collaborators, not answer machines.** You can talk to tools like Cursor, ChatGPT, or Replit in natural language. Let them generate code, but always read it, test it, and ask "why is this written like this?"

- **Be playful and experimental.** You learn by trying, debugging, remixing, and reflecting. Constantly ask "why are we doing this?" not just "how."

- **Remember: tech is a tool, not the whole solution.** Real value comes from understanding people and problems. The best code in the world is useless if it doesn't help someone.`
      },
      {
        id: "pick-your-project",
        title: "Pick Your Project",
        estimatedMinutes: 20,
        tags: ["project", "exercise"],
        type: "exercise",
        summary: "Choose a real problem from your life and write a user story for your week-long project.",
        body: `### Your Mission

Pick one idea to stick with for the whole week. This will be your "People Centered Web Thing."

**Checklist:**
- [ ] I've chosen one problem or topic from my reflection
- [ ] I've written a user story that clearly states:
  - [ ] Who this is for
  - [ ] What problem it solves
  - [ ] What success looks like for that person
- [ ] I can explain in one sentence why this matters to me

**Example project ideas if you're stuck:**
- **Study Tracker**: A simple page where you log study sessions and see a weekly summary
- **Community Resource Hub**: A one-page directory of helpful resources for students in your area
- **Mood Journal**: A place to log how you're feeling each day with a simple visual summary
- **Local Problem Solver**: A page explaining a problem in your community (like lack of bike lanes) with ideas for solutions
- **Personal Story Site**: A storytelling page about something meaningful in your life, with images and a small interactive element

**User Story Format:**
"As a [type of person], I want [something], so that [benefit]."

**Examples:**
- "As a busy student who struggles to track assignments, I want a simple one-page dashboard so I can see everything due this week at a glance."
- "As someone learning a new language, I want a place to save new words I discover so I can review them later."`
      },
      {
        id: "ai-practice-basics",
        title: "Vibe Coding with AI Tools",
        estimatedMinutes: 15,
        tags: ["ai", "tools", "practice"],
        type: "aiPractice",
        summary: "Practice using AI tools to help you understand concepts and plan your project.",
        body: `### Your AI Practice Exercise

Now that you understand what programming is and have picked your project idea, let's practice vibe coding with AI tools!

**Copy and paste this prompt into ChatGPT, Cursor, or your preferred AI coding assistant:**

\`\`\`
I'm learning to code and I have a project idea: [describe your project idea in 1-2 sentences].

I want to build a simple one-page website for this project. Can you help me:

1. Break down my project into 3-5 small steps?
2. Explain what HTML elements I might need (like headings, paragraphs, lists, images)?
3. Suggest a simple color scheme that's accessible and readable?
4. Give me a basic HTML structure to start with?

Please explain everything in simple terms, as I'm just starting out. Also, can you explain why you're suggesting each element?
\`\`\`

**After you get the response:**
- Read through the AI's suggestions
- Ask follow-up questions if anything is unclear
- Try asking: "Can you explain why you chose [specific element]?"
- Remember: The AI is a collaborator, not a replacement for thinking about your problem!

**Reflection:**
- What did the AI suggest that surprised you?
- What questions did you ask, and how did the AI respond?
- How did this help you think about your project differently?
`
      }
    ]
  },
  {
    id: "frontend-foundations",
    order: 2,
    title: "Frontend Foundations",
    shortTitle: "Frontend",
    estimatedMinutes: 90,
    summary: "Learn HTML, CSS, and how the web works. Build your first static page with proper structure and accessibility.",
    items: [
      {
        id: "how-web-works",
        title: "How the Web Works",
        estimatedMinutes: 15,
        tags: ["frontend", "basics", "concepts"],
        type: "concept",
        summary: "Understand the request/response cycle and the three languages of the web.",
        body: `### The Story: The Web Is a Conversation

Imagine you're at a restaurant. You (the browser) ask the waiter (the server) for a menu. The waiter brings you the menu (HTML—the content). The menu has nice formatting and colors (CSS—the styling). And if you want to order something special, you can ask and the waiter responds (JavaScript—the interactivity).

The web works the same way:
1. **You type a URL** → Your browser asks a server for a page
2. **The server responds** → It sends back HTML, CSS, and JavaScript files
3. **Your browser displays it** → You see a beautiful, interactive page

### Request/Response

- **Browser asks**: "Hey server, can I have the page at example.com?"
- **Server answers**: "Sure! Here's the HTML, CSS, and JavaScript files."
- **Browser displays**: You see the page

### The Three Languages

- **HTML** = The content and structure (headings, paragraphs, images, links)
- **CSS** = The styling (colors, fonts, spacing, layout)
- **JavaScript** = The brain (makes things interactive, responds to clicks, changes content)`
      },
      {
        id: "html-basics",
        title: "HTML Basics",
        estimatedMinutes: 25,
        tags: ["frontend", "html"],
        type: "concept",
        summary: "Learn about tags, elements, attributes, and common HTML elements.",
        body: `HTML uses **tags** to structure content. Think of tags like labels on boxes:

\`\`\`html
<h1>This is a big heading</h1>
<p>This is a paragraph of text.</p>
<img src="photo.jpg" alt="A description of the image">
<a href="https://example.com">This is a link</a>
\`\`\`

**Common HTML elements:**
- \`<h1>\`, \`<h2>\`, \`<h3>\` = Headings (big to small)
- \`<p>\` = Paragraph
- \`<ul>\`, \`<ol>\`, \`<li>\` = Lists (unordered, ordered, list items)
- \`<a>\` = Link (anchor)
- \`<img>\` = Image
- \`<div>\` = A container/box (for grouping things)

**Attributes:**
Tags can have **attributes** that give extra information:
- \`src="photo.jpg"\` tells the image where to find the file
- \`alt="description"\` tells screen readers what the image shows
- \`href="https://example.com"\` tells the link where to go`
      },
      {
        id: "css-basics",
        title: "CSS Basics",
        estimatedMinutes: 20,
        tags: ["frontend", "css"],
        type: "concept",
        summary: "Learn how to style your HTML with colors, fonts, spacing, and layout.",
        body: `CSS styles your HTML. You can write it in a separate file or inline.

**Selectors:**
- \`.class-name\` = Targets elements with that class
- \`#id-name\` = Targets an element with that ID
- \`element-name\` = Targets all elements of that type

**Common properties:**
\`\`\`css
color: #333333;           /* Text color */
font-size: 18px;          /* Text size */
padding: 20px;            /* Space inside an element */
margin: 10px;             /* Space outside an element */
background-color: #f0f0f0; /* Background color */
\`\`\``
      },
      {
        id: "accessibility-basics",
        title: "Accessibility Basics",
        estimatedMinutes: 15,
        tags: ["frontend", "accessibility"],
        type: "concept",
        summary: "Learn why accessibility matters and simple rules to make your site usable for everyone.",
        body: `### Why It Matters

Not everyone uses the web the same way. Some people:
- Use screen readers (software that reads pages aloud)
- Can't see colors well
- Navigate with keyboards only
- Have slow internet

### Simple Accessibility Rules

1. **Use headings in order** (\`h1\`, then \`h2\`, then \`h3\`) to create a clear outline
2. **Add alt text to images** so screen readers can describe them
3. **Use high contrast colors** (dark text on light background, or vice versa)
4. **Make text readable** (at least 16px font size, clear fonts)

### Reflection

Think about your project idea:
- Who might struggle to use your site and why?
- How can headings help?
- Why does alt text matter?
- Why does readable text matter?`
      },
      {
        id: "build-first-page",
        title: "Build Your First Page",
        estimatedMinutes: 30,
        tags: ["frontend", "project", "exercise"],
        type: "exercise",
        summary: "Create a basic HTML page for your project with proper structure and styling.",
        body: `### Your Mission

Create a basic HTML page for your project idea.

**Checklist:**
- [ ] Create a new file called \`index.html\`
- [ ] Add the basic HTML structure
- [ ] Add a title in the \`<head>\` section
- [ ] Add a main heading (\`<h1>\`) that states your project's purpose
- [ ] Add a short paragraph describing the problem you're solving
- [ ] Add at least one image with proper \`alt\` text
- [ ] Add one list or table with useful information
- [ ] Create a simple CSS file to:
  - [ ] Set a base font
  - [ ] Add padding to the body
  - [ ] Choose a high contrast color scheme

**Starter template:**

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Project Name</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.6;
      color: #333;
      background-color: #fff;
    }
    h1 {
      color: #2c3e50;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <h1>Your Project Title</h1>
  <p>Your description of the problem you're solving.</p>
  <img src="your-image.jpg" alt="Description of what the image shows">
  <h2>Useful Information</h2>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</body>
</html>
\`\`\``
      }
    ]
  },
  {
    id: "javascript-interactivity",
    order: 3,
    title: "JavaScript and Interactivity",
    shortTitle: "JavaScript",
    estimatedMinutes: 90,
    summary: "Learn computational thinking and JavaScript basics. Add interactivity to your project with variables, functions, and the DOM.",
    items: [
      {
        id: "computational-thinking",
        title: "Computational Thinking",
        estimatedMinutes: 15,
        tags: ["javascript", "concepts", "thinking"],
        type: "concept",
        summary: "Learn how to break problems into steps, spot patterns, and define clear rules.",
        body: `Computational thinking is a way of solving problems that computers are good at. It involves:

1. **Breaking problems into steps** (decomposition)
   - Instead of "build a website," think: "1) Create the HTML structure, 2) Add CSS styling, 3) Add JavaScript interactivity"

2. **Spotting patterns** (pattern recognition)
   - If you're doing the same thing multiple times, there's probably a pattern you can use

3. **Defining clear rules** (abstraction)
   - "If the user clicks the button, show a message" is a clear rule`
      },
      {
        id: "javascript-basics",
        title: "JavaScript Basics",
        estimatedMinutes: 30,
        tags: ["javascript", "basics"],
        type: "concept",
        summary: "Learn about variables, conditionals, functions, and the DOM.",
        body: `### Variables: Boxes That Hold Values

Think of a variable like a labeled box. You put something in it, and you can check what's inside later.

\`\`\`javascript
let userName = "Alex";
let age = 18;
let isLoggedIn = true;
\`\`\`

**Types of values:**
- **Strings** (text): \`"Hello"\`, \`'World'\`
- **Numbers**: \`42\`, \`3.14\`
- **Booleans** (true/false): \`true\`, \`false\`

### Conditionals: "If This, Then That"

\`\`\`javascript
if (age >= 18) {
  console.log("You're an adult!");
} else {
  console.log("You're a minor.");
}
\`\`\`

### Functions: Reusable Recipes

\`\`\`javascript
function greet(name) {
  return "Hello, " + name + "!";
}

greet("Alex");  // Returns "Hello, Alex!"
\`\`\`

### The DOM: JavaScript Talking to HTML

\`\`\`javascript
// Get an element
let heading = document.querySelector('h1');

// Change its text
heading.textContent = "New heading text";

// Change its style
heading.style.color = "blue";
\`\`\`

### Event Listeners: Responding to Actions

\`\`\`javascript
let button = document.querySelector('button');

button.addEventListener('click', function() {
  alert('Button was clicked!');
});
\`\`\``
      },
      {
        id: "add-interactivity",
        title: "Add Interactivity to Your Project",
        estimatedMinutes: 45,
        tags: ["javascript", "project", "exercise"],
        type: "exercise",
        summary: "Add one interactive feature to your site using JavaScript and the DOM.",
        body: `### Your Mission

Add one interactive feature to your site.

**Ideas:**
- A simple slider that changes a message (e.g., mood tracker)
- A form where a user enters their name and gets a personalized tip
- A filter that hides or shows parts of the page
- A button that changes the theme (light/dark mode)
- A simple counter

**Checklist:**
- [ ] I've chosen one interactive feature
- [ ] I've added the HTML element (button, input, slider, etc.)
- [ ] I've added a \`<script>\` tag or linked a JavaScript file
- [ ] I've written JavaScript that:
  - [ ] Gets the element using \`document.querySelector()\`
  - [ ] Adds an event listener
  - [ ] Changes something on the page when the event happens
- [ ] I've tested it and it works!

**Example: Simple Name Greeter**

\`\`\`html
<input type="text" id="nameInput" placeholder="Enter your name">
<button id="greetButton">Get Greeting</button>
<p id="greeting"></p>

<script>
  let nameInput = document.getElementById('nameInput');
  let greetButton = document.getElementById('greetButton');
  let greeting = document.getElementById('greeting');

  greetButton.addEventListener('click', function() {
    let name = nameInput.value;
    if (name.trim() === '') {
      greeting.textContent = "Please enter your name!";
    } else {
      greeting.textContent = "Hello, " + name + "! Welcome to my project.";
    }
  });
</script>
\`\`\`

### Using an AI Coding Tool

1. **Write your idea in plain language**
2. **Ask the tool to generate starter code**
3. **Read the code** - ask "Can you explain this part?" if unclear
4. **Test and modify** - try it out, change things, ask for improvements`
      },
      {
        id: "ai-practice-javascript",
        title: "Vibe Coding with AI: JavaScript Interactivity",
        estimatedMinutes: 15,
        tags: ["ai", "tools", "javascript", "practice"],
        type: "aiPractice",
        summary: "Use AI to help you add interactivity to your project.",
        body: `### Your AI Practice Exercise

Now that you understand JavaScript basics, let's use AI to help you add interactivity!

**Copy and paste this prompt into ChatGPT, Cursor, or your preferred AI coding assistant:**

\`\`\`
I'm building a [describe your project] and I want to add an interactive feature: [describe what you want - e.g., "a button that shows a personalized message when clicked" or "a form that calculates something"].

Here's my current HTML:
[paste your HTML here, or describe the structure]

Can you:
1. Write the JavaScript code to make this work?
2. Explain how the code works step by step?
3. Show me how to handle edge cases (like empty input, errors, etc.)?
4. Suggest how to make it more accessible (keyboard navigation, screen readers)?

Please explain each part so I can understand what's happening and learn from it.
\`\`\`

**After you get the response:**
- Copy the code and test it
- Try breaking it (enter invalid input, click rapidly, etc.) and ask: "What happens if [scenario]? How can I prevent errors?"
- Ask: "Can you explain why you used [specific method] instead of [alternative]?"
- Modify something and ask: "I changed [X] to [Y]. Is this better or worse? Why?"

**Reflection:**
- What did the AI explain that helped you understand JavaScript better?
- Did you encounter any errors? How did you debug them with AI's help?
- What would you build next using what you learned?
`
      }
    ]
  },
  {
    id: "backend-databases",
    order: 4,
    title: "Backend and Databases - Big Picture",
    shortTitle: "Backend",
    estimatedMinutes: 75,
    summary: "Understand backend, APIs, databases, and cloud computing conceptually. See how data can be displayed and manipulated on the front end.",
    items: [
      {
        id: "what-is-backend",
        title: "What Is Backend?",
        estimatedMinutes: 20,
        tags: ["backend", "concepts"],
        type: "concept",
        summary: "Learn why backend exists and how it works using the restaurant kitchen analogy.",
        body: `### The Story: When Your Front End Needs Help

So far, everything you've built runs entirely in the browser. That's great for simple pages, but what if:
- You want to save data that persists (like user accounts, posts, settings)
- You need to do heavy calculations
- You want to share data between many users
- You need to keep some information private

That's when you need a **backend**—code running on a server that handles the heavy lifting.

### Backend: The Kitchen of Your App

**What it is:**
- Code running on a server (a computer somewhere on the internet)
- Handles logic, processes requests, sends responses
- Usually written in languages like JavaScript (Node.js), Python, PHP, Ruby

**Why it exists:**
- **Security**: Sensitive logic (like password checking) shouldn't run in the browser
- **Performance**: Heavy calculations are better done on powerful servers
- **Persistence**: Servers can save data that lasts beyond a single page visit
- **Sharing**: Multiple users can access the same data

**How it works:**
1. Front end sends a **request** (like "get me all posts")
2. Backend processes the request (queries database, does calculations)
3. Backend sends a **response** (usually as JSON—a data format)
4. Front end displays the response

**Example frameworks:**
- **Express** (Node.js/JavaScript)
- **Django** (Python)
- **Laravel** (PHP)
- **Rails** (Ruby)`
      },
      {
        id: "apis",
        title: "APIs: How Front End and Backend Talk",
        estimatedMinutes: 15,
        tags: ["backend", "apis", "concepts"],
        type: "concept",
        summary: "Understand what APIs are and how they work using the restaurant menu analogy.",
        body: `**API** = Application Programming Interface. It's like a menu at a restaurant:
- The menu (API) tells you what you can order (what requests you can make)
- You order (make a request)
- The kitchen (backend) prepares it and brings it back (sends a response)

**REST APIs** are common. They use HTTP methods:
- \`GET\` = "Give me data" (like getting a list of posts)
- \`POST\` = "Create something new" (like creating a new post)
- \`PUT\` = "Update something" (like updating a post)
- \`DELETE\` = "Delete something" (like deleting a post)

**JSON** (JavaScript Object Notation) is the common format for API responses:
\`\`\`json
{
  "name": "Alex",
  "age": 20,
  "posts": [
    {"title": "My first post", "date": "2024-01-15"}
  ]
}
\`\`\``
      },
      {
        id: "databases",
        title: "Databases: Long-Term Memory",
        estimatedMinutes: 20,
        tags: ["backend", "databases", "concepts"],
        type: "concept",
        summary: "Learn why databases exist and the difference between relational and document databases.",
        body: `### Why Not Just Use Files?

- Files are slow when you have lots of data
- Hard to search and filter
- Hard to keep data consistent
- Can't handle multiple users well

### What Databases Do

- Store data in an organized way (tables, rows, columns)
- Let you search, filter, and sort quickly
- Keep data consistent and safe
- Handle many users at once

### Types

- **Relational** (SQL): Data in tables with relationships (like Excel spreadsheets that link together)
  - Examples: MySQL, PostgreSQL
- **Document** (NoSQL): Data stored as documents (like JSON files)
  - Examples: MongoDB, Firebase

### Simple Analogy

- **Notebook** = Single file (hard to search, one person at a time)
- **Spreadsheet** = Relational database (organized, searchable, but structured)
- **File folder cabinet** = Document database (flexible, can store different types of things)`
      },
      {
        id: "cloud-computing",
        title: "Cloud Computing",
        estimatedMinutes: 10,
        tags: ["backend", "cloud", "concepts"],
        type: "concept",
        summary: "Understand what cloud computing is and why it's helpful.",
        body: `### What It Is

Instead of buying and maintaining your own servers, you rent computing power from companies like AWS, Google Cloud, or Azure. You pay for what you use, and they handle maintenance, security, and scaling.

### Why It's Helpful

- **Scaling**: If your app gets popular, you can easily get more servers
- **Reliability**: Cloud providers have backups and redundancy
- **Cost**: You don't need to buy expensive hardware upfront
- **Global**: Your app can be fast for users around the world`
      },
      {
        id: "work-with-data",
        title: "Work With Data in Your Project",
        estimatedMinutes: 30,
        tags: ["backend", "frontend", "project", "exercise"],
        type: "exercise",
        summary: "Add data to your project using mock data or a public API.",
        body: `### Your Mission

Extend your front-end project by working with data.

**Option 1: Mock Data (Hard-coded)**
- Create some sample data in your JavaScript (like an array of objects)
- Display it in a table or list
- Add a simple "sort" or "filter" interaction

**Option 2: Public API**
- Use a simple public API related to your theme:
  - Weather API for a weather-related project
  - Quotes API for inspiration
  - News API for a news aggregator
- Fetch and display the data
- Add error handling

**Example: Fetch from API**

\`\`\`javascript
fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  .then(response => response.json())
  .then(data => {
    // Display the data
    data.forEach(post => {
      console.log(post.title);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
\`\`\``
      },
      {
        id: "ai-practice-backend",
        title: "Vibe Coding with AI: Working with Data",
        estimatedMinutes: 15,
        tags: ["ai", "tools", "backend", "data", "practice"],
        type: "aiPractice",
        summary: "Use AI to help you fetch and display data in your project.",
        body: `### Your AI Practice Exercise

Now that you understand APIs and data, let's use AI to help you work with data in your project!

**Copy and paste this prompt into ChatGPT, Cursor, or your preferred AI coding assistant:**

\`\`\`
I'm building a [describe your project] and I want to display data from [a public API or mock data you want to use].

Here's what I want to do:
- [Describe what data you want to show - e.g., "display a list of items with their names and descriptions"]
- [Describe any interactions - e.g., "allow users to sort by name" or "filter by category"]

Can you:
1. Show me how to fetch data from [API URL or create mock data]?
2. Write JavaScript to display the data in a readable way (table, list, cards)?
3. Add error handling in case the API fails or data is missing?
4. Explain how the fetch() function works and what .then() and .catch() do?

Please explain each step so I understand what's happening.
\`\`\`

**After you get the response:**
- Test the code with the API or mock data
- Ask: "What happens if the API is slow? How can I show a loading message?"
- Try breaking it: "What if the API returns an error? How should I handle that?"
- Ask: "Can you explain the difference between .then() and async/await?"

**Reflection:**
- How did using AI help you understand working with data?
- What did you learn about error handling?
- How would you use this in your project?
`
      }
    ]
  },
  {
    id: "data-dashboards",
    order: 5,
    title: "Data, Dashboards and Storytelling",
    shortTitle: "Data",
    estimatedMinutes: 60,
    summary: "Learn data science basics, how to visualize data, and how storytelling with data matters for products.",
    items: [
      {
        id: "data-science-basics",
        title: "Data Science Basics",
        estimatedMinutes: 20,
        tags: ["data", "concepts"],
        type: "concept",
        summary: "Learn about collecting, cleaning, analyzing, and visualizing data.",
        body: `### What It Is

- **Collecting data** (from users, sensors, surveys, etc.)
- **Cleaning data** (removing errors, fixing formats)
- **Analyzing data** (finding patterns, trends, averages)
- **Visualizing data** (charts, graphs, dashboards)

### Simple Statistics

- **Average (mean)**: Add all numbers, divide by count
- **Count**: How many items
- **Trend**: Is it going up, down, or staying the same?

### Visualization

- **Bar chart**: Compare categories (e.g., hours per subject)
- **Line chart**: Show trends over time (e.g., study hours per day)
- **Pie chart**: Show parts of a whole (e.g., percentage per subject)

### Why It Matters

- **Product decisions**: "Which feature do users love?"
- **Branding**: "We've helped 10,000 students—here's the data!"
- **Understanding**: "Our users are most active on Tuesdays"`
      },
      {
        id: "storytelling-with-data",
        title: "Storytelling With Data",
        estimatedMinutes: 15,
        tags: ["data", "storytelling"],
        type: "concept",
        summary: "Learn how to use data to tell compelling stories about your product's impact.",
        body: `### What Is a Dashboard?

A visual display of data (charts, graphs, tables) that shows trends, patterns, and key metrics. It helps people make decisions.

### Storytelling Examples

- A chart can show progress: "We've reduced food waste by 30%"
- A graph can show impact: "1,000 people used our resource hub this month"
- Data helps you tell a story about why your project matters

### Reflection

If your project collected data from users, what story would you want to tell with that data?

Examples:
- "500 people used our resource hub this month"
- "Users logged 1,000 study sessions, and 80% saw improvement"
- "We tracked 200 mood entries, and most people feel best on Tuesdays"`
      },
      {
        id: "visualize-your-data",
        title: "Visualize Data in Your Project",
        estimatedMinutes: 25,
        tags: ["data", "project", "exercise"],
        type: "exercise",
        summary: "Add a simple data visualization or summary to your project.",
        body: `### Your Mission

Add a simple data visualization or summary to your project.

**Ideas:**
- A simple bar chart showing categories (using CSS or a simple chart library)
- A summary card showing totals or averages
- A list that can be sorted or filtered
- A simple progress indicator

**Example: Simple Summary Card**

\`\`\`html
<div class="summary-card">
  <h3>This Week's Summary</h3>
  <p>Total sessions: <strong>12</strong></p>
  <p>Total hours: <strong>24</strong></p>
  <p>Average per day: <strong>3.4 hours</strong></p>
</div>
\`\`\`

**Tips:**
- Start simple with HTML/CSS
- Use clear labels and numbers
- Make it visually distinct from other content
- Consider accessibility (can screen readers understand it?)`
      },
      {
        id: "ai-practice-data",
        title: "Vibe Coding with AI: Data Visualization",
        estimatedMinutes: 15,
        tags: ["ai", "tools", "data", "practice"],
        type: "aiPractice",
        summary: "Use AI to help you create data visualizations and summaries.",
        body: `### Your AI Practice Exercise

Now that you understand data visualization, let's use AI to help you create visual summaries!

**Copy and paste this prompt into ChatGPT, Cursor, or your preferred AI coding assistant:**

\`\`\`
I'm building a [describe your project] and I want to show a data summary/visualization.

I have this data: [describe your data - e.g., "an array of study sessions with dates and hours" or "a list of items with categories"]

I want to:
- [Describe what you want to show - e.g., "calculate and display the total hours studied this week" or "show a count of items by category"]
- [Describe the format - e.g., "display it in a card" or "create a simple bar chart using CSS"]

Can you:
1. Write JavaScript to calculate the summary/statistics I need?
2. Create HTML/CSS to display it in a clear, readable way?
3. Explain how the calculations work?
4. Suggest how to make it accessible (proper labels, readable numbers, etc.)?

Please keep it simple and explain each step.
\`\`\`

**After you get the response:**
- Test the visualization with your data
- Ask: "How can I make this more visually clear?"
- Try different data and ask: "What if I have no data? How should I handle that?"
- Ask: "Can you explain why you chose this way to display the data?"

**Reflection:**
- How did the AI help you think about presenting data?
- What did you learn about making data readable and meaningful?
- How does this help tell the story of your project?
`
      }
    ]
  },
  {
    id: "ai-vibe-coding-tools",
    order: 6,
    title: "AI and Vibe Coding Tools",
    shortTitle: "AI Tools",
    estimatedMinutes: 80,
    summary: "Learn what AI is, how to write great prompts, and how to use AI coding tools thoughtfully as collaborators.",
    items: [
      {
        id: "what-is-ai",
        title: "What Is AI?",
        estimatedMinutes: 20,
        tags: ["ai", "concepts"],
        type: "concept",
        summary: "Understand what AI models are and how they work in simple terms.",
        body: `### What Is an AI Model?

A pattern finder trained on lots of examples. Like a student who studied thousands of examples and learned the patterns. It can make predictions or generate new content based on what it learned.

### Types (Simplified)

- **Classic ML**: Finds patterns in structured data (like "users who buy X also buy Y")
- **Deep Learning**: Finds complex patterns in images, text, or sounds
- **Large Language Models (LLMs)**: Understands and generates human-like text (like ChatGPT)

### How AI Is Used

- **Recommendations**: Netflix suggests shows you might like
- **Search**: Google finds relevant results
- **Spam filters**: Email filters out junk
- **Image recognition**: Your phone recognizes faces in photos

### Important

AI is a tool, not magic. It makes mistakes. Always verify and test!`
      },
      {
        id: "prompt-engineering",
        title: "Prompt Engineering: The Art of Talking to AI",
        estimatedMinutes: 20,
        tags: ["ai", "prompting", "vibe-coding"],
        type: "vibeTip",
        summary: "Learn why prompt quality matters and how to write prompts that get you better results. Think before you type!",
        body: `### Why Prompt Engineering Matters

Here's a secret: **The quality of your prompt is directly proportional to the quality of your output.** 

Think of it like ordering at a restaurant:
- 🍔 **Bad prompt**: "I want food"
- 🍕 **Okay prompt**: "I want pizza"
- 🍝 **Great prompt**: "I'd like a margherita pizza with extra basil, thin crust, and can you make sure it's not too greasy? Also, I'm allergic to mushrooms."

The more context and clarity you give, the better the result!

### The Golden Rule: Think Before You Type

Before you even open ChatGPT or Cursor, take a moment to:

1. **Reflect on your problem**
   - What are you actually trying to solve?
   - Who is this for?
   - What does success look like?

2. **Think about design**
   - What kind of design do you want? (Simple? Modern? Playful?)
   - What colors, spacing, or style are you going for?
   - Do you have examples of what you like?

3. **Provide full context**
   - What's your current code doing?
   - What have you tried already?
   - What's not working?

### The Prompt Quality Spectrum

**❌ Terrible Prompt:**
\`\`\`
make a button
\`\`\`

**😐 Mediocre Prompt:**
\`\`\`
I need a button that changes color when clicked
\`\`\`

**✨ Great Prompt:**
\`\`\`
I'm building a study tracker for students. I need a button that:
- Changes from blue to green when clicked (to show "study session started")
- Has a smooth transition animation
- Is accessible (keyboard navigable, screen reader friendly)
- Matches my color scheme: #3b82f6 for blue, #10b981 for green
- Has clear text: "Start Study Session"

Here's my current HTML structure:
[your HTML here]

Can you write the JavaScript and explain how it works?
\`\`\`

### The Magic Formula

A great prompt usually includes:

1. **Context**: What are you building? Who is it for?
2. **Specifics**: Exactly what do you want? (colors, behavior, style)
3. **Constraints**: What are your limitations? (accessibility, browser support, etc.)
4. **Current state**: What code do you already have?
5. **Questions**: What do you want to understand?

### Common Mistakes (And How to Avoid Them)

**Mistake #1: Being Too Vague**
- ❌ "Make it look better"
- ✅ "Make the text larger (18px), add more spacing between paragraphs (1.5rem), and use a softer color (#6b7280 instead of black)"

**Mistake #2: Forgetting Context**
- ❌ "Add a form"
- ✅ "I'm building a mood tracker. Add a form where users can select their mood (happy, sad, anxious, calm) and add a note. The form should be accessible and work on mobile."

**Mistake #3: Not Asking for Explanations**
- ❌ Just copying the code
- ✅ "Can you explain why you used \`addEventListener\` instead of inline \`onclick\`? What are the benefits?"

### Pro Tips

- **Start broad, then get specific**: First ask "How do I build a todo list?", then refine with "How do I make it accessible?"
- **Iterate**: Your first prompt might not be perfect. That's okay! Refine it based on what you get.
- **Ask "why"**: Don't just accept code. Ask why the AI chose a particular approach.
- **Break it down**: Instead of "build me a whole app", try "first, help me structure the HTML. Then we'll add CSS. Then JavaScript."

### Remember

**Garbage in, garbage out.** 

If you give AI a vague, context-free prompt, you'll get vague, context-free code. But if you take the time to think deeply about your problem, your design goals, and provide full context? You'll get code that actually solves your problem.

Plus, the process of writing a good prompt forces you to think clearly about what you're building—which is half the battle! 🎯`
      },
      {
        id: "ai-coding-tools",
        title: "AI Coding Tools",
        estimatedMinutes: 25,
        tags: ["ai", "tools", "vibe-coding"],
        type: "vibeTip",
        summary: "Learn how to use AI coding tools effectively as collaborators, not answer machines.",
        body: `### Tools You Can Use

- **Cursor**: AI-powered code editor
- **ChatGPT/Claude**: AI assistants that can help with code
- **Replit**: Online coding environment with AI help
- **CodeSandbox**: Browser-based coding with AI features
- **GitHub Copilot**: AI code completion

### How to Use Them Effectively

1. **Explain concepts:**
   - "What is a function in JavaScript?"
   - "How does the DOM work?"

2. **Generate starter code:**
   - "I want a button that changes the background color when clicked. Can you write the JavaScript?"
   - Paste your HTML and ask: "Can you add CSS to make this look modern?"

3. **Debug errors:**
   - Paste your error message: "I'm getting this error: [paste error]. What does it mean?"
   - Paste your code: "This isn't working. Can you help me find the bug?"

4. **Suggest improvements:**
   - "How can I make this code more accessible?"
   - "Can you refactor this to be cleaner?"

### Best Practices

- ✅ **DO**: Read and understand the code the tool generates
- ✅ **DO**: Test everything
- ✅ **DO**: Ask "why" questions
- ✅ **DO**: Break big problems into small prompts
- ❌ **DON'T**: Copy-paste blindly
- ❌ **DON'T**: Skip thinking about your problem
- ❌ **DON'T**: Assume the first answer is perfect`
      },
      {
        id: "practice-with-ai",
        title: "Practice With AI Tools",
        estimatedMinutes: 20,
        tags: ["ai", "tools", "exercise", "prompting"],
        type: "exercise",
        summary: "Practice writing high-quality prompts for AI coding tools. Remember: think deeply about your problem first!",
        body: `### Your Mission: Prompt Engineering Practice

Before you write any code, work on your prompts first! Take time to reflect and think deeply about your problem.

**Step 1: Reflect on Your Problem**
For each prompt below, first answer:
- Who is this for?
- What problem does it solve?
- What does success look like?
- What design/style do you want?

**Step 2: Write Three High-Quality Prompts**

1. **To add a small feature:**
   - Context: _________________________________
   - Design goals: _________________________________
   - Your full prompt: _________________________________
   _________________________________

2. **To refactor messy code:**
   - What's messy about it? _________________________________
   - What do you want to improve? _________________________________
   - Your full prompt: _________________________________
   _________________________________

3. **To improve accessibility or responsiveness:**
   - Who might struggle to use this? _________________________________
   - What devices/situations should it work in? _________________________________
   - Your full prompt: _________________________________
   _________________________________

**Example of a Great Prompt:**

\`\`\`
I'm building a study tracker for college students who struggle with time management.

**Context:**
- My current HTML has a basic form to log study sessions
- I want to add a feature that shows total hours studied this week
- The design should be clean and minimal, using my color scheme: #3b82f6 (blue) for primary, #10b981 (green) for success states

**What I want:**
- A card at the top of the page showing "Total hours this week: X"
- It should update automatically when a new session is logged
- It should be accessible (proper heading, readable text, good contrast)
- Mobile-friendly layout

**My current code:**
[paste your HTML/JS here]

Can you:
1. Write the JavaScript to calculate and display the total?
2. Explain how the calculation works?
3. Suggest how to make it more visually appealing?
4. Ensure it's accessible?

Thanks!
\`\`\`

**Why This Prompt Works:**
- ✅ Provides full context (who, what, why)
- ✅ Specifies design preferences
- ✅ Shows current code
- ✅ Asks for explanations
- ✅ Includes accessibility considerations

### Reflection

- How did thinking about the problem first change your prompts?
- What did you learn about the relationship between prompt quality and output quality?
- How has your perception of coding changed this week?
- What parts felt fun or "vibey" and why?
- What would you build next if you had another week?`
      }
    ]
  },
  {
    id: "projects-ideas",
    order: 7,
    title: "Projects and Ideas Library",
    shortTitle: "Projects",
    estimatedMinutes: 30,
    summary: "Explore example project ideas, templates, and inspiration for your own projects.",
    items: [
      {
        id: "project-ideas",
        title: "Example Project Ideas",
        estimatedMinutes: 15,
        tags: ["projects", "ideas"],
        type: "concept",
        summary: "Browse example project ideas with user stories and features.",
        body: `### 1. Study Tracker
**Problem:** Students struggle to see where their study time goes.
**Audience:** High school and college students.
**Features:** Log study sessions, see weekly summary, filter by subject.

### 2. Community Resource Hub
**Problem:** Hard to find local resources for students.
**Audience:** Students in your area.
**Features:** Directory of resources, search/filter, contact info.

### 3. Mood Journal
**Problem:** Want to track mood patterns but existing apps are too complex.
**Audience:** People interested in mental health tracking.
**Features:** Simple daily mood log, weekly visual summary, reflection prompts.

### 4. Local Problem Solver
**Problem:** Community issues aren't getting attention.
**Audience:** Community members and local leaders.
**Features:** Problem description, proposed solutions, visual data, call to action.

### 5. Personal Story Site
**Problem:** Want to share a meaningful story with family/friends.
**Audience:** Family, friends, or a specific community.
**Features:** Storytelling with text and images, small interactive element (timeline, quiz, etc.).`
      },
      {
        id: "project-template",
        title: "Project Starter Template",
        estimatedMinutes: 10,
        tags: ["projects", "template"],
        type: "exercise",
        summary: "Use this minimal starter template to begin your project.",
        body: `### Minimal Starter Template

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Project Name</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #fff;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 10px;
    }

    h2 {
      color: #34495e;
      margin-top: 30px;
      margin-bottom: 15px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <header>
    <h1>Your Project Title</h1>
    <p>Your tagline or brief description</p>
  </header>

  <main>
    <section>
      <h2>About This Project</h2>
      <p>Describe the problem you're solving and who this is for.</p>
    </section>

    <!-- Add your interactive elements here -->
  </main>

  <script>
    // Your JavaScript goes here
  </script>
</body>
</html>
\`\`\``
      },
      {
        id: "final-polish",
        title: "Final Polish Checklist",
        estimatedMinutes: 15,
        tags: ["projects", "checklist"],
        type: "exercise",
        summary: "Use this checklist to polish your project before sharing it.",
        body: `### Final Polish Checklist

**Content & Structure:**
- [ ] Clear purpose stated on the homepage
- [ ] Headings in logical order (h1 → h2 → h3)
- [ ] All text is clear and typo-free
- [ ] Information is well-organized

**Accessibility:**
- [ ] High contrast colors (WCAG AA minimum)
- [ ] Text is at least 16px
- [ ] All images have descriptive alt text
- [ ] Form inputs have labels
- [ ] Interactive elements are keyboard accessible

**Functionality:**
- [ ] All links work
- [ ] All interactive features work
- [ ] No JavaScript errors in console
- [ ] Error handling for API calls

**Responsiveness:**
- [ ] Looks good on desktop (test at 1920px, 1280px)
- [ ] Looks good on tablet (test at 768px)
- [ ] Looks good on mobile (test at 375px)
- [ ] Text doesn't overflow
- [ ] Images scale properly

**Branding:**
- [ ] Project has a name
- [ ] Project has a tagline
- [ ] Consistent color palette (2-3 colors)
- [ ] Clear story: who it's for, what problem it solves`
      }
    ]
  },
  {
    id: "tips-glossary",
    order: 8,
    title: "Tips, Glossary and Resources",
    shortTitle: "Resources",
    estimatedMinutes: 45,
    summary: "Vibe coding tips, glossary of terms, and helpful resources for continuing your learning journey.",
    items: [
      {
        id: "vibe-coding-tips",
        title: "How to Vibe Code",
        estimatedMinutes: 20,
        tags: ["vibe-coding", "tips"],
        type: "vibeTip",
        summary: "Essential tips for the vibe coding mindset and approach.",
        body: `### Start From Where You Are

You don't need:
- The latest MacBook
- A computer science degree
- Years of experience
- Perfect internet

You do need:
- Curiosity
- A problem you care about
- Willingness to try and learn

### Start From a Real Problem or Story

Before you write code, ask:
- **Who is this for?** (Be specific: "busy students," "my family," "people learning Spanish")
- **What problem does it solve?** (Be clear: "tracks study time," "finds local resources," "shares a story")
- **Why does it matter?** (Connect to real impact: "helps students see patterns," "connects people to help")

### Think Deeply About the People

Ask:
- How do they behave? (Do they use phones? Desktops? Both?)
- What's their context? (Rushed? Relaxed? Distracted?)
- What accessibility needs might they have? (Vision? Motor? Cognitive?)
- What assumptions am I making? (Do they have fast internet? Do they understand tech jargon?)

**Remember:** Code is a tool to help real humans. The best code in the world is useless if it doesn't help someone.

### When Stuck, Try This

1. **Write out your problem in plain language first**
2. **Ask the tool to explain your error**
3. **Break your idea into much smaller steps**
4. **Ask the tool to explain one concept at a time**

### Remember: Tech Is a Tool, Not the Whole Solution

Real value comes from:
- Understanding people and problems
- Thinking deeply about who you're building for
- Making things accessible and inclusive
- Telling a clear story about why it matters`
      },
      {
        id: "glossary",
        title: "Glossary",
        estimatedMinutes: 15,
        tags: ["glossary", "reference"],
        type: "concept",
        summary: "Quick reference for key terms used throughout the course.",
        body: `### Key Terms

**Algorithm**: A step-by-step recipe for solving a problem.

**API (Application Programming Interface)**: A way for different programs to talk to each other. Like a menu at a restaurant.

**Backend**: Code running on a server that handles logic, processes requests, and sends data.

**Database**: Long-term storage for data, organized so it can be searched and filtered quickly.

**DOM (Document Object Model)**: How JavaScript sees and changes your HTML.

**Front end**: What users see and interact with in the browser (HTML, CSS, JavaScript).

**Function**: A reusable recipe in code that does a specific task.

**HTML (HyperText Markup Language)**: The language used to structure content on the web.

**CSS (Cascading Style Sheets)**: The language used to style HTML.

**JavaScript**: The programming language that makes web pages interactive.

**Variable**: A labeled box that holds a value (like a name, number, or true/false).

**Vibe Coding**: A mindset that starts from people and problems, not from tech.`
      },
      {
        id: "resources",
        title: "Helpful Resources",
        estimatedMinutes: 10,
        tags: ["resources", "learning"],
        type: "concept",
        summary: "Links and resources for continuing your learning journey.",
        body: `### Online Editors

- **CodePen**: [codepen.io](https://codepen.io) - Great for experimenting with HTML, CSS, and JavaScript
- **Replit**: [replit.com](https://replit.com) - Full coding environment in the browser
- **CodeSandbox**: [codesandbox.io](https://codesandbox.io) - React and other framework playgrounds

### Learning Resources

- **MDN Web Docs**: [developer.mozilla.org](https://developer.mozilla.org) - The best reference for HTML, CSS, and JavaScript
- **freeCodeCamp**: [freecodecamp.org](https://freecodecamp.org) - Free coding courses
- **Web.dev**: [web.dev](https://web.dev) - Google's web development guides

### AI Coding Tools

- **Cursor**: [cursor.sh](https://cursor.sh) - AI-powered code editor
- **GitHub Copilot**: [github.com/features/copilot](https://github.com/features/copilot) - AI code completion
- **ChatGPT**: [chat.openai.com](https://chat.openai.com) - AI assistant for coding help

### Accessibility

- **WebAIM**: [webaim.org](https://webaim.org) - Web accessibility resources
- **A11y Project**: [a11yproject.com](https://a11yproject.com) - Community-driven accessibility guide

### Deployment

- **GitHub Pages**: [pages.github.com](https://pages.github.com) - Free hosting for static sites
- **Vercel**: [vercel.com](https://vercel.com) - Easy deployment for web projects
- **Netlify**: [netlify.com](https://netlify.com) - Another great option for static sites`
      }
    ]
  },
  {
    id: "mobile-embedded-beyond",
    order: 9,
    title: "Mobile, Embedded, and Beyond",
    shortTitle: "Beyond Web",
    estimatedMinutes: 90,
    summary: "Explore mobile app development, embedded systems, IoT, and other exciting directions beyond web development. Learn how vibe coding principles apply everywhere.",
    items: [
      {
        id: "mobile-app-development",
        title: "Mobile App Development",
        estimatedMinutes: 25,
        tags: ["mobile", "apps", "react-native", "flutter"],
        type: "concept",
        summary: "Learn how to build mobile apps using web technologies and native frameworks.",
        body: `### Why Mobile Matters

Most people interact with technology through their phones. Mobile apps are everywhere—from ordering food to tracking fitness to connecting with friends.

### Two Main Approaches

**1. Web-Based Mobile Apps (Progressive Web Apps - PWAs)**
- Build once, works everywhere
- Uses HTML, CSS, and JavaScript you already know
- Can be "installed" on phones
- Works offline
- Great for: Content apps, tools, simple games

**2. Native Mobile Apps**
- Built specifically for iOS (iPhone) or Android
- Can access phone features (camera, GPS, notifications)
- Better performance for complex apps
- Requires learning new tools

### Popular Frameworks

**React Native** (JavaScript/React)
- Write once, runs on both iOS and Android
- Uses React concepts you might already know
- Great community and resources

**Flutter** (Dart language)
- Google's framework
- Beautiful, fast apps
- Growing in popularity

**Swift** (iOS only)
- Apple's native language
- Best for iPhone-only apps
- Requires Mac computer

**Kotlin** (Android only)
- Modern Android development
- Official Android language

### Getting Started with Mobile

1. **Start with a PWA** - Build a web app that works great on mobile
2. **Test on real devices** - Use your phone's browser
3. **Learn responsive design** - Make it work on small screens
4. **Consider native later** - If you need phone-specific features

### Vibe Coding Approach

Ask yourself:
- Who uses mobile? (Everyone, but context matters—on the go, distracted, one-handed)
- What problem does a mobile app solve better than a website?
- Can I start with a mobile-friendly website first?

**Remember:** Many successful "apps" started as mobile-optimized websites. Start simple, then expand.`
      },
      {
        id: "embedded-systems-iot",
        title: "Embedded Systems and IoT",
        estimatedMinutes: 20,
        tags: ["embedded", "iot", "arduino", "raspberry-pi"],
        type: "concept",
        summary: "Introduction to programming physical devices and Internet of Things projects.",
        body: `### What Are Embedded Systems?

Embedded systems are computers built into other devices—your microwave, car, thermostat, or smart watch. They're everywhere!

### Internet of Things (IoT)

IoT connects everyday objects to the internet:
- Smart lights you control from your phone
- Fitness trackers that sync data
- Home security cameras
- Smart thermostats

### Getting Started Tools

**Arduino**
- Simple microcontroller boards
- Great for beginners
- Large community
- Uses C/C++ (but simpler)
- Perfect for: Sensors, lights, motors, simple automation

**Raspberry Pi**
- Full computer the size of a credit card
- Runs Linux
- Can use Python, JavaScript, or many languages
- Perfect for: More complex projects, web servers, media centers

**ESP32/ESP8266**
- WiFi-enabled microcontrollers
- Can connect to internet
- Great for IoT projects
- Affordable

### Example Projects

1. **Smart Plant Watering** - Sensor detects dry soil, waters automatically
2. **Home Temperature Monitor** - Tracks temperature, sends alerts
3. **Motion-Activated Lights** - Lights turn on when you enter a room
4. **Weather Station** - Collects weather data, displays online

### Vibe Coding Approach

Start with a real problem:
- "My plants keep dying" → Smart watering system
- "I forget to turn off lights" → Motion sensors
- "I want to monitor my home" → Security sensors

**Remember:** Hardware projects are physical. You'll need to:
- Read documentation
- Test and debug (hardware can be tricky!)
- Be patient with wiring and connections
- Start simple, then add features`
      },
      {
        id: "other-programming-areas",
        title: "Other Programming Areas",
        estimatedMinutes: 20,
        tags: ["careers", "paths", "exploration"],
        type: "concept",
        summary: "Explore other exciting areas of programming: game development, data science, AI/ML, and more.",
        body: `### Game Development

**Why it's fun:**
- Creative storytelling
- Visual and interactive
- Immediate feedback
- Can be simple or complex

**Tools to explore:**
- **Unity** (C#) - Most popular, great for 3D
- **Godot** (GDScript/Python-like) - Free, open source
- **Phaser** (JavaScript) - Web-based games
- **Scratch** - Visual programming, great for beginners

**Vibe coding approach:** Start with a simple game idea. What story do you want to tell? What problem does your game solve? (Entertainment, education, connection?)

### Data Science

**What it is:**
- Analyzing data to find patterns
- Making predictions
- Visualizing information
- Helping people make decisions

**Tools:**
- **Python** - Most popular language for data science
- **Jupyter Notebooks** - Interactive coding environment
- **Pandas** - Data manipulation
- **Matplotlib** - Creating charts and graphs

**Vibe coding approach:** Start with a question you care about. What data tells a story? Who needs to understand this information?

### Artificial Intelligence / Machine Learning

**What it is:**
- Teaching computers to learn from data
- Recognizing patterns
- Making predictions
- Understanding language or images

**Getting started:**
- **Python** - Most common language
- **TensorFlow / PyTorch** - Machine learning frameworks
- **Hugging Face** - Pre-trained models you can use
- **ChatGPT API** - Add AI to your projects

**Vibe coding approach:** Don't start by building AI from scratch. Start by using AI tools to solve problems. What can AI help you build? Who benefits?

### Automation and Scripting

**What it is:**
- Writing small programs to automate tasks
- Making your computer work for you
- Saving time on repetitive work

**Examples:**
- Renaming hundreds of files
- Organizing photos by date
- Sending automated emails
- Backing up files

**Tools:**
- **Python** - Great for automation
- **Bash/Shell scripts** - For Mac/Linux
- **PowerShell** - For Windows
- **JavaScript** - Can automate browser tasks

**Vibe coding approach:** What repetitive task annoys you? Can you write a script to do it automatically?

### Desktop Applications

**What it is:**
- Programs that run on your computer (not in a browser)
- Like Photoshop, Spotify, or VS Code

**Tools:**
- **Electron** (JavaScript) - Build desktop apps with web tech
- **Python + Tkinter** - Simple GUI apps
- **Swift** (Mac) - Native Mac apps
- **C# / .NET** (Windows) - Native Windows apps

### Which Path Should You Choose?

**The vibe coding answer:** Choose based on:
1. **What problem do you want to solve?** (This determines the tool)
2. **What do you already know?** (Build on that)
3. **What excites you?** (You'll learn faster if you're curious)

**Remember:** The fundamentals are the same everywhere:
- Breaking problems into steps
- Thinking about users
- Testing and debugging
- Starting simple, then expanding

You don't need to choose one path forever. Many programmers work across multiple areas!`
      },
      {
        id: "choosing-your-path",
        title: "Choosing Your Path Forward",
        estimatedMinutes: 15,
        tags: ["careers", "learning", "path"],
        type: "reflection",
        summary: "Reflect on what you've learned and how to continue your programming journey.",
        body: `### What You've Accomplished

You've learned:
- How to think like a programmer
- How to build web projects
- How to use AI tools effectively
- How to solve real problems with code
- The vibe coding mindset

### What's Next?

**Option 1: Go Deeper**
- Master one area (web, mobile, data, etc.)
- Build more complex projects
- Learn advanced concepts
- Contribute to open source

**Option 2: Go Wider**
- Try different areas (mobile, embedded, games)
- Build projects in multiple domains
- Become a generalist
- Find what excites you most

**Option 3: Build Your Thing**
- Start a project you care about
- Solve a real problem
- Share it with others
- Iterate based on feedback

### The Vibe Coding Way Forward

**Remember these principles:**
1. **Start from where you are** - You don't need to know everything
2. **Start from real problems** - Build things that matter
3. **Think about people** - Who are you helping?
4. **Use tools thoughtfully** - AI, frameworks, libraries are helpers
5. **Be playful** - Experiment, break things, learn
6. **Keep asking why** - Not just how, but why

### Building a Portfolio

As you build projects:
- Document what you learned
- Write about problems you solved
- Share your code (GitHub)
- Tell the story: who it's for, what problem it solves

### Finding Community

- Join online communities (Discord, Reddit, forums)
- Attend local meetups
- Find coding buddies
- Share your work
- Help others learn

### The Journey Never Ends

Programming is a journey, not a destination. There's always more to learn, new problems to solve, new tools to explore.

**The most important thing:** Keep building things that matter to you. That's vibe coding.`
      },
      {
        id: "mobile-embedded-exercise",
        title: "Exercise: Plan Your Next Project",
        estimatedMinutes: 10,
        tags: ["exercise", "planning", "mobile", "embedded"],
        type: "exercise",
        summary: "Plan a project in an area you haven't explored yet—mobile, embedded, or something else.",
        body: `### Your Mission

Plan a project in a new area (mobile, embedded, game dev, data science, etc.).

### Step 1: Choose Your Area

Pick something that interests you:
- [ ] Mobile app (PWA or native)
- [ ] Embedded/IoT project
- [ ] Game
- [ ] Data visualization
- [ ] Automation script
- [ ] Something else?

### Step 2: Define the Problem

Answer these questions:
- **Who is this for?** (Be specific)
- **What problem does it solve?** (Be clear)
- **Why does it matter?** (Real impact)

### Step 3: Research Tools

- What tools/languages are commonly used?
- What's the learning curve?
- Are there good tutorials or resources?
- Can you start simple?

### Step 4: Break It Down

List the smallest possible first version:
- What's the MVP (Minimum Viable Product)?
- What's the first feature?
- What can you build in one day?

### Step 5: Start Building

- Set up your development environment
- Build the smallest possible version
- Test it
- Share it with someone
- Get feedback
- Iterate

### Reflection

After you start:
- What surprised you?
- What was easier than expected?
- What was harder?
- What would you do differently?
- What's the next small step?

**Remember:** The goal isn't to build something perfect. The goal is to start, learn, and iterate. That's vibe coding!`
      }
    ]
  }
];

// Calculate total estimated time
export const totalEstimatedMinutes = sections.reduce(
  (total, section) => total + section.estimatedMinutes,
  0
);

// Extend LessonItem for search
export type SearchableLessonItem = LessonItem & {
  sectionId: string;
  sectionTitle: string;
};

// Helper to get all lesson items for search
export const allLessonItems: SearchableLessonItem[] = sections.flatMap(section =>
  section.items.map(item => ({
    ...item,
    sectionId: section.id,
    sectionTitle: section.title,
  }))
);

