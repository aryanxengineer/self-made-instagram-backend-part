# Naming Conventions – InstaPlay 🏷️

This document defines the **official naming conventions** used across the InstaPlay codebase.

These conventions ensure **consistency, readability, and long-term maintainability**, especially as the system and team scale.

---

## 📁 File & Folder Naming

### Rules

- Use **kebab-case** for folders
- Use **kebab-case** or **dot-based naming** for files
- File names must reflect their responsibility

### Examples

auth.controller.ts  
user.service.ts  
rate-limit.middleware.ts  
story-expiry.job.ts

❌ Avoid:  
AuthController.ts  
userService.ts  
test123.ts

---

## 🧱 Class Naming

### Rules

- Use **PascalCase**
- Class names must be **nouns**
- Avoid generic names like `Manager`, `Handler`

### Examples

```ts
class AuthService {}
class UserController {}
class NotificationQueue {}
class ApiError {}
```

---

## 🔧 Method & Function Naming

### Rules

- Use camelCase
- Methods should describe intent
- Use verbs for actions

### Examples

```ts
createUser();
verifyAccessToken();
publishNotification();
```

❌ Avoid:

```ts
doWork();
handle();
process();
```

---

## 📦 Variable Naming

### Rules

- Use camelCase
- Names must reflect data meaning
- Avoid abbreviations unless industry standard

### Examples

```ts

const refreshToken: string
const cachedUserProfile

```

❌ Avoid:

```ts

const tkn
const data1

```

---

## 🌐 API Naming (REST)

### Rules

- Use plural nouns
- Use HTTP verbs for actions
- Avoid verbs in URL paths

### Examples

```ts

POST   /api/v1/users
GET    /api/v1/posts/:id
DELETE /api/v1/comments/:id

```

❌ Avoid:

```ts

POST /createUser
GET  /getPosts

```

---

## 🗄️ Database Naming

### Tables / Collections

- Use snake_case
- Use plural nouns

### Examples

```ts
users
posts
user_followers
```

### Columns / Fields

```ts
created_at
updated_at
user_id
```
---

## 📌 Constants & Enums

### Rules

- Use UPPER_SNAKE_CASE

- Group related constants

### Examples

```ts
const MAX_LOGIN_ATTEMPTS = 5
enum USER_ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER'
}
```

---


## 📡 Event Naming

### Rules
- Use domain.action format

- Lowercase

- Past tense for completed events

### Examples

```ts
user.created
post.liked
message.sent
```

---

## 🔐 Environment Variables

### Rules
- Use UPPER_SNAKE_CASE
- Prefix by context
### Examples

```ts
DB_HOST
REDIS_URL
JWT_SECRET
```

## 🚫 Anti-Patterns (Strictly Avoid)
- Abbreviations without context
- Inconsistent naming styles
- Renaming without refactoring references
- Mixing naming styles in same domain

## 🧭 Enforcement
- All PRs must follow these conventions
- Naming violations are treated as review blockers
- Linters and code reviews enforce consistency

## 🎯 Summary

### Consistent naming:

- Reduces cognitive load
- Improves onboarding speed
- Prevents architectural decay
- Naming conventions in InstaPlay are treated as non-negotiable engineering contracts.