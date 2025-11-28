# Full Stack Vibe Coding From Scratch
## A One-Week Beginner's Guide

---

## Overview

### Who This Is For

You're 16 to 22 years old, curious about coding, but maybe a bit intimidated. You might have tried a little HTML or Scratch, or maybe you've never written a line of code. You're wondering if you're "smart enough" for computer science. 

**You are.** This guide is for you.

You have a regular laptop (or access to one), maybe not the fastest internet, and you want to understand what this whole "programming" thing is about—without drowning in technical jargon or feeling like you need a computer science degree to get started.

### What You'll Build

By the end of this week, you'll have built a **real web page or tiny web app** that solves a problem or tells a story from your own life. It might be:

- A one-page site explaining a problem in your community with ideas for solutions
- A simple journal or tracker for something you care about (study habits, running, mood, goals)
- A tiny directory or resource hub for people like you (students, neighbors, family)
- A storytelling site mixing text, images, and a small interactive element

Whatever you choose, it will be **yours**—built with your hands, your ideas, and your understanding of who it's for.

### What "Vibe Coding" Means

Vibe coding isn't about memorizing syntax or following rigid rules. It's a mindset:

- **Start from where you are, with what you have.** You don't need the latest MacBook or a computer science degree. You need curiosity and a problem you care about.

- **Start from a real problem or story from your life.** Before you write a single line of code, ask: Who is this for? What problem does it solve? Why does it matter?

- **Think deeply about the people who will use or read your product.** How do they behave? What's their context? What accessibility needs might they have? Code is a tool to help real humans.

- **Use AI tools as collaborators, not answer machines.** You can talk to tools like Cursor, ChatGPT, or Replit in natural language. Let them generate code, but always read it, test it, and ask "why is this written like this?"

- **Be playful and experimental.** You learn by trying, debugging, remixing, and reflecting. Constantly ask "why are we doing this?" not just "how."

- **Remember: tech is a tool, not the whole solution.** Real value comes from understanding people and problems. The best code in the world is useless if it doesn't help someone.

### How to Use AI Tools Responsibly During This Course

AI coding tools are powerful helpers, but they're not magic. Here's how to use them thoughtfully:

**DO:**
- Ask tools to explain concepts you don't understand
- Use them to generate starter code for ideas you've thought through
- Ask "why did you write it this way?" and "can you explain this part?"
- Test everything the tool suggests
- Break big problems into smaller prompts

**DON'T:**
- Copy-paste code without reading it
- Use tools to skip thinking about your problem
- Assume the tool's first answer is perfect
- Forget to test and debug

**When stuck, try:**
1. Write out your problem in plain language first
2. Ask the tool to explain your error message
3. Break your idea into much smaller steps
4. Ask the tool to explain one concept at a time

---

## Day 1: What Is Vibe Coding and What Is Software?

### Learning Goals

By the end of today, you will:
- Understand what programming and software are in simple terms
- See the different kinds of software: web, mobile, desktop, embedded
- Know the difference between front end, backend, and databases
- Pick a personal project idea and write a user story for it

### The Story: From Punch Cards to AI Assistants

Imagine you're in 1960. To write a program, you'd punch holes in cards, feed them into a massive computer, and wait hours for results. If you made one typo, you'd start over.

Now? You can talk to your computer in English, and it helps you write code. You can build a website in your browser without installing anything. The tools have changed, but the core idea is the same: **you're giving instructions to a computer to solve a problem.**

### Key Concepts

#### What Is an Algorithm?

An **algorithm** is just a step-by-step recipe. Like a recipe for making cookies:
1. Mix flour and sugar
2. Add eggs
3. Bake at 350°F

A computer algorithm is the same idea, but for solving problems:
1. Get the user's name
2. Check if they're logged in
3. Show them their dashboard

#### What Is a Program?

A **program** is an algorithm written in a language the computer understands. Just like you can write a recipe in English, Spanish, or French, you can write programs in JavaScript, Python, or many other languages.

#### How Coding Used to Be vs. How It Is Now

**Then (1960s-1990s):**
- Very low-level languages (close to what the computer actually speaks)
- No visual helpers—just text on a black screen
- You had to know exactly how memory worked
- One typo could break everything
- No internet to look things up

**Now (2020s):**
- High-level languages that read almost like English
- Visual editors, helpful error messages, AI assistants
- You can focus on solving problems, not memorizing syntax
- Tools help you find and fix mistakes
- The internet is your teacher

#### The Four Big Categories of Software

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
- You don't see it, but it's everywhere

#### Front End vs. Backend vs. Database

Think of a restaurant:

- **Front end** = The dining room. It's what customers see and interact with—the menu, the tables, the ambiance. In web terms, this is what you see in your browser: buttons, text, colors, layouts.

- **Backend** = The kitchen. It's where the work happens behind the scenes—cooking, managing orders, coordinating staff. In web terms, this is code running on a server that handles logic, processes requests, and sends data.

- **Database** = The pantry. It's where ingredients (data) are stored long-term. In web terms, this is where user accounts, posts, settings, and all the information your app needs are kept.

**Simple example:**
When you log into Instagram:
- **Front end**: The login form you see and type into
- **Backend**: The code that checks if your password is correct
- **Database**: Where your username and password are stored

