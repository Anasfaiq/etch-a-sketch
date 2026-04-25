# 🎨 Etch-a-Sketch Web Application

## 📌 Overview

This project is a web-based implementation of an **Etch-a-Sketch** drawing application. It allows users to create pixel-style drawings on a customizable grid using mouse or touch input. The application is designed to be simple, responsive, and interactive, making it suitable as a beginner-to-intermediate frontend project.

---

## ✨ Features

* **Dynamic Grid Generation**
  Users can define grid size (from 1 to 100 per side).

* **Interactive Drawing**
  Supports click-and-drag drawing using a mouse and touch gestures on mobile devices.

* **Color Palette**
  Multiple predefined colors are available for drawing.

* **Clear Canvas**
  Reset all drawn cells without regenerating the grid.

* **Responsive Layout**
  Optimized for both desktop and mobile screens.

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and layout (Flexbox & responsive design)
* **JavaScript (Vanilla)** – Core logic and interactivity
* **Tailwind CSS (CDN)** – Utility-based styling

---

## 📂 Project Structure

```plaintext
etch-a-sketch/
│── index.html     # Main HTML structure
│── style.css      # Styles and layout
│── main.js        # Application logic
```

---

## 🚀 Getting Started

To run this project locally:

1. Clone or download this repository
2. Open the `index.html` file in your browser
3. Start drawing

No additional setup or dependencies are required.

---

## ⚙️ Application Logic

### 1. Grid Generation

The grid is dynamically generated using JavaScript based on user input.

* Total cells: `size × size`
* Each cell is created as a `<div>` element
* Flexbox is used to arrange cells
* `aspect-ratio` ensures each cell remains square

---

### 2. Drawing Mechanism

The application tracks user interaction using event listeners:

* **Desktop**

  * `mousedown` → Start drawing
  * `mousemove` → Apply color while dragging
  * `mouseup` → Stop drawing

* **Mobile**

  * `touchstart` → Start drawing
  * `touchmove` → Continue drawing across cells

A boolean state (`holding`) determines whether drawing is active.

---

### 3. Color Selection

Users can select a color from the palette.
The selected color is stored in a variable and applied to grid cells during interaction.

---

### 4. Clear Functionality

The "Clear" button resets all grid cells by removing their inline styles, without rebuilding the grid structure.

---

## 📱 Responsiveness

The layout adapts based on screen size:

* **Desktop** → Sidebar and grid displayed side-by-side
* **Mobile** → Layout stacked vertically

Media queries are used to ensure optimal usability across devices.

---

## ⚠️ Limitations

* Maximum grid size is limited to **100 × 100** to prevent performance issues
* No undo/redo functionality
* No image export or save feature
* No dedicated eraser tool

---

## 💡 Future Improvements

Potential enhancements for this project include:

* Adding an **eraser tool**
* Implementing **undo/redo functionality**
* Allowing users to **export drawings as images**
* Replacing prompt input with a **slider UI**
* Adding **random color mode**
* Improving UI/UX with animations and visual feedback

---

## 🧠 Learning Outcomes

This project demonstrates fundamental frontend development concepts, including:

* DOM manipulation
* Event handling (mouse and touch)
* Dynamic UI rendering
* Responsive design principles

---

## 📄 License

This project is intended for educational purposes and is free to use or modify.

---
