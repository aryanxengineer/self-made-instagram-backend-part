# Error Handling Strategy – InstaPlay ❌

This document defines the **global error handling strategy** used across the InstaPlay backend.
The goal is to ensure **predictable behavior, debuggability, and production-grade reliability**.

Error handling is treated as a **first-class architectural concern**, not an afterthought.

---

## 🎯 Objectives

- Provide consistent error responses to clients
- Prevent application crashes
- Capture actionable debugging information
- Avoid leaking internal implementation details
- Centralize error handling logic

---

## 🧱 Error Handling Architecture

The error handling flow in InstaPlay is **centralized and layered**.

<pre>
Async Handler
↓
Service / Controller
↓
ApiError
↓
Global Error Middleware
↓
Standardized Error Response
</pre>


---

## 🧠 Error Classification

Errors are classified into well-defined categories:

### 1️⃣ Operational Errors
Errors that are expected and handled gracefully.

Examples:
- Validation failures
- Authentication errors
- Authorization failures
- Resource not found

These errors are safe to expose to clients.

---

### 2️⃣ Programmer Errors
Errors caused by bugs or incorrect assumptions.

Examples:
- Undefined access
- Database connection failures
- Unhandled promise rejections

These errors are **not exposed** to clients in detail.

---

## 📦 `ApiError` Standard

All custom errors must extend the `ApiError` class.

### Responsibilities
- Carry HTTP status code
- Contain user-safe message
- Optionally store internal error details

### Example
```ts
throw new ApiError(403, 'Access denied');
```