### Activities

#### Activity 1: Match the Examples

Match each example to whether it's mostly front end, backend, or database work:

| Example | Front End | Backend | Database |
|---------|-----------|---------|----------|
| Instagram's photo feed you scroll through | ✓ | | |
| The code that checks if your password is correct | | ✓ | |
| Where your username and password are stored | | | ✓ |
| A library's online catalog search page | ✓ | | |
| The code that searches for books matching your query | | ✓ | |
| Where all the book titles and authors are kept | | | ✓ |
| An ATM's touchscreen | ✓ | | |
| The code that checks your account balance | | ✓ | |
| Where your account balance is stored | | | ✓ |

**Answer key:**
- Instagram feed: Front end (what you see)
- Password checking: Backend (logic on server)
- Username storage: Database (long-term storage)
- Library catalog page: Front end (what you see)
- Book search logic: Backend (processing on server)
- Book data storage: Database (long-term storage)
- ATM screen: Front end (what you interact with)
- Balance checking: Backend (logic on server)
- Balance storage: Database (long-term storage)

#### Activity 2: Reflection - Problems and Passions

Take 10 minutes and write down:

**3 problems from your daily life that annoy you:**
1. 
2. 
3. 

**3 topics you care deeply about:**
1. 
2. 
3. 

Don't worry about whether they're "coding problems" yet. Just be honest about what matters to you.

#### Activity 3: Write a User Story

Pick ONE problem or topic from your list above. Now write a user story. A user story is a simple sentence that describes who you're building for and what they need.

**Format:**
"As a [type of person], I want [something], so that [benefit]."

**Examples:**
- "As a busy student who struggles to track assignments, I want a simple one-page dashboard so I can see everything due this week at a glance."
- "As someone learning a new language, I want a place to save new words I discover so I can review them later."
- "As a person who wants to reduce food waste, I want a simple tracker to log what I throw away so I can see patterns and change my habits."

**Your user story:**
As a _________________________________, I want _________________________________, so that _________________________________.

#### Activity 4: Retrieval Mini Quiz

Answer these questions in your own words (no need to be perfect):

1. **What is front end?**
   - Your answer: _________________________________

2. **What is backend?**
   - Your answer: _________________________________

3. **What is a database?**
   - Your answer: _________________________________

**Simple answers:**
- Front end = What users see and interact with in the browser
- Backend = Logic and rules running on servers that send data
- Database = Long-term memory where information is stored

### Project Step: Choose Your Project

**Your mission:** Pick one idea to stick with for the whole week. This will be your "People Centered Web Thing."

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

**Save your user story somewhere—you'll refer back to it all week!**

---

## Day 2: First Taste of Web Coding - HTML, CSS, and Structure

### Learning Goals

By the end of today, you will:
- Understand how the web works at a basic level (request/response)
- Know what HTML, CSS, and JavaScript do
- Build a simple static page for your project
- Understand why accessibility and structure matter

### The Story: The Web Is a Conversation

Imagine you're at a restaurant. You (the browser) ask the waiter (the server) for a menu. The waiter brings you the menu (HTML—the content). The menu has nice formatting and colors (CSS—the styling). And if you want to order something special, you can ask and the waiter responds (JavaScript—the interactivity).

The web works the same way:
1. **You type a URL** → Your browser asks a server for a page
2. **The server responds** → It sends back HTML, CSS, and JavaScript files
3. **Your browser displays it** → You see a beautiful, interactive page

### Key Concepts

#### How the Web Works (Very Simply)

**Request/Response:**
- **Browser asks**: "Hey server, can I have the page at example.com?"
- **Server answers**: "Sure! Here's the HTML, CSS, and JavaScript files."
- **Browser displays**: You see the page

**The Three Languages:**
- **HTML** = The content and structure (headings, paragraphs, images, links)
- **CSS** = The styling (colors, fonts, spacing, layout)
- **JavaScript** = The brain (makes things interactive, responds to clicks, changes content)

#### HTML Basics

HTML uses **tags** to structure content. Think of tags like labels on boxes:

```html
<h1>This is a big heading</h1>
<p>This is a paragraph of text.</p>
<img src="photo.jpg" alt="A description of the image">
<a href="https://example.com">This is a link</a>
```

**Common HTML elements:**
- `<h1>`, `<h2>`, `<h3>` = Headings (big to small)
- `<p>` = Paragraph
- `<ul>`, `<ol>`, `<li>` = Lists (unordered, ordered, list items)
- `<a>` = Link (anchor)
- `<img>` = Image
- `<div>` = A container/box (for grouping things)

**Attributes:**
Tags can have **attributes** that give extra information:
- `src="photo.jpg"` tells the image where to find the file
- `alt="description"` tells screen readers what the image shows
- `href="https://example.com"` tells the link where to go

#### CSS Basics

CSS styles your HTML. You can write it in a separate file or inline.

**Selectors:**
- `.class-name` = Targets elements with that class
- `#id-name` = Targets an element with that ID
- `element-name` = Targets all elements of that type

