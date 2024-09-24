## 1. Create React Project

```bash
npx create-react-app my-portfolio
cd my-portfolio
```

## 2. Install Tailwind CSS

Make sure your current directory is in your react project folder. If not, use `cd my-portfolio` to make sure you're in the right folder .

You can alway use `pwd` in the terminal to chack you're current directory.

> Install Tailwind

```bash
npm install -D tailwindcss
npx tailwindcss init
```

## 3. Configure Your Template Paths

> Copy and pasted this into your `tailwind.config.js` file

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 4. Add the Tailwind Directives to Your CSS

> Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Installing packages

## Install `react-router-dom` to help route between components

```bash
npm install react-router-dom
```
