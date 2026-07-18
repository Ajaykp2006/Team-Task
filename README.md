# 📝 Collaborative Team Task Board (Glassmorphism UI)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

A sleek, responsive, and interactive team task management board built with pure Vanilla JavaScript and Bootstrap 5. It features a modern **Glassmorphism** aesthetic over a continuously animating CSS gradient background.

## 📸 Preview

[Live Demo][https://todo-team-task.netlify.app](https://todo-team-task.netlify.app/)



## 🤖 Prompt Engineering & AI-Driven Development

This project was built using an **iterative Prompt Engineering methodology**. Instead of writing boilerplate code from scratch, this application was developed by strategically prompting Large Language Models (LLMs) to construct, refine, and optimize the codebase.

**The Iterative Prompting Process:**
1. **Core Logic:** Prompted for a foundational Vanilla JS DOM manipulation script to handle basic CRUD (Create, Read, Update, Delete) operations.
2. **UI Framework Integration:** Prompted to refactor the raw HTML/CSS into a responsive layout using Bootstrap 5 and Bootstrap Icons.
3. **Feature Expansion:** Engineered prompts to introduce multi-user assignment logic, timestamp generation, and dynamic empty-state handling.
4. **Advanced UI/UX:** Guided the AI to implement advanced CSS techniques, specifically an animated mesh-gradient background and a frosted-glass (Glassmorphism) container.
5. **Architecture Refinement:** Final prompts dictated the Separation of Concerns (SoC), safely extracting inline code into isolated `index.html`, `style.css`, and `script.js` files.

This approach demonstrates the ability to architect software requirements, manage AI context windows, and iteratively refine generated code into a polished, production-ready state.

## ✨ Features

* **Multi-User Assignment:** Assign tasks to specific team members with dynamic, color-coded avatars.
* **Dynamic Task Tracking:** Automatically calculates and displays the number of active tasks.
* **Interactive UI:** Smooth CSS transitions for adding, completing, and deleting tasks.
* **Smart Empty States:** Displays a friendly placeholder when the board is cleared to maintain visual structure.
* **Glassmorphism Aesthetic:** Utilizes `backdrop-filter: blur()` combined with semi-transparent backgrounds for a premium, modern feel.
* **Animated Background:** A lightweight, pure-CSS animated gradient background.

## 🛠️ File Structure

Following the Separation of Concerns principle, the project is cleanly divided:

```text
📁 team-task-board/
│
├── 📄 index.html    # Core structure and Bootstrap layout
├── 🎨 style.css     # Glassmorphism, animations, and custom styling
├── ⚙️ script.js     # DOM manipulation and application logic
└── 📖 README.md     # Project documentation