**Common properties:**
```css
color: #333333;           /* Text color */
font-size: 18px;          /* Text size */
padding: 20px;            /* Space inside an element */
margin: 10px;             /* Space outside an element */
background-color: #f0f0f0; /* Background color */
```

#### Accessibility Basics

**Why it matters:** Not everyone uses the web the same way. Some people:
- Use screen readers (software that reads pages aloud)
- Can't see colors well
- Navigate with keyboards only
- Have slow internet

**Simple accessibility rules:**
1. **Use headings in order** (`h1`, then `h2`, then `h3`) to create a clear outline
2. **Add alt text to images** so screen readers can describe them
3. **Use high contrast colors** (dark text on light background, or vice versa)
4. **Make text readable** (at least 16px font size, clear fonts)

### Activities

#### Activity 1: Read and Predict

Look at this HTML snippet. What will the page look like? Draw it or describe it.

```html
<h1>Welcome to My Study Tracker</h1>
<p>This page helps me keep track of my study sessions.</p>
<h2>This Week's Sessions</h2>
<ul>
  <li>Monday: 2 hours</li>
  <li>Tuesday: 1.5 hours</li>
  <li>Wednesday: 3 hours</li>
</ul>
```

**What you should see:**
- A big heading "Welcome to My Study Tracker"
- A paragraph below it
- A smaller heading "This Week's Sessions"
- A bulleted list with three items

#### Activity 2: Fix the Structure

This HTML has headings out of order. Rewrite it with a proper outline (h1, then h2, then h3).

```html
<h3>Small heading</h3>
<h1>Big heading</h1>
<h2>Medium heading</h2>
<p>Some text here.</p>
<h3>Another small heading</h3>
```

**Fixed version:**
```html
<h1>Big heading</h1>
<h2>Medium heading</h2>
<p>Some text here.</p>
<h3>Small heading</h3>
<h3>Another small heading</h3>
```

#### Activity 3: Style It

Here's some HTML with no CSS. Add inline styles or a `<style>` tag to:
- Make the heading blue
- Make the paragraph text larger (20px)
- Add padding to the body (30px)

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>This is my first styled page.</p>
</body>
</html>
```

**Solution:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <style>
    body {
      padding: 30px;
    }
    h1 {
      color: blue;
    }
    p {
      font-size: 20px;
    }
  </style>
</head>
<body>
  <h1>Hello World</h1>
  <p>This is my first styled page.</p>
</body>
</html>
```

#### Activity 4: Reflection

Think about your project idea. Answer these questions:

1. **Who might struggle to use your site and why?**
   - Someone with slow internet? Someone using a screen reader? Someone who can't see colors well?

2. **How can headings help?**
   - Headings create an outline. Screen readers can jump between sections. People can scan quickly.

3. **Why does alt text matter?**
   - If someone can't see an image, alt text tells them what it shows. It's also helpful if the image doesn't load.

4. **Why does readable text matter?**
   - Small text is hard to read. Clear fonts and good size help everyone, especially people with vision challenges.

### Project Step: Build Your First Page

**Your mission:** Create a basic HTML page for your project idea.

**Checklist:**
- [ ] Create a new file called `index.html`
- [ ] Add the basic HTML structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- [ ] Add a title in the `<head>` section
- [ ] Add a main heading (`<h1>`) that states your project's purpose
- [ ] Add a short paragraph describing the problem you're solving
- [ ] Add at least one image with proper `alt` text (you can use a placeholder image from [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com))
- [ ] Add one list or table with useful information related to your project
- [ ] Create a simple CSS file (or use a `<style>` tag) to:
  - [ ] Set a base font (like `font-family: Arial, sans-serif;`)
  - [ ] Add padding to the body (like `padding: 20px;`)
  - [ ] Choose a high contrast color scheme (dark text on light background, or vice versa)

**Starter template:**

```html
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
```

