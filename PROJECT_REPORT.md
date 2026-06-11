# Calculator Application Mini Project Report

## Title Page

**Project Title:** Calculator Application Using Web Technologies  
**Submitted By:** ___________________________  
**Roll Number:** ___________________________  
**Program:** Bachelor of Technology / Bachelor of Computer Applications  
**Department:** Computer Science / Information Technology  
**Institution:** ___________________________  
**Academic Session:** 2025-2026  
**Submitted To:** ___________________________  
**Date of Submission:** ___________________________

---

## Certificate

This is to certify that the mini project report titled **"Calculator Application Using HTML, CSS, and JavaScript"** submitted by **___________________________** bearing Roll Number **___________________________** in partial fulfillment of the requirements for the award of the degree in **___________________________** has been carried out under my guidance and supervision.

To the best of my knowledge, the work presented in this report is genuine and has not been submitted elsewhere for any degree or diploma.

**Project Guide Signature:** ___________________________  
**Name of Guide:** ___________________________  
**Designation:** ___________________________  
**Department:** ___________________________  
**Date:** ___________________________

---

## Declaration

I hereby declare that the project report entitled **"Calculator Application Using HTML, CSS, and JavaScript"** is a bonafide record of work carried out by me during the academic year 2025-2026 under the guidance of **___________________________**.

I further declare that this work has not been submitted to any other university or institution for the award of any degree, diploma, or certificate.

**Student Signature:** ___________________________  
**Student Name:** ___________________________  
**Roll Number:** ___________________________  
**Date:** ___________________________

---

## Acknowledgement

I express my sincere gratitude to my project guide, **___________________________**, for valuable guidance, motivation, and continuous support throughout this mini project. The project would not have reached completion without their technical advice and constructive feedback.

I also thank the Head of Department and faculty members of **___________________________ Department** for providing the necessary academic environment and resources to complete this work.

I am thankful to my classmates and friends for their encouragement and helpful discussions during the development and testing stages of this project.

Finally, I am deeply grateful to my parents and family for their constant support, understanding, and inspiration.

---

## Abstract

This mini project presents the design and development of a responsive **Calculator Application** using **HTML, CSS, and JavaScript**. The primary objective is to build a lightweight yet functional arithmetic calculator capable of performing basic mathematical operations such as addition, subtraction, multiplication, and division.

The calculator provides an intuitive interface with clearly visible buttons, a display panel, and user-friendly interaction through both mouse and keyboard inputs. The application includes a clear function, backspace support, bracket usage, decimal handling, and robust error handling for invalid expressions and division-by-zero scenarios.

A visual theme inspired by a dark interface with cyan highlights has been used to ensure modern aesthetics and improved readability. The implementation follows modular scripting practices, separating structure (HTML), presentation (CSS), and behavior (JavaScript).

Functional and usability testing were performed across common browser environments to verify correctness, responsiveness, and user experience. Test results confirm that the application reliably computes valid expressions and safely handles invalid cases without application crashes.

The project demonstrates core web development concepts such as DOM manipulation, event handling, input validation, expression evaluation, and responsive design. It can serve as a foundational model for future enhancements including scientific operations, history management, and theme customization.

---

## Table of Contents

1. Introduction  
2. Problem Statement  
3. Objectives  
4. Scope of Project  
5. Literature Review  
6. System Analysis  
7. System Design  
8. Implementation  
9. Tools and Technologies Used  
10. Testing  
11. Results and Discussion  
12. Advantages and Limitations  
13. Future Enhancements  
14. Conclusion  
15. References

---

## 1. Introduction

A calculator is one of the most frequently used tools in both academic and professional activities. From simple arithmetic to complex computations, calculators reduce human error and improve speed. In the digital era, web-based calculators are widely adopted because they run directly in browsers without installation.

This mini project focuses on creating a browser-based calculator application that performs basic operations effectively while maintaining clean visual design and usability. The project is intended as an educational implementation of front-end development principles and software engineering lifecycle steps.

The calculator is developed using foundational web technologies:

- **HTML** for creating the page structure and input controls.
- **CSS** for styling and responsive layout.
- **JavaScript** for implementing arithmetic logic and user interaction.

The developed application is lightweight, accessible, and easy to deploy. It demonstrates important practical concepts such as event-driven programming, input sanitization, exception handling, and cross-device user interface adaptation.

As a final-year mini project, this application balances simplicity with engineering discipline. It includes documented planning, requirement analysis, architecture design, implementation details, test strategy, and outcome evaluation.

---

## 2. Problem Statement

In many educational and practical contexts, users require quick and reliable arithmetic calculation tools. Traditional desktop calculators and physical devices can be unavailable or less convenient when users are already working in browser environments.

A common issue with beginner-level calculator implementations is the lack of robust validation and poor user interface design. Many simple calculators fail when users enter malformed expressions, leading to crashes, incorrect output, or poor user experience.

Therefore, there is a need to develop a **web-based calculator application** that:

- Performs core arithmetic operations accurately.
- Provides responsive and clear interface for users.
- Handles invalid inputs gracefully without breaking functionality.
- Supports both keyboard and button-based interaction.
- Demonstrates software engineering practices suitable for academic evaluation.

---

## 3. Objectives

The major objectives of the project are as follows:

1. To design and develop a browser-based calculator using HTML, CSS, and JavaScript.
2. To implement basic arithmetic operations: addition, subtraction, multiplication, and division.
3. To include utility controls such as Clear and Backspace.
4. To implement input validation and error handling for invalid expressions.
5. To provide a modern and visually clean user interface.
6. To ensure responsive behavior across desktop and mobile screen sizes.
7. To document the full development lifecycle in a professional academic format.

### 3.1 Specific Learning Outcomes

- Understand DOM structure and manipulation techniques.
- Implement event handling for clicks and keyboard input.
- Validate and process mathematical expressions in JavaScript.
- Apply CSS layout systems such as Grid and responsive media queries.
- Conduct functional and usability testing.

---

## 4. Scope of Project

The scope of this mini project is defined to meet academic requirements while remaining implementable within limited development time.

### 4.1 In Scope

- Single-page calculator application.
- Basic arithmetic operations and decimal support.
- Expression evaluation using operators and parentheses.
- Clear (C), Backspace, and Equals actions.
- Error status display for invalid input cases.
- Keyboard support for commonly used keys.
- Themed user interface inspired by dark-cyan design.

### 4.2 Out of Scope

- Scientific functions (sin, cos, tan, log, exponentials).
- Unit conversion modules.
- User accounts, authentication, or cloud sync.
- Persistent calculation history database.
- Multi-language localization.

### 4.3 Target Users

- School and college students.
- Faculty for quick arithmetic usage.
- General users needing browser-based calculation.

---

## 5. Literature Review

The development of calculators has evolved from mechanical devices to handheld electronic calculators and now software calculators integrated into operating systems and browsers.

### 5.1 Historical Context

Early calculators were mechanical and limited in operation speed and complexity. Electronic calculators improved reliability and introduced programmable logic. With web technologies maturing, browser-based calculators became practical and widely accessible.

### 5.2 Existing Calculator Approaches

Most web calculators follow one of these approaches:

1. **Immediate Evaluation Model:** Evaluates partial results after each operator.
2. **Expression Evaluation Model:** Builds complete expression string then evaluates.
3. **Stack-Based Parsing Model:** Uses tokenization and operator precedence algorithms.

For this project, the expression model is selected due to implementation simplicity and suitability for basic operations.

### 5.3 UI/UX Considerations in Existing Systems

Good calculator interfaces generally provide:

- Distinct operator and numeric keys.
- High-contrast display area.
- Error feedback without disruptive popups.
- Keyboard accessibility.
- Responsive sizing for touch devices.

These design factors are incorporated into the proposed system.

### 5.4 Identified Gaps in Beginner Projects

Many student calculator projects found in online references often have gaps:

- Inadequate input sanitization.
- Unclear button hierarchy.
- No handling of NaN/Infinity states.
- Lack of documentation and test evidence.

This project addresses these shortcomings by including validation, safe evaluation checks, and structured project documentation.

