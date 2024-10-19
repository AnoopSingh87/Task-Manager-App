This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Task-Manager-App
# Task-Manager-App

Here's a clear and concise `README.md` file that includes setup instructions and a brief description of the task sorting approach:

---

# Task Manager App

A responsive Task Manager application built with **Next.js**, allowing users to add, edit, and manage tasks with priority sorting. 

## Features

- **Task Creation & Editing**: Add new tasks or edit existing ones.
- **Task Prioritization**: Sort tasks based on priority: High, Medium, and Low.
- **Task Completion**: Mark tasks as completed or incomplete.
- **Search Functionality**: Filter tasks by their title or description.
- **Responsive Design**: Optimized for both desktop and mobile views.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/task-manager-app.git
   cd task-manager-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to view and use the Task Manager app.

## Sorting Tasks by Priority

Tasks in the app are automatically sorted based on the following logic:

1. **Priority Levels**: 
   - **High Priority** tasks are displayed first, followed by **Medium** and then **Low Priority** tasks.
2. **Completion Status**: 
   - Uncompleted tasks are prioritized over completed ones. Completed tasks, regardless of their priority, are pushed to the bottom of the list.
3. **Search Filter**: 
   - When a user enters a search term, tasks are filtered by their title or description, allowing for easy management of tasks based on keywords.

This ensures that users see the most important tasks first and can easily manage their task list based on priority and completion.

## Deployment

To deploy the app, you can use services like [Vercel](https://vercel.com/), which offers seamless integration for Next.js applications.

---

This `README.md` provides setup instructions and explains how tasks are sorted by priority for better user experience.