**Tips:**
- You can use an online editor like [CodePen](https://codepen.io), [Replit](https://replit.com), or [CodeSandbox](https://codesandbox.io) if you don't want to set up files locally
- Test your page by opening the HTML file in your browser
- Make sure your headings are in order (h1, then h2, etc.)

---

## Day 3: Thinking Like a Programmer - JavaScript and Interactivity

### Learning Goals

By the end of today, you will:
- Understand computational thinking (breaking problems into steps)
- Know the basics of variables, conditionals, and functions
- Understand how JavaScript talks to HTML (the DOM)
- Add one interactive element to your project

### The Story: Giving Your Page a Brain

So far, your page is like a beautiful poster—it looks great, but it doesn't do anything. JavaScript is like giving your poster a brain. Now it can:
- Respond when someone clicks a button
- Remember information (like a user's name)
- Make decisions (like showing different content based on input)
- Change what's on the page without reloading

### Key Concepts

#### Computational Thinking

Computational thinking is a way of solving problems that computers are good at. It involves:

1. **Breaking problems into steps** (decomposition)
   - Instead of "build a website," think: "1) Create the HTML structure, 2) Add CSS styling, 3) Add JavaScript interactivity"

2. **Spotting patterns** (pattern recognition)
   - If you're doing the same thing multiple times, there's probably a pattern you can use

3. **Defining clear rules** (abstraction)
   - "If the user clicks the button, show a message" is a clear rule

#### JavaScript Basics

**Variables: Boxes That Hold Values**

Think of a variable like a labeled box. You put something in it, and you can check what's inside later.

```javascript
let userName = "Alex";
let age = 18;
let isLoggedIn = true;
```

- `let` = "I'm creating a new box"
- `userName` = the label on the box
- `"Alex"` = what's inside the box

**Types of values:**
- **Strings** (text): `"Hello"`, `'World'`
- **Numbers**: `42`, `3.14`
- **Booleans** (true/false): `true`, `false`

**Conditionals: "If This, Then That"**

Conditionals let your code make decisions:

```javascript
if (age >= 18) {
  console.log("You're an adult!");
} else {
  console.log("You're a minor.");
}
```

**Functions: Reusable Recipes**

A function is a recipe you can use over and over:

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

greet("Alex");  // Returns "Hello, Alex!"
greet("Sam");   // Returns "Hello, Sam!"
```

**The DOM: JavaScript Talking to HTML**

The DOM (Document Object Model) is how JavaScript sees and changes your HTML.

```javascript
// Get an element
let heading = document.querySelector('h1');

// Change its text
heading.textContent = "New heading text";

// Change its style
heading.style.color = "blue";
```

**Event Listeners: Responding to Actions**

An event listener waits for something to happen (like a click) and then does something:

```javascript
let button = document.querySelector('button');

button.addEventListener('click', function() {
  alert('Button was clicked!');
});
```

### Activities

#### Activity 1: Predict the Output

What will be logged to the console?

```javascript
let name = "Jordan";
let age = 20;
console.log(name + " is " + age + " years old.");
```

**Answer:** "Jordan is 20 years old."

#### Activity 2: Fix the Bug

This code has a bug. Can you find it?

```javascript
let userName = "Alex"
console.log("Hello, " + userName);
```

**The bug:** Missing semicolon (though JavaScript is forgiving, it's good practice). Also, if you meant to use a different variable name, that could be a bug.

**Fixed:**
```javascript
let userName = "Alex";
console.log("Hello, " + userName);
```

#### Activity 3: DOM Practice

Given this HTML:
```html
<button id="myButton">Click me</button>
<p id="message">Original message</p>
```

Write JavaScript that changes the paragraph text to "Button was clicked!" when the button is clicked.

**Solution:**
```javascript
let button = document.getElementById('myButton');
let message = document.getElementById('message');

button.addEventListener('click', function() {
  message.textContent = "Button was clicked!";
});
```

#### Activity 4: Reflection

Think about the interactive feature you want to add to your project. Answer:

1. **How did you decide what steps were needed?**
   - Did you break it down? What were the steps?

2. **What did you assume about your user?**
   - Do they have a mouse? Can they see colors? Do they understand what the button does?

3. **How can you make your interaction clearer?**
   - Clear button labels? Helpful messages? Visual feedback?

### Project Step: Add Interactivity

**Your mission:** Add one interactive feature to your site.

**Ideas:**
- A simple slider that changes a message (e.g., mood tracker: "How are you feeling today?" with a slider from 1-10)
- A form where a user enters their name and gets a personalized tip or quote
- A filter that hides or shows parts of the page (e.g., show only items from a certain category)
- A button that changes the theme (light/dark mode)
- A simple counter (e.g., "Days since I started this habit")

**Checklist:**
- [ ] I've chosen one interactive feature that makes sense for my project
- [ ] I've added the HTML element (button, input, slider, etc.)
- [ ] I've added a `<script>` tag or linked a JavaScript file
- [ ] I've written JavaScript that:
  - [ ] Gets the element using `document.querySelector()` or `getElementById()`
  - [ ] Adds an event listener (like `addEventListener('click', ...)`)
  - [ ] Changes something on the page when the event happens
- [ ] I've tested it and it works!

**Example: Simple Name Greeter**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Project</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    input, button {
      padding: 10px;
      font-size: 16px;
      margin: 10px 0;
    }
    #greeting {
      margin-top: 20px;
      font-size: 18px;
      color: #2c3e50;
    }
  </style>
</head>
<body>
  <h1>Welcome to My Project</h1>
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
</body>
</html>
```

**Using an AI Coding Tool:**

This is a great time to practice vibe coding with AI tools!

1. **Write your idea in plain language:**
   - "I want a button that, when clicked, shows a personalized message based on what the user types in an input field."

2. **Ask the tool to generate starter code:**
   - Paste your HTML structure
   - Ask: "Can you add JavaScript that does [your idea]?"

3. **Read the code:**
   - What does each line do?
   - Ask the tool: "Can you explain this part?" if something is unclear

4. **Test and modify:**
   - Try it out
   - Change the message, colors, or behavior
   - Ask the tool: "How can I make this more accessible?" or "Can you add error handling?"

**Remember:** Don't just copy-paste. Read, test, and understand!

---

## Day 4: Backend, Databases, and Cloud - The Big Picture

### Learning Goals

By the end of today, you will:
- Understand what backend, APIs, and databases are and why they exist
- See how data can be displayed and manipulated on the front end
- Understand cloud computing at a basic level
- See how data dashboards and storytelling matter for products

### The Story: When Your Front End Needs Help

So far, everything you've built runs entirely in the browser. That's great for simple pages, but what if:
- You want to save data that persists (like user accounts, posts, settings)
- You need to do heavy calculations
- You want to share data between many users
- You need to keep some information private

That's when you need a **backend**—code running on a server that handles the heavy lifting.

### Key Concepts

#### Backend: The Kitchen of Your App

**What it is:**
- Code running on a server (a computer somewhere on the internet)
- Handles logic, processes requests, sends responses
- Usually written in languages like JavaScript (Node.js), Python, PHP, Ruby

**Why it exists:**
- **Security**: Sensitive logic (like password checking) shouldn't run in the browser where anyone can see it
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
- **Rails** (Ruby)

#### APIs: How Front End and Backend Talk

**API** = Application Programming Interface. It's like a menu at a restaurant:
- The menu (API) tells you what you can order (what requests you can make)
- You order (make a request)
- The kitchen (backend) prepares it and brings it back (sends a response)

**REST APIs** are common. They use HTTP methods:
- `GET` = "Give me data" (like getting a list of posts)
- `POST` = "Create something new" (like creating a new post)
- `PUT` = "Update something" (like updating a post)
- `DELETE` = "Delete something" (like deleting a post)

**JSON** (JavaScript Object Notation) is the common format for API responses:
```json
{
  "name": "Alex",
  "age": 20,
  "posts": [
    {"title": "My first post", "date": "2024-01-15"},
    {"title": "Another post", "date": "2024-01-16"}
  ]
}
```

#### Databases: Long-Term Memory

**Why not just use files?**
- Files are slow when you have lots of data
- Hard to search and filter
- Hard to keep data consistent
- Can't handle multiple users well

**What databases do:**
- Store data in an organized way (tables, rows, columns)
- Let you search, filter, and sort quickly
- Keep data consistent and safe
- Handle many users at once

**Types:**
- **Relational** (SQL): Data in tables with relationships (like Excel spreadsheets that link together)
  - Examples: MySQL, PostgreSQL
- **Document** (NoSQL): Data stored as documents (like JSON files)
  - Examples: MongoDB, Firebase

**Simple analogy:**
- **Notebook** = Single file (hard to search, one person at a time)
- **Spreadsheet** = Relational database (organized, searchable, but structured)
- **File folder cabinet** = Document database (flexible, can store different types of things)

#### Cloud Computing: Renting Computers

**What it is:**
- Instead of buying and maintaining your own servers, you rent computing power from companies like AWS, Google Cloud, or Azure
- You pay for what you use
- They handle maintenance, security, and scaling

**Why it's helpful:**
- **Scaling**: If your app gets popular, you can easily get more servers
- **Reliability**: Cloud providers have backups and redundancy
- **Cost**: You don't need to buy expensive hardware upfront
- **Global**: Your app can be fast for users around the world

#### Data Dashboards and Storytelling

**What is a dashboard?**
- A visual display of data (charts, graphs, tables)
- Shows trends, patterns, and key metrics
- Helps people make decisions

**Why it matters:**
- **Product decisions**: "Which feature do users use most?"
- **Branding**: "Look at our impact—we've helped 10,000 students!"
- **Understanding**: "Our users are most active on Tuesdays"

**Storytelling with data:**
- A chart can show progress: "We've reduced food waste by 30%"
- A graph can show impact: "1,000 people used our resource hub this month"
- Data helps you tell a story about why your project matters

### Activities

#### Activity 1: Database Analogy

Match each storage method to when you'd use it:

| Storage Method | Best For |
|----------------|----------|
| A notebook | Simple, personal notes |
| A spreadsheet | Organized data with relationships |
| A file folder cabinet | Flexible, different types of documents |

**Answer:**
- Notebook = Simple, personal, one person
- Spreadsheet = Relational database (organized, searchable)
- File folder = Document database (flexible, varied content)

#### Activity 2: API Demo

Let's fetch data from a public API! Here's a simple example using the [JSONPlaceholder](https://jsonplaceholder.typicode.com) API (a fake API for testing):

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log('Title:', data.title);
    console.log('Body:', data.body);
  });
```

**What this does:**
1. `fetch()` makes a request to the API
2. `.then(response => response.json())` converts the response to JavaScript
3. `.then(data => ...)` does something with the data (logs it)

**Try it:** Open your browser's console (F12) and paste this code. You should see a post title and body logged.

#### Activity 3: Micro Coding - Fetch and Display

Create a simple page that fetches data from a public API and displays it. Here's a starter:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>API Demo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    #posts {
      margin-top: 20px;
    }
    .post {
      border: 1px solid #ddd;
      padding: 15px;
      margin: 10px 0;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <h1>API Demo</h1>
  <button id="loadButton">Load Posts</button>
  <div id="posts"></div>

  <script>
    let loadButton = document.getElementById('loadButton');
    let postsDiv = document.getElementById('posts');

    loadButton.addEventListener('click', function() {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
        .then(data => {
          postsDiv.innerHTML = '';
          data.forEach(post => {
            let postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            `;
            postsDiv.appendChild(postElement);
          });
        })
        .catch(error => {
          console.error('Error:', error);
          postsDiv.innerHTML = '<p>Something went wrong. Please try again.</p>';
        });
    });
  </script>
