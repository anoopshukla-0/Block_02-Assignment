# 🛠️ HTML Debugging Practice – Markdown Notes

---

## 1️⃣ Problem Statement

In the following HTML code snippet, there are multiple errors and structural issues.  
Your task is to **debug and correct the HTML code** to ensure it displays properly.

### 🔧 Code to Debug:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Debug Page
    <meta charset="UTF-8">
</head>
<body>
    <h1>Welcome to my Page</h2>
    <p>This is a paragraph that introduces the page.
    <img src="image.jpg" " alt="Sample Image">
    <form action="">
        <label for="username">Username:</label>
        <input type="text" name="username>
        <label for="password">Password:</label>
        <input type="password" name="password">
        <button type="submit">Login
    </form>
</body>
</html>

```
## ✍️ 2️⃣ Self-Learning Section – DUBX Method

Below are the key HTML concepts used in this debugging task, explained using the DUBX format (Definition, Use Case, Benefits, Extra Info):

---

### 🧩 `<title>` & `<meta charset="UTF-8">`

**D – Definition**  
`<title>` defines the name shown on the browser tab.  
`<meta charset="UTF-8">` sets the character encoding.

**U – Use Case**  
Placed inside `<head>` to identify the page and ensure correct text rendering.

**B – Benefits**  
- Shows tab name  
- Improves SEO  
- Handles special characters properly

**X – Extra Info**  
Always close `<title>`. Place `<meta>` before any visible content.

---

### 🧩 Heading Mismatch: `<h1>` and Wrong Closing Tag

**D – Definition**  
`<h1>` to `<h6>` define headings from most to least important.

**U – Use Case**  
Used to organize page sections hierarchically.

**B – Benefits**  
- Enhances readability  
- Helps screen readers  
- Boosts SEO

**X – Extra Info**  
Never mismatch tags. `<h1>` must be closed with `</h1>`, not `</h2>`.

---

### 🧩 Paragraph Tag `<p>`

**D – Definition**  
Defines a paragraph or text block.

**U – Use Case**  
Used for writing content inside sections.

**B – Benefits**  
- Improves text structure  
- Allows inline formatting  
- Easy to style with CSS

**X – Extra Info**  
Always close `<p>`. Leaving it open may break the layout.

---

### 🧩 Image Tag `<img>`

**D – Definition**  
Displays an image using `src` for file and `alt` for description.

**U – Use Case**  
Used to embed images like banners, icons, or photos.

**B – Benefits**  
- Adds visual meaning  
- Supports accessibility via `alt`  
- Loads static media quickly

**X – Extra Info**  
It’s self-closing. Correct usage:  
```html
<img src="file.jpg" alt="Description">
