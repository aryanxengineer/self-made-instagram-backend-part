# Backend Folder Structure – InstaPlay 🏗️

This document explains the backend folder structure of **InstaPlay**, a scalable social media platform.  
The structure is designed using **OOP principles**, **feature-based modularization**, and **product-based company best practices**.

The primary goals of this structure are:

- High maintainability
- Clear separation of concerns
- Easy onboarding for new engineers
- Future scalability (Monolith → Microservices)

---

## 📁 Root `src/` Overview

<pre>
src/
├── app.ts
├── server.ts
├── routes.ts
├── index.ts
</pre>

### Purpose

- Acts as the **core bootstrap layer**
- Responsible for initializing the application, loading routes, and starting the server

---

## 🧩 Application Bootstrap Files

### `app.ts`

- Creates and configures the Express application
- Registers middlewares
- Loads global routes
- Does **not** start the server

📌 Responsibility:

> Application configuration only (pure setup, no side effects)

---

### `server.ts`

- Creates HTTP server
- Attaches WebSocket (Socket.IO)
- Starts listening on the configured port

📌 Responsibility:

> Infrastructure-level server startup

---

### `index.ts`

- Entry point of the application
- Calls server bootstrap logic

📌 Responsibility:

> Single execution entry (used by Node / Nodemon)

---

## ⚙️ `config/` – Application Configuration

<pre>
config/
├── env.ts
├── database.ts
├── redis.ts
├── cloudinary.ts
├── socket.ts
└── index.ts
</pre>


### Purpose
Centralized configuration management.

Each file:
- Exposes **strongly-typed configuration**
- Avoids hardcoding values across the codebase

Examples:
- `database.ts` → DB connections
- `redis.ts` → Cache & queue setup
- `cloudinary.ts` → Media storage
- `socket.ts` → WebSocket config

📌 Follows **12-factor app principles**

---

## 🚀 `modules/` – Core Business Domains

<pre>
modules/
├── auth/
├── user/
├── post/
├── story/
├── comment/
├── follow/
├── like/
├── save/
├── reel/
├── chat/
├── block/
└── settings/
</pre>


### Purpose
- Each folder represents a **business domain**
- Fully self-contained
- Easy to extract into microservices later

📌 This is a **feature-first architecture**, not layer-first.

---

### 🔹 Typical Module Structure

Example: `auth/`

<pre>

auth/
├── auth.controller.ts
├── auth.service.ts
├── auth.routes.ts
├── auth.validation.ts
└── auth.types.ts

</pre>


#### Responsibilities
- **Controller** → HTTP request/response handling
- **Service** → Business logic
- **Routes** → API definitions
- **Validation** → Request schema validation
- **Types** → Domain-specific TypeScript types

📌 Controllers never contain business logic  
📌 Services are framework-agnostic

---

## 🔐 Authentication Module (`auth/`)

Handles:
- JWT authentication
- Cookie-based sessions
- OAuth 2.0 login flows
- Token lifecycle management

Designed with **security-first approach**.

---

## 👤 User & Social Modules

Modules like:
- `user`
- `follow`
- `block`
- `settings`

Handle:
- Profile management
- Social graph
- Privacy & preferences

Each module owns its **own data and rules**.

---

## 📸 Content Modules

Modules like:
- `post`
- `story`
- `reel`
- `comment`
- `like`
- `save`

Designed to:
- Scale independently
- Support high read/write throughput
- Integrate caching layers

---

## 💬 Real-Time Module (`chat/`)

<pre>
chat/
├── chat.controller.ts
├── chat.service.ts
├── chat.socket.ts
├── chat.routes.ts
└── message.model.ts

</pre>


Responsibilities:
- REST APIs for chat metadata
- Socket-based real-time messaging
- Message persistence

📌 Socket logic is **isolated**, not mixed with HTTP logic.

---

## 🧠 `middlewares/` – Request Lifecycle

<pre>
middlewares/
├── auth.middleware.ts
├── error.middleware.ts
├── rateLimit.middleware.ts
└── validate.middleware.ts
</pre>


Purpose:
- Authentication & authorization
- Centralized error handling
- Rate limiting
- Request validation

📌 No business logic allowed here.

---

## 🛠️ `utils/` – Shared Utilities

<pre>
utils/
├── ApiError.ts
├── ApiResponse.ts
├── asyncHandler.ts
├── logger.ts
└── pagination.ts
</pre>


Purpose:
- Reusable helpers
- Consistent API responses
- Structured logging
- Async error handling

---

## 📌 `constants/` – System-Wide Constants

<pre> 
constants/
├── roles.ts
├── permissions.ts
└── events.ts
</pre>


Purpose:
- Avoid magic strings
- Centralize enums & identifiers

---

## ⏱️ `jobs/` – Background Processing

<pre>
jobs/
├── storyExpiry.job.ts
└── notification.job.ts
</pre>


Purpose:
- Cron jobs
- Delayed tasks
- Cleanup & automation

---

## 📬 `queues/` – Async Processing

<pre>
queues/
├── notification.queue.ts
└── chat.queue.ts
</pre>


Purpose:
- Redis-backed job queues
- Non-blocking heavy operations

---

## 🔗 `routes.ts` – Global Route Loader

- Combines all module routes
- Attaches them to Express app

📌 Keeps `app.ts` clean and readable.

---

## 🧬 `types/` – Global Type Augmentation

<pre>
types/
└── express.d.ts
</pre>


Purpose:
- Extend Express request/response types
- Shared interfaces across modules

---

## 🧪 `tests/` – Testing Layer

Contains:
- Unit tests
- Integration tests

Designed following **test pyramid principles**.

---

## 🎯 Architectural Summary

✔ Feature-based modularization  
✔ OOP-driven design  
✔ Clean separation of concerns  
✔ Microservice-ready boundaries  
✔ Product-based company standards  

This structure is intentionally designed to **scale in both codebase size and engineering team size**.

---