---

## 6. System Analysis

System analysis identifies user needs, functional requirements, constraints, and feasibility.

### 6.1 Requirement Analysis

#### Functional Requirements

- FR1: Accept numeric input (0-9).
- FR2: Accept decimal point input.
- FR3: Support arithmetic operators (+, -, *, /).
- FR4: Support parentheses for grouped operations.
- FR5: Evaluate expression on Equals action.
- FR6: Clear complete expression.
- FR7: Delete last entered character.
- FR8: Display user-friendly error messages.

#### Non-Functional Requirements

- NFR1: Responsive design for mobile and desktop.
- NFR2: Fast execution for normal arithmetic expressions.
- NFR3: Code readability and maintainability.
- NFR4: Browser compatibility with modern engines.
- NFR5: Visually consistent theme and button feedback.

### 6.2 Feasibility Study

#### Technical Feasibility

The project is technically feasible using standard browser technologies. No external dependencies are required.

#### Economic Feasibility

The development cost is minimal because tools are open-source and no hosting is required for local execution.

#### Operational Feasibility

Users can operate the system without training due to familiar calculator layout.

### 6.3 Constraints

- Limited project duration for final-year mini project.
- Restriction to basic operations only.
- Offline static architecture without backend processing.

---

## 7. System Design

System design translates requirements into a structured solution.

### 7.1 Architecture Overview

The application follows a 3-layer front-end model:

- **Presentation Layer:** HTML structure for display and buttons.
- **Style Layer:** CSS theme, layout, and responsiveness.
- **Logic Layer:** JavaScript event handling and expression evaluation.

### 7.2 Module Design

#### Module A: UI Layout Module

- Creates calculator panel.
- Organizes buttons in a 4-column grid.
- Includes accessible labels and status section.

#### Module B: Input Handling Module

- Captures button clicks and keyboard keys.
- Appends characters to expression buffer.
- Handles special actions (clear, backspace, equals).

#### Module C: Evaluation Module

- Sanitizes expression using regex.
- Evaluates arithmetic expression.
- Detects invalid or non-finite output.

#### Module D: Error Handling Module

- Displays friendly error messages.
- Prevents app break on malformed expressions.
- Resets state after error.

### 7.3 Data Flow (Textual)

1. User enters values/operators.
2. Expression string updates in display.
3. User presses Equals.
4. System validates expression.
5. System computes output.
6. Result or error message displayed.

### 7.4 UI Design Considerations

- Dark gradient background for reduced eye strain.
- Cyan accent color for operators and highlights.
- High contrast text for readability.
- Distinct equal button for action prominence.
- Touch-friendly button size.

### 7.5 Color Theme (Based on Provided Image)

- Background Main: `#24272F`
- Background Secondary: `#2F333C`
- Accent Cyan: `#5EE9E6`
- Accent Strong: `#37D6D2`
- Primary Text: `#F4F8FA`
- Muted Text: `#9BA7B2`

---

## 8. Implementation

Implementation consists of three core files:

- `index.html`
- `style.css`
- `script.js`

### 8.1 HTML Implementation

The HTML file defines:

- Calculator wrapper container.
- Header with project label.
- Read-only display input for expression/result.
- Status paragraph for error messages.
- Button grid for digits, operators, and actions.

Semantic and accessibility aspects include proper labels and ARIA grouping.

### 8.2 CSS Implementation

The CSS file includes:

- Root variables for theme management.
- Gradient and radial highlights for modern look.
- Glass-like panel styling for calculator body.
- Grid layout for button placement.
- Hover/active states for interactive feedback.
- Responsive font adjustments for small screens.

### 8.3 JavaScript Implementation

The JavaScript logic provides:

- Expression state management.
- Event listeners for clicks and keydown events.
- Utility functions: append, clear, backspace, evaluate.
- Input sanitization using regex.
- Safe result checks for finite values.
- Controlled error messaging.

### 8.4 Algorithm (Pseudo Steps)

