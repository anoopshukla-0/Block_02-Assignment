# 📘 HTML Elements Practice – Structured Notes

---

## 1️⃣ Problem Statement

Create an HTML page with the following elements:

- A main heading using `<h1>` that serves as the **title** of your page.
- Three subheadings using `<h2>`, `<h3>`, and `<h4>` that divide your page into **sections**.
- In each section, add a **paragraph** describing the topic.
- Include a **hyperlink** in one of the paragraphs that directs users to an **external website** of your choice.

---

## 2️⃣ Self Learning (DUBX Method for Technical Terms)

---

### 🏷️ `<h1>` to `<h6>`

**D – Definition:**  
Heading tags in HTML define the structure and priority of content, from main (`<h1>`) to minor headings (`<h6>`).

**U – Use Case:**  
Use `<h1>` for the page title, `<h2>` for section titles, `<h3>`/`<h4>` for sub-sections.

**B – Benefits:**  
Improves readability, accessibility, and SEO by defining logical structure.

**X – Extra Info:**  
Do not skip heading levels unless absolutely necessary. `<h1>` should ideally be used only once per page.

---

### 🏷️ `<p>` – Paragraph Tag

**D – Definition:**  
Represents a block of text in HTML.

**U – Use Case:**  
Used to describe content, add descriptions or body text under headings.

**B – Benefits:**  
Makes content readable, organized, and user-friendly.

**X – Extra Info:**  
Inline elements like `<a>`, `<strong>`, and `<em>` can be placed inside `<p>` for extra functionality.

---

### 🏷️ `<a>` – Anchor Tag (Hyperlink)

**D – Definition:**  
Creates a hyperlink which connects users to another URL or section.

**U – Use Case:**  
Used in paragraphs or headings to direct users to internal or external content.

**B – Benefits:**  
Improves navigation and user interaction.

**X – Extra Info:**  
Use `target="_blank"` to open external links in a new tab. Add `rel="noopener noreferrer"` for security.

---

## 3️⃣ Highlighted Terms & Their Meanings

---

### 🔍 What is a “Hyperlink”?

A **hyperlink** is clickable text or media (often underlined in blue) that navigates the user to another page, site, or section. It is created using the `<a>` tag.

```html
<a href="https://example.com" target="_blank">Visit Example</a>