</body>
</html>
```

**What this does:**
- Fetches 5 posts from the API when you click the button
- Displays each post in a styled box
- Handles errors gracefully

#### Activity 4: Reflection

Think about your project. Answer:

1. **If your project grew and many people used it every day, what data would you need to store?**
   - User accounts? Posts? Settings? Usage statistics?

2. **Why would you need a backend for that?**
   - Security? Sharing between users? Persistence?

3. **What story could you tell with that data?**
   - "500 people used our resource hub this month"
   - "Users logged 1,000 study sessions"
   - "We helped reduce food waste by tracking patterns"

### Project Step: Add Data to Your Project

**Your mission:** Extend your front-end project by working with data.

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

**Checklist:**
- [ ] I've added data to my project (either mock data or from an API)
- [ ] I'm displaying the data in a clear way (table, list, cards)
- [ ] I've added at least one interaction (sort, filter, search)
- [ ] I've tested error handling (what happens if the API fails?)

**Example: Study Tracker with Mock Data**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Study Tracker</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .session {
      border: 1px solid #ddd;
      padding: 15px;
      margin: 10px 0;
      border-radius: 5px;
    }
    button {
      padding: 10px 20px;
      margin: 10px 5px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>My Study Sessions</h1>
  <button id="sortByDate">Sort by Date</button>
  <button id="sortByHours">Sort by Hours</button>
  <div id="sessions"></div>

  <script>
    // Mock data
    let sessions = [
      { date: "2024-01-15", subject: "Math", hours: 2 },
      { date: "2024-01-16", subject: "Science", hours: 1.5 },
      { date: "2024-01-17", subject: "History", hours: 3 },
      { date: "2024-01-18", subject: "Math", hours: 2.5 }
    ];

    let sessionsDiv = document.getElementById('sessions');
    let sortByDateBtn = document.getElementById('sortByDate');
    let sortByHoursBtn = document.getElementById('sortByHours');

    function displaySessions(data) {
      sessionsDiv.innerHTML = '';
      data.forEach(session => {
        let sessionElement = document.createElement('div');
        sessionElement.className = 'session';
        sessionElement.innerHTML = `
          <h3>${session.subject}</h3>
          <p>Date: ${session.date}</p>
          <p>Hours: ${session.hours}</p>
        `;
        sessionsDiv.appendChild(sessionElement);
      });
    }

    sortByDateBtn.addEventListener('click', function() {
      let sorted = [...sessions].sort((a, b) => a.date.localeCompare(b.date));
      displaySessions(sorted);
    });

    sortByHoursBtn.addEventListener('click', function() {
      let sorted = [...sessions].sort((a, b) => b.hours - a.hours);
      displaySessions(sorted);
    });

    // Initial display
    displaySessions(sessions);
  </script>
</body>
</html>
```

