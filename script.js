  const display = document.getElementById("display");
const statusEl = document.getElementById("status");
const keys = document.querySelector(".keys");

let expression = "";
let lastActionWasResult = false;

function setStatus(message = "") {
  statusEl.textContent = message;
}

function updateDisplay(value) {
  display.value = value || "0";
}

function clearAll() {
  expression = "";
  lastActionWasResult = false;
  setStatus("");
  updateDisplay("0");
}

function backspace() {
  if (lastActionWasResult) {
    clearAll();
    return;
  }
  expression = expression.slice(0, -1);
  updateDisplay(expression);
}

function appendValue(value) {
  setStatus("");
  if (lastActionWasResult && /[0-9.]/.test(value)) {
    expression = "";
  }
  lastActionWasResult = false;
  expression += value;
  updateDisplay(expression);
}

function evaluateExpression() {
  if (!expression.trim()) {
    setStatus("Please enter an expression.");
    return;
  }

  try {
    const unsafePattern = /[^0-9+\-*/().\s]/;
    if (unsafePattern.test(expression)) {
      throw new Error("Invalid characters in expression.");
    }

    // Using Function for controlled arithmetic expression evaluation.
    const result = Function(`"use strict"; return (${expression})`)();

    if (!Number.isFinite(result)) {
      throw new Error("Division by zero is not allowed.");
    }

    expression = String(result);
    updateDisplay(expression);
    lastActionWasResult = true;
  } catch (error) {
    setStatus("Invalid expression. Please try again.");
    updateDisplay("Error");
    expression = "";
    lastActionWasResult = false;
  }
}

keys.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const action = button.dataset.action;
  const value = button.dataset.value;

  if (action === "clear") {
    clearAll();
    return;
  }
  if (action === "backspace") {
    backspace();
    return;
  }
  if (action === "equals") {
    evaluateExpression();
    return;
  }
  if (value) {
    appendValue(value);
  }
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/[0-9+\-*/().]/.test(key)) {
    appendValue(key);
    return;
  }
  if (key === "Enter" || key === "=") {
    event.preventDefault();
    evaluateExpression();
    return;
  }
  if (key === "Backspace") {
    backspace();
    return;
  }
  if (key.toLowerCase() === "c" || key === "Escape") {
    clearAll();
  }
});

clearAll();
