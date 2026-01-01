# Request Flow – InstaPlay 🔄

This document explains the **end-to-end lifecycle of a request** in the InstaPlay backend, from the entry point to the final response.

It reflects the **actual execution model** used in the system and serves as a reference for debugging, optimization, and onboarding.

---

## 🚪 Entry Point Flow

<pre>
index.ts
↓
server.ts
↓
app.ts
↓
routes.ts
↓
module routes
</pre>


### Description
- `index.ts` acts as the single execution entry point
- `server.ts` initializes HTTP and WebSocket servers
- `app.ts` configures middleware and global routing
- `routes.ts` mounts all feature-level routes

---

## 🌐 Generic HTTP Request Flow

1. Client sends HTTP request
2. Request enters Express application
3. Global middlewares are executed
4. Route matching occurs
5. Controller receives request
6. Service layer executes business logic
7. Data layer interaction happens
8. Response is formatted and returned

---

## 🧩 Middleware Execution Order

Middlewares execute **top-down** in the following order:

1. Request parsing (JSON, cookies)
2. Logging middleware
3. Rate limiting
4. Authentication middleware
5. Authorization checks
6. Validation middleware
7. Route handler (controller)

📌 Middleware contains **no business logic**.

---

## 🔐 Authenticated Request Flow

1. Auth middleware extracts JWT from secure cookie
2. Token validity is verified
3. User context is attached to request object
4. Authorization rules are checked
5. Request proceeds to controller

Failure at any step results in a standardized error response.

---

## 📦 Controller → Service Flow

### Controller Responsibilities
- Extract request data
- Invoke appropriate service methods
- Handle HTTP-level concerns only

### Service Responsibilities
- Execute business logic
- Enforce domain rules
- Interact with data sources
- Trigger side-effects (events, queues)

📌 Controllers never access the database directly.

---

## 🗄️ Data Access Flow

- Services interact with models/repositories
- Reads follow a **cache-first strategy**
- Writes go to primary databases
- Cache invalidation occurs after writes

Example:
1. Check Redis cache
2. Fallback to database if cache miss
3. Store result in cache

---

## ⚙️ Async Side-Effects Flow

Certain operations trigger background tasks:

- Notifications
- Feed updates
- Cleanup jobs

Flow:
1. Service completes main operation
2. Job is pushed to queue
3. Worker processes job asynchronously

📌 HTTP response is not blocked.

---

## ❌ Error Handling Flow

1. Error thrown anywhere in request lifecycle
2. Captured by async handler
3. Passed to global error middleware
4. Transformed into standardized error response
5. Logged for observability

No unhandled errors reach the client.

---

## 📤 Response Standardization

All responses follow a common format:

- Success responses use `ApiResponse`
- Errors use `ApiError`
- HTTP status codes are consistent

This ensures predictable client-side handling.

---

## 🔌 Real-Time (Socket) Request Flow

1. Client establishes WebSocket connection
2. Socket middleware authenticates user
3. Event listeners are registered
4. Messages are handled in socket handlers
5. Persistence occurs via service layer

Socket logic remains **isolated from HTTP logic**.

---

## 🎯 Summary

The request flow in InstaPlay is designed to:
- Be predictable and debuggable
- Separate concerns cleanly
- Support scalability and async processing
- Maintain production-grade reliability

This document reflects the **actual runtime behavior** of the backend.

---