**Optional: Framework Taste (Advanced)**

If you're curious about frameworks like React or Vue, here's a tiny taste. **This is optional and just for curiosity!**

**React example (conceptual):**
```jsx
function StudySessions() {
  const [sessions, setSessions] = useState([
    { date: "2024-01-15", subject: "Math", hours: 2 },
    // ... more sessions
  ]);

  return (
    <div>
      {sessions.map(session => (
        <div key={session.date}>
          <h3>{session.subject}</h3>
          <p>{session.hours} hours</p>
        </div>
      ))}
    </div>
  );
}
```

**What frameworks do:**
- Help you build complex UIs more easily
- Keep your UI in sync with your data automatically
- Make it easier to reuse components

**For now:** Stick with plain JavaScript! You can explore frameworks later when you're ready.

---

## Day 5: Data Science, AI, and Vibe Coding with Tools

### Learning Goals

By the end of today, you will:
- Understand data science basics (collecting, analyzing, visualizing data)
- Know what an AI model is in simple terms
- See how AI coding tools can help you vibe code
- Finish and polish your project
- Think about branding and storytelling

### The Story: From Data to Decisions

Imagine you're tracking your study habits all week. You have data: dates, subjects, hours. But raw data is just numbers. **Data science** is turning those numbers into insights: "I study best on Tuesdays" or "I need to focus more on math."

Now imagine you want to build a feature that suggests the best study time based on your patterns. That's where **AI** comes in—it finds patterns in data and makes predictions.

And when you're coding, **AI tools** can be your pair programming partner, helping you write code, debug errors, and learn as you go.

### Key Concepts

#### Data Science Basics

**What it is:**
- Collecting data (from users, sensors, surveys, etc.)
- Cleaning data (removing errors, fixing formats)
- Analyzing data (finding patterns, trends, averages)
- Visualizing data (charts, graphs, dashboards)

**Simple statistics:**
- **Average (mean)**: Add all numbers, divide by count
- **Count**: How many items
- **Trend**: Is it going up, down, or staying the same?

**Visualization:**
- **Bar chart**: Compare categories (e.g., hours per subject)
- **Line chart**: Show trends over time (e.g., study hours per day)
- **Pie chart**: Show parts of a whole (e.g., percentage per subject)

**Why it matters:**
- **Product decisions**: "Which feature do users love?"
- **Branding**: "We've helped 10,000 students—here's the data!"
- **Understanding**: "Our users are most active on Tuesdays"

