  # Coding Standards – InstaPlay 🧑‍💻

  This document defines the **mandatory coding standards** followed across the InstaPlay codebase.
  These standards ensure **readability, maintainability, scalability, and production safety**.

  Coding standards are treated as **non-negotiable rules**, not preferences.

  ---

  ## 🎯 Core Principles

  - Code must be **readable before it is clever**
  - Explicit is better than implicit
  - Business logic must be deterministic
  - Side effects must be controlled
  - Code should be easy to test and refactor

  ---

  ## 🧱 Architectural Rules

  ### Layered Responsibility
  - Controllers handle HTTP concerns only
  - Services contain business logic
  - Models/repositories handle data access
  - Utilities contain reusable pure logic

  ❌ Controllers must never access databases directly  
  ❌ Services must not depend on Express-specific objects  

  ---

  ## 🧠 Object-Oriented Design Rules

  - Prefer composition over inheritance
  - Each class must have **one clear responsibility**
  - Avoid static-heavy designs
  - Dependency injection is preferred

  Example:
  ```ts
  class UserService {
    constructor(private readonly userRepository: UserRepository) {}
  }
  ```


# 🔧 Coding Standards

> **Purpose**: Maintain code quality, consistency, and readability across the InstaPlay project.

---

## 📋 Table of Contents

- [Function & Method Design](#function--method-design)
- [Variable & Data Handling](#variable--data-handling)
- [Error Handling Standards](#error-handling-standards)
- [Async & Promise Handling](#async--promise-handling)
- [Testing Standards](#testing-standards)
- [Code Cleanliness Rules](#code-cleanliness-rules)
- [Security Guidelines](#security-guidelines)
- [Code Review Checklist](#code-review-checklist)
- [Enforcement](#enforcement)
- [Summary](#summary)

---

## 🔧 Function & Method Design

### Principles
- **Single Responsibility**: Functions should do one thing and do it well
- **Keep it Small**: Focus on clarity and maintainability
- **Limit Parameters**: Avoid more than 3 parameters (use objects/DTOs instead)

### Examples

✅ **Good Practice**
```typescript
createUser(payload: CreateUserDTO)
```

❌ **Bad Practice**
```typescript
createUser(name, email, password, role, status)
```

---

## 📦 Variable & Data Handling

### Best Practices
- ✅ Avoid mutable shared state
- ✅ Use `const` by default; use `let` only when reassignment is necessary
- ✅ Avoid deeply nested objects (max 3 levels recommended)
- ✅ Validate all external inputs before processing

---

## ❌ Error Handling Standards

### Rules
- ❌ Never throw raw errors
- ✅ Use centralized error classes
- ✅ Always provide meaningful, actionable error messages

### Example
```typescript
// ✅ Good
throw new ApiError(401, 'Unauthorized access');

// ❌ Bad
throw new Error('Error');
```

---

## 🌐 Async & Promise Handling

### Standards
- ✅ Always use `async/await` for asynchronous operations
- ❌ Never mix `.then()` with `async/await`
- ✅ Wrap async handlers with error guards (try-catch or middleware)

---

## 🧪 Testing Standards

### Requirements
- ✅ Business logic **must** be testable
- ❌ Avoid placing logic inside route handlers
- ✅ Mock external dependencies (APIs, databases, etc.)
- ✅ Write unit tests for all critical functions

---

## 🧹 Code Cleanliness Rules

### Non-Negotiables
- ❌ No commented-out code (delete it; version control keeps history)
- ❌ No unused imports
- ❌ No `console.log` statements in production code
- ✅ Follow ESLint/Prettier rules strictly
- ✅ Remove dead code and unused variables

---

## 🔐 Security Guidelines

### Critical Rules
- ❌ **Never trust client input** – always validate and sanitize
- ✅ Sanitize and validate all request payloads
- ❌ Secrets **must never** be hardcoded
- ✅ Use environment variables (`.env`) for sensitive data
- ✅ Apply rate limiting and authentication where necessary

---

## 🧭 Code Review Checklist

Before submitting a PR, ensure:

- Does the code follow naming conventions?
- Is business logic properly isolated from controllers?
- Are edge cases and error scenarios handled?
- Is the code readable and understandable by a new engineer?
- Are there sufficient comments for complex logic?
- Have all tests passed?

---

## 📌 Enforcement

### How Standards Are Maintained
- ⚠️ Violations **block pull request approval**
- ✅ Standards are enforced via:
  - Code reviews
  - Automated linters (ESLint, Prettier)
  - CI/CD pipelines
- 🔍 Exceptions require **architectural justification** and team approval

---

## 🏁 Summary

These coding standards exist to ensure that **InstaPlay** remains:

| Goal | Benefit |
|------|---------|
| **Scalable** | Supports growth without technical debt |
| **Maintainable** | Easy to update and debug |
| **Production-Ready** | Reliable and robust in live environments |
| **Developer-Friendly** | Quick onboarding for new engineers |

---

> **Note**: Adhering to these standards is not optional—it's a commitment to quality and team success.