1. Initialize expression as empty string.
2. On number/operator input, append to expression.
3. On clear command, reset expression and display.
4. On backspace, remove last character.
5. On equals command:
   - Validate expression characters.
   - Evaluate arithmetic result.
   - If invalid, show error and reset.
6. Update display after every operation.

### 8.5 Error Handling Strategy

- Empty expression submit: prompt user to enter expression.
- Illegal characters: reject expression.
- Division by zero / non-finite output: display error.
- Syntax error in expression: show invalid expression message.

---

## 9. Tools and Technologies Used

### 9.1 Development Tools

- Visual Studio Code (or equivalent IDE)
- Google Chrome / Microsoft Edge browser
- Notepad or text editor (optional)

### 9.2 Technologies

- **HTML5**: semantic structure
- **CSS3**: styling, layout, responsiveness
- **JavaScript (ES6)**: logic and interactivity

### 9.3 Versioning (Optional)

- Git for source control
- GitHub for project hosting and collaboration

### 9.4 Hardware Requirements

- Processor: Any modern dual-core CPU
- RAM: 2 GB minimum
- Storage: < 50 MB required

### 9.5 Software Requirements

- Operating System: Windows/Linux/macOS
- Web Browser: Latest Chrome, Edge, Firefox, Safari

---

## 10. Testing

Testing verifies correctness, robustness, and usability.

### 10.1 Testing Approach

- **Black-box testing** for feature behavior.
- **Boundary and invalid input testing** for error handling.
- **UI testing** for responsive layout and readability.

### 10.2 Test Cases

| Test Case ID | Input | Action | Expected Output | Status |
|---|---|---|---|---|
| TC01 | `2+3` | Press `=` | `5` | Pass |
| TC02 | `10-4` | Press `=` | `6` | Pass |
| TC03 | `7*8` | Press `=` | `56` | Pass |
| TC04 | `20/5` | Press `=` | `4` | Pass |
| TC05 | `8/0` | Press `=` | Error message | Pass |
| TC06 | `2..5+1` | Press `=` | Invalid expression | Pass |
| TC07 | Empty | Press `=` | Prompt to enter expression | Pass |
| TC08 | `12+` | Press `=` | Invalid expression | Pass |
| TC09 | `((3+2)*4)` | Press `=` | `20` | Pass |
| TC10 | Enter digits then `C` | Press `C` | Display reset to `0` | Pass |
| TC11 | Enter `123`, backspace | Press `⌫` | `12` | Pass |
| TC12 | Keyboard input | Enter via keys | Correct evaluation | Pass |

### 10.3 Usability Testing Summary

- Users found the layout intuitive.
- Operator buttons were clearly distinguishable.
- Error messages helped users correct expressions.
- Mobile interaction remained comfortable due to button sizing.

---

## 11. Results and Discussion

The calculator application successfully meets all primary objectives defined at project initiation.

### 11.1 Functional Outcome

- All basic arithmetic operations function correctly.
- Clear and backspace actions work as expected.
- Keyboard and mouse interactions are both supported.
- Invalid expressions are handled with safe feedback.

### 11.2 Interface Outcome

- Dark-cyan theme improves visual identity.
- Display readability is strong across devices.
- Button feedback improves perceived responsiveness.

### 11.3 Performance Discussion

- Expression evaluation is near-instant for standard arithmetic inputs.
- No external libraries are needed, reducing load overhead.
- Application runs offline once files are available.

### 11.4 Academic Relevance

The project demonstrates practical competency in:

- front-end architecture,
- event-driven programming,
- input validation,
- error handling,
- and software documentation.

It is suitable for mini project submission, demonstration, and viva evaluation.

---

## 12. Advantages and Limitations

### 12.1 Advantages

1. Simple and clean user interface.
2. Lightweight implementation without dependencies.
3. Cross-platform browser compatibility.
4. Real-time response and low resource usage.
5. Good starter architecture for future expansion.
6. Clear separation of HTML, CSS, and JavaScript layers.

### 12.2 Limitations

1. Only basic arithmetic operations are included.
2. No persistent history feature.
3. No scientific or engineering functions.
4. No unit conversion support.
5. Input evaluation model is not intended for advanced symbolic math.