#### AI Basics

**What is an AI model?**
- A pattern finder trained on lots of examples
- Like a student who studied thousands of examples and learned the patterns
- Can make predictions or generate new content based on what it learned

**Types (simplified):**
- **Classic ML**: Finds patterns in structured data (like "users who buy X also buy Y")
- **Deep Learning**: Finds complex patterns in images, text, or sounds
- **Large Language Models (LLMs)**: Understands and generates human-like text (like ChatGPT)

**How AI is used:**
- **Recommendations**: Netflix suggests shows you might like
- **Search**: Google finds relevant results
- **Spam filters**: Email filters out junk
- **Image recognition**: Your phone recognizes faces in photos

**Important:** AI is a tool, not magic. It makes mistakes. Always verify and test!

#### Vibe Coding with AI Tools

**Tools you can use:**
- **Cursor**: AI-powered code editor
- **ChatGPT/Claude**: AI assistants that can help with code
- **Replit**: Online coding environment with AI help
- **CodeSandbox**: Browser-based coding with AI features
- **GitHub Copilot**: AI code completion

**How to use them effectively:**

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

**Best practices:**
- ✅ **DO**: Read and understand the code the tool generates
- ✅ **DO**: Test everything
- ✅ **DO**: Ask "why" questions
- ✅ **DO**: Break big problems into small prompts
- ❌ **DON'T**: Copy-paste blindly
- ❌ **DON'T**: Skip thinking about your problem
- ❌ **DON'T**: Assume the first answer is perfect

#### Branding and Storytelling

**What is branding?**
- The name, look, and feel of your project
- How people remember and recognize it
- The story you tell about why it matters

**Elements:**
- **Name**: Short, memorable, related to your purpose
- **Tagline**: One sentence that explains what you do
- **Color palette**: 2-3 colors that work well together
- **Typography**: Clear, readable fonts
- **Logo/icon**: Simple visual mark (can be text-based)

**Storytelling:**
- **Who is this for?** (Your user story)
- **What problem does it solve?** (The "why")
- **Why does it matter?** (The impact)

**Example:**
- **Name**: StudyVibe
- **Tagline**: "Track your study sessions, find your rhythm"
- **Story**: "As a busy student, I struggled to see where my time was going. StudyVibe helps me track my sessions and discover my best study times."

### Activities

#### Activity 1: Concept Check

Answer in your own words:

1. **What is an AI model?**
   - Your answer: _________________________________

2. **What is data visualization for?**
   - Your answer: _________________________________

**Simple answers:**
- AI model = A pattern finder trained on lots of examples that can make predictions
- Data visualization = Turning numbers into charts/graphs so people can understand patterns and make decisions

#### Activity 2: Applied Thinking

Think about your project. Answer:

**If your project collected data from users, what story would you want to tell with that data?**

Examples:
- "500 people used our resource hub this month"
- "Users logged 1,000 study sessions, and 80% saw improvement"
- "We tracked 200 mood entries, and most people feel best on Tuesdays"

**Your answer:**
_________________________________

#### Activity 3: Prompt Practice

Write three prompts you could use with an AI coding tool:

1. **To add a small feature:**
   - Your prompt: _________________________________

2. **To refactor messy code:**
   - Your prompt: _________________________________

3. **To improve accessibility or responsiveness:**
   - Your prompt: _________________________________

**Example prompts:**
1. "I have a study tracker. Can you add a feature that calculates the total hours studied this week and displays it at the top?"
2. "This code works but it's messy. Can you refactor it to be cleaner and add comments?"
3. "Can you review this HTML and suggest accessibility improvements? I want to make sure screen readers can use it."

#### Activity 4: Reflection

Take 10 minutes to reflect:

1. **How has your perception of coding changed this week?**
   - Your answer: _________________________________

2. **What parts felt fun or "vibey" and why?**
   - Your answer: _________________________________

3. **What would you build next if you had another week?**
   - Your answer: _________________________________

### Project Step: Final Polish and Shipping

**Your mission:** Finish and polish your project, then share it!

#### Final Polish Checklist

**Content:**
- [ ] The home page clearly states the purpose and audience
- [ ] All text is clear and free of typos
- [ ] Images have descriptive alt text
- [ ] Links work and are descriptive

**Structure:**
- [ ] Headings are in order (h1, then h2, then h3)
- [ ] The page has a logical flow
- [ ] Information is organized clearly

**Accessibility:**
- [ ] High contrast colors (dark text on light, or vice versa)
- [ ] Text is readable (at least 16px font size)
- [ ] Images have alt text
- [ ] Interactive elements are keyboard accessible
- [ ] Form inputs have labels

**Basic Responsiveness:**
- [ ] The page looks okay on mobile (test by resizing your browser)
- [ ] Text doesn't overflow on small screens
- [ ] Images scale properly

**Functionality:**
- [ ] All interactive features work
- [ ] No JavaScript errors in the console
- [ ] Error handling is in place (for API calls, etc.)

**Branding:**
- [ ] You have a name for your project
- [ ] You have a tagline (one sentence)
- [ ] You have a simple color palette (2-3 colors)
- [ ] The landing section tells the story: who it's for, what problem it solves, why it matters

