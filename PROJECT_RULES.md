# 📋 QrHacker Project Rules

This document defines the development standards for the QrHacker project.

Following these rules helps keep the project clean, maintainable, and consistent.

---

# 1. Project Information

**Project Name**

QrHacker

**Tagline**

Scan. Generate. Verify.

**Current Version**

v1.0

---

# 2. Design Rules

## Color Palette

Background

- #0B0F19

Cards

- #121826

Primary Accent

- #00CFFF

Primary Text

- #FFFFFF

Secondary Text

- #B0B8C5

Logo Eyes

- Red

---

## Typography

Headings

- Poppins

Body Text

- Inter

---

## UI Style

The interface should always be:

- Modern
- Minimal
- Cyber-inspired
- Responsive
- Easy to use

Avoid cluttered layouts.

---

# 3. Page Rules

Every page must include:

- Navigation Bar
- Logo
- Responsive Hamburger Menu
- Footer
- Back to Top Button
- Scroll Animations

Current Pages

- Home
- Scan QR
- Generate QR
- About

---

# 4. HTML Rules

- Use semantic HTML5 elements.
- Keep indentation consistent.
- Comment major sections.
- Use meaningful IDs and class names.
- Avoid unnecessary nesting.

Example

```html
<section class="features">
```

NOT

```html
<div class="box1">
```

---

# 5. CSS Rules

Organize CSS using section comments.

Example

```css
/* ==========================================
   HERO
========================================== */
```

Keep:

- Consistent spacing
- Consistent colors
- Same border radius
- Same hover effects
- Same animation speed

Avoid duplicate styles.

---

# 6. JavaScript Rules

Use Vanilla JavaScript.

Organize scripts into sections.

Example

```javascript
// ==========================================
// Camera Scanner
// ==========================================
```

Variable names should be meaningful.

Good

```javascript
startCameraButton
```

Bad

```javascript
btn1
```

---

# 7. Folder Structure

```
QrHacker/

index.html
scan.html
generate.html
about.html

css/
style.css
scan.css
generate.css
about.css

js/
script.js
scanner.js
generator.js

assets/
logo/
icons/
images/

README.md
PROJECT_RULES.md
CHANGELOG.md
LICENSE
```

---

# 8. Responsive Design Rules

Every page must work correctly on:

- Desktop
- Laptop
- Tablet
- Mobile

No horizontal scrolling.

---

# 9. UI Consistency

Buttons should have:

- Same colors
- Same border radius
- Same hover animation
- Same glow effect

Cards should have:

- Same background
- Same border
- Same shadow
- Same spacing

---

# 10. Animation Rules

Use subtle animations only.

Allowed

- Fade In
- Slide Up
- Hover Glow
- Scale Effect

Avoid excessive animations.

---

# 11. Naming Convention

Files

Lowercase

Example

```
scan.html
generate.css
scanner.js
```

Classes

```css
.feature-card
.result-card
.hero-buttons
```

IDs

```html
start-camera
result-text
backToTop
```

---

# 12. Performance Rules

- Optimize images.
- Remove unused code.
- Keep JavaScript lightweight.
- Minimize duplicate CSS.

---

# 13. Accessibility

- Add alt text for images.
- Use descriptive button labels.
- Maintain readable font sizes.
- Ensure good color contrast.

---

# 14. Browser Support

Support modern versions of:

- Chrome
- Edge
- Firefox
- Safari

---

# 15. Git Rules

Write meaningful commit messages.

Good

```
Add camera QR scanner
```

Good

```
Improve responsive navigation
```

Avoid

```
Update
```

Avoid

```
Fix
```

---

# 16. Future Features

Possible future improvements:

- Wi-Fi QR
- Contact QR
- Email QR
- SMS QR
- Calendar QR
- QR History
- Batch QR Generation
- Custom QR Colors
- Dark / Light Theme
- User Accounts
- Cloud Storage
- PWA Support

---

# 17. Development Philosophy

QrHacker should always be:

- Fast
- Secure
- Responsive
- Beginner Friendly
- Professional
- Easy to Maintain

Every new feature should improve the user experience without making the interface more complicated.

---

# 🚀 Motto

**Scan. Generate. Verify.**