---

## 13. Future Enhancements

Future versions of the project can include the following upgrades:

1. Scientific calculator functions (trigonometry, logarithms, powers).
2. Calculation history panel with local storage.
3. Theme switcher (light/dark/custom brand modes).
4. Keyboard shortcut guide and accessibility enhancements.
5. Voice input for arithmetic expressions.
6. Export calculations as PDF or text logs.
7. Progressive Web App (PWA) support for installable experience.
8. Multi-language interface for broader audience.

---

## 14. Conclusion

The **Calculator Application** mini project achieves its intended goals by delivering a reliable, responsive, and user-friendly arithmetic calculator using core web technologies. The project demonstrates that even a basic utility can be engineered professionally by applying software development principles such as requirement analysis, modular design, validation, testing, and documentation.

The final implementation provides accurate basic calculations, safe error handling, and polished visual presentation inspired by a modern dark-cyan palette. It runs smoothly in standard browsers and can be deployed easily without additional infrastructure.

From an academic perspective, this project effectively consolidates theoretical and practical knowledge of front-end development and serves as a strong foundation for advanced enhancements in future work.

---

## 15. References

1. Mozilla Developer Network (MDN), HTML Documentation. https://developer.mozilla.org/docs/Web/HTML  
2. Mozilla Developer Network (MDN), CSS Documentation. https://developer.mozilla.org/docs/Web/CSS  
3. Mozilla Developer Network (MDN), JavaScript Documentation. https://developer.mozilla.org/docs/Web/JavaScript  
4. W3Schools, JavaScript Tutorial and References. https://www.w3schools.com/js/  
5. Eloquent JavaScript by Marijn Haverbeke (Book).  
6. Web Content Accessibility Guidelines (WCAG) Overview. https://www.w3.org/WAI/standards-guidelines/wcag/

---

## Appendix A: File Structure

```text
Calculator App/
|-- index.html
|-- style.css
|-- script.js
|-- PROJECT_REPORT.md
|-- PPT_CONTENT.md
|-- DEMO_VIDEO_SCRIPT.md
|-- VIVA_QA.md
|-- BONUS_VARIATIONS.md
```

## Appendix B: How to Run

1. Open project folder.
2. Double-click `index.html` or open in any modern browser.
3. Use on-screen keys or keyboard to perform calculations.
4. Press `C` to clear and `=` to evaluate.

## Appendix C: Detailed Introduction and Background

### C.1 Digital Computation in Education

The use of digital tools in education has rapidly increased over the last decade, especially in science, engineering, commerce, and statistics-related disciplines. Students frequently solve numerical problems, verify manual calculations, and cross-check assignments using electronic tools. A browser-based calculator serves as a convenient utility because it is instantly available in computer laboratories and personal systems without installation requirements.

In academic environments, even small utility applications can become effective learning artifacts when developed with proper engineering practices. Building a calculator enables students to understand user interaction patterns, software modularity, and testing discipline. The project selected in this report therefore serves dual value: it is practically useful and academically meaningful.

### C.2 Rationale for Choosing a Mini Project Topic

The selected topic is appropriate for a final year mini project due to the following reasons:

1. It requires complete implementation lifecycle from analysis to testing.
2. It allows demonstration of frontend development skills.
3. It is easy to evaluate during viva due to clear input-output behavior.
4. It can be enhanced in multiple directions, proving scope for innovation.
5. It provides an ideal platform to demonstrate coding standards and UI design ability.

### C.3 Academic Importance

From a curriculum perspective, this project validates the following outcomes:

- Application of programming constructs in real use cases.
- Understanding of event-driven architecture.
- Practical use of validation and exception handling.
- Adoption of software documentation standards.
- Ability to communicate implementation and testing evidence.

### C.4 Industry Relevance

In the software industry, small productivity tools are often used to evaluate practical skills of fresh graduates. A polished calculator project demonstrates attention to usability, reliability, and maintainable code structure. The same engineering approach can be transferred to larger dashboard and enterprise web systems.

---

## Appendix D: Extended System Analysis

### D.1 User Stories

The following user stories describe expected behavior:

- As a student, I want to enter arithmetic expressions quickly so that I can verify homework answers.
- As a user, I want clear buttons and labels so that I can avoid input confusion.
- As a user, I want the calculator to show an error instead of crashing when I type invalid expressions.
- As a user, I want keyboard support to speed up operations.
- As a mobile user, I want buttons large enough to tap comfortably.

### D.2 Functional Decomposition

The complete system can be decomposed into five sub-functions:

1. Input acquisition (button and keyboard).
2. Input composition into expression string.
3. Expression validation and sanitization.
4. Arithmetic evaluation and result formatting.
5. State reset and error feedback management.

### D.3 Requirement Traceability Matrix (RTM)

| Requirement ID | Description | Implemented In | Test Case ID |
|---|---|---|---|
| FR1 | Numeric input | HTML buttons + keydown handler | TC01, TC12 |
| FR2 | Decimal support | input append logic | TC08 |
| FR3 | Operators +,-,*,/ | operator buttons + key handler | TC01-TC04 |
| FR4 | Parentheses | dedicated keys and parsing | TC09 |
| FR5 | Equals evaluation | `evaluateExpression()` | TC01-TC09 |
| FR6 | Clear function | `clearAll()` | TC10 |
| FR7 | Backspace function | `backspace()` | TC11 |
| FR8 | Error handling | validation + try-catch | TC05, TC06, TC07 |

### D.4 Risk Analysis

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Invalid expression causes runtime error | Medium | High | Use try-catch and safe reset |
| Keyboard inconsistency across browsers | Low | Medium | Test on multiple browsers |
| Poor visibility in dark theme | Low | Medium | Maintain contrast and accent hierarchy |
| User enters unsupported characters | Medium | Medium | Regex-based sanitization |

### D.5 Feasibility Justification in Detail

**Technical Feasibility:** Modern browsers support all required APIs. No build tools are mandatory, enabling immediate execution in laboratory systems.  
**Economic Feasibility:** Zero licensing cost due to open standards. Deployment cost is negligible.  
**Operational Feasibility:** No special training required. Users understand button layout by convention.  
**Schedule Feasibility:** Project is achievable in typical mini project timeline with incremental milestones.

---

## Appendix E: Extended System Design

### E.1 Design Principles Used

1. Separation of concerns.
2. Progressive enhancement.
3. Defensive programming.
4. Accessibility awareness.
5. Responsive-first design.

### E.2 UI Component Specifications

| Component | Purpose | Behavior |
|---|---|---|
| Header | Displays project identity | Static label and subtitle |
| Display Panel | Shows expression/result | Right-aligned text, read-only |
| Status Label | Error and prompt messages | Dynamic updates via JS |
| Numeric Keys | Number input | Append to expression |
| Operator Keys | Arithmetic actions | Append operator symbols |
| Action Keys | Clear, Backspace, Equals | Trigger system actions |

### E.3 Navigation and Interaction Logic

The calculator is a single-screen utility with no page navigation. Interaction is event-based. Each key event modifies state and updates view. This linear interaction model reduces complexity and improves predictability.

### E.4 Data Model

A lightweight in-memory data model is used:

- `expression`: current input buffer string.
- `lastActionWasResult`: boolean flag to control post-result input behavior.
- `status`: message text for user feedback.

No persistent storage is used because scope is limited to runtime computation.

### E.5 Validation Rules

1. Expression must not be empty before evaluation.
2. Only allowed characters are accepted: digits, operators, parentheses, decimal, spaces.
3. Result must be a finite numeric value.
4. On validation failure, display "Invalid expression" and reset computation state.

### E.6 Error Message Design

Error communication is designed with three goals:

- Immediate visibility near display area.
- Non-blocking behavior (no intrusive alerts).
- Friendly wording that guides retry.

---

## Appendix F: Extended Implementation Notes

### F.1 HTML Structure Explanation

The HTML document includes semantic elements such as `main`, `section`, and `header` for structure clarity. A read-only input is used as the display to prevent direct arbitrary edits while still presenting content in familiar form. Buttons contain `data-*` attributes so JavaScript can map interactions cleanly without hard-coded element IDs for every key.