#### Shipping Your Project

**Option 1: Static Hosting (Recommended)**

1. **GitHub Pages:**
   - Create a GitHub account
   - Create a new repository
   - Upload your files
   - Enable GitHub Pages in settings
   - Your site will be live at `yourusername.github.io/repository-name`

2. **Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Drag and drop your project folder
   - Get a live URL instantly

3. **Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up
   - Drag and drop your project folder
   - Get a live URL

**Option 2: Share a Sandbox Link**

If you used CodePen, Replit, or CodeSandbox, you can share the live preview link directly.

#### Demo Script

Write a short script (30-60 seconds) to show your project to a friend or mentor:

**Template:**
1. **Hook**: "I built [project name] to solve [problem]."
2. **Show**: "Here's what it does..." (demonstrate the main feature)
3. **Story**: "I built this because [personal reason]."
4. **Impact**: "If this grew, it could help [who] by [benefit]."

**Example:**
"Hi! I built StudyVibe, a simple tracker for my study sessions. Here's how it works: I log each session, and it shows me my weekly summary. I built this because I wanted to see where my time was going and find my best study times. If this grew, it could help other students track their habits and discover their own patterns. Want to see it in action?"

---

## Project Templates

### Minimal Starter Template

```html
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

    p {
      margin-bottom: 15px;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
      margin: 20px 0;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin: 10px 5px;
    }

    button:hover {
      background-color: #2980b9;
    }

    input {
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin: 10px 0;
    }

    .container {
      margin: 20px 0;
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
      <img src="your-image.jpg" alt="Description of the image">
    </section>

    <section>
      <h2>Features</h2>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </section>

    <!-- Add your interactive elements here -->
  </main>

  <script>
    // Your JavaScript goes here
  </script>
</body>
</html>
```

### Example Project Ideas

#### 1. Study Tracker
**Problem:** Students struggle to see where their study time goes.
**Audience:** High school and college students.
**Features:** Log study sessions, see weekly summary, filter by subject.

#### 2. Community Resource Hub
**Problem:** Hard to find local resources for students.
**Audience:** Students in your area.
**Features:** Directory of resources, search/filter, contact info.

#### 3. Mood Journal
**Problem:** Want to track mood patterns but existing apps are too complex.
**Audience:** People interested in mental health tracking.
**Features:** Simple daily mood log, weekly visual summary, reflection prompts.

#### 4. Local Problem Solver
**Problem:** Community issues aren't getting attention.
**Audience:** Community members and local leaders.
**Features:** Problem description, proposed solutions, visual data, call to action.

#### 5. Personal Story Site
**Problem:** Want to share a meaningful story with family/friends.
**Audience:** Family, friends, or a specific community.
**Features:** Storytelling with text and images, small interactive element (timeline, quiz, etc.).

### Final Polish Checklist

Use this checklist before shipping:

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
- [ ] Clear story: who it's for, what problem it solves

---

## How to Vibe Code (Tip Sheet)

### Start From Where You Are

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

### Use AI Tools as Collaborators

AI tools are powerful, but they're not magic. Use them thoughtfully:

**DO:**
- Ask tools to explain concepts you don't understand
- Use them to generate starter code for ideas you've thought through
- Ask "why did you write it this way?" and "can you explain this part?"
- Test everything the tool suggests
- Break big problems into smaller prompts

**DON'T:**
- Copy-paste code without reading it
- Use tools to skip thinking about your problem
- Assume the tool's first answer is perfect
- Forget to test and debug

### When Stuck, Try This

1. **Write out your problem in plain language first**
   - "I want a button that, when clicked, shows a personalized message."

2. **Ask the tool to explain your error**
   - Paste your error message: "I'm getting this error: [error]. What does it mean?"

3. **Break your idea into much smaller steps**
   - Instead of "build a study tracker," try "1) Create a form to log a session, 2) Store it in an array, 3) Display the array"

4. **Ask the tool to explain one concept at a time**
   - "What is a function?" → "How do I use a function?" → "How do I call a function with parameters?"

### Remember: Tech Is a Tool, Not the Whole Solution

Real value comes from:
- Understanding people and problems
- Thinking deeply about who you're building for
- Making things accessible and inclusive
- Telling a clear story about why it matters

The best code in the world is useless if it doesn't help someone. Start with people, then bring in tech as a tool.

---

## Conclusion

Congratulations! You've completed a week of vibe coding. You've:

- Learned what programming is and how it's changed
- Built a real web page that solves a problem or tells a story
- Tasted front end, backend, databases, data science, and AI
- Learned to use AI tools thoughtfully
- Thought deeply about who you're building for and why it matters

**What's next?**

- Keep building! Add features to your project
- Share it with friends and get feedback
- Explore frameworks (React, Vue) when you're ready
- Learn backend development (Node.js, Python)
- Build more projects that solve real problems

**Remember:** Coding is not the goal, people are. Code is a tool to help real humans. Keep vibe coding, keep learning, and keep building things that matter.

---

*This guide is designed to be used as curriculum and as a scaffold for interactive lessons. Feel free to adapt it, remix it, and make it your own.*

