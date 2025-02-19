# Express.js: Missing Error Handling for Malformed JSON Request Bodies

This repository demonstrates a common error in Express.js applications: the lack of proper error handling for malformed JSON request bodies.  The `bug.js` file shows the flawed code, while `bugSolution.js` provides a corrected version.

## Problem

The original code fails to handle scenarios where the incoming request body is not valid JSON or is missing entirely. This can lead to unexpected behavior such as crashes or silent failures.

## Solution

The solution involves adding robust error handling using `try...catch` blocks and validating the request body before processing it.  This ensures that the application gracefully handles invalid inputs and prevents crashes.