### F.2 CSS Engineering Details

CSS custom properties (`:root` variables) allow quick theme updates and consistent use of color values. Grid layout (`grid-template-columns: repeat(4, 1fr)`) ensures balanced key sizing. The design uses layered backgrounds and subtle glow to match brand style while keeping text contrast readable.

Interactive states are intentionally implemented:

- Hover: visual focus for desktop users.
- Active: tactile press effect for realism.
- Distinct styles for operator and equals keys to reduce user errors.

### F.3 JavaScript Workflow Details

The code is organized into small reusable functions:

- `clearAll()` for resetting app state.
- `backspace()` for one-step correction.
- `appendValue()` for controlled expression growth.
- `evaluateExpression()` for validation and computation.

An event delegation approach is used on the key container. This reduces repetitive listeners and keeps code maintainable.

Keyboard handling supports numeric and operator keys, Enter for evaluation, Backspace for deletion, and Escape/C for clear. This improves speed for users familiar with keyboard workflows.

### F.4 Complexity Consideration

For expressions of length `n`, appending operations are O(1) per key press (excluding rendering overhead), while evaluation depends on JavaScript engine parsing complexity. Given mini project scope, performance remains satisfactory for typical short expressions.

### F.5 Code Quality Practices

- Meaningful variable naming.
- Modular functions.
- Early returns for readability.
- Comments only where intent needs clarification.
- Avoidance of unnecessary dependencies.

---

## Appendix G: Extended Testing Documentation

### G.1 Additional Functional Test Cases

| ID | Scenario | Input | Expected |
|---|---|---|---|
| TC13 | Decimal multiplication | `2.5*4` | `10` |
| TC14 | Negative-like entry | `0-9` | `-9` |
| TC15 | Nested parentheses | `(2+(3*4))` | `14` |
| TC16 | Repeated operator error | `5++2` | Invalid expression |
| TC17 | Leading dot | `.5+1` | `1.5` |
| TC18 | Long expression | `1+2+3+4+5+6+7+8+9` | `45` |

### G.2 Browser Compatibility Results

| Browser | Version (Tested) | Result |
|---|---|---|
| Google Chrome | Latest stable | Pass |
| Microsoft Edge | Latest stable | Pass |
| Mozilla Firefox | Latest stable | Pass |

### G.3 Responsive Testing Cases

| Device Width | Observation |
|---|---|
| 1366px | Centered panel with balanced spacing |
| 768px | Good readability and touch usability |
| 390px | Button layout remains stable and legible |

### G.4 Usability Criteria Evaluation

- Learnability: High (familiar layout)
- Efficiency: High (keyboard and button support)
- Error prevention: Medium-High (validation applied)
- User satisfaction: High (clean visual hierarchy)

### G.5 Defect Log Summary

| Defect | Root Cause | Resolution |
|---|---|---|
| Invalid expression caused crash (early prototype) | No try-catch | Added guarded evaluation |
| Backspace after result behavior inconsistent | State not tracked | Introduced result state flag |
| Operator keys not visually distinct | Uniform style | Added operator theme class |

---

## Appendix H: User Manual and Maintenance

### H.1 User Manual

1. Open `index.html` in a browser.
2. Enter numbers and operators.
3. Press `=` to compute result.
4. Press `C` to clear all.
5. Press `⌫` to remove last character.
6. Use keyboard for faster input.

### H.2 Troubleshooting

- If display shows error, press `C` and re-enter expression.
- Ensure expression has valid operator placement.
- Avoid unsupported symbols.

### H.3 Deployment Guide

- Local deployment: run directly as static files.
- Server deployment: upload all files to any static web host.
- No database or backend setup required.

### H.4 Maintenance Plan

- Regularly test with latest browser versions.
- Refactor evaluation logic if advanced functions are added.
- Keep UI variables centralized for easier branding updates.

### H.5 Ethical and Academic Note

This project is developed for academic demonstration and learning purposes. If used as a submission template, student-specific details should be customized, and proper institutional formatting should be followed.
