# Architectural Decisions – InstaPlay 🧠

This document records the key architectural decisions made during the design of **InstaPlay**.

Each decision captures the **context, reasoning, trade-offs, and long-term impact** to ensure clarity, maintainability, and future scalability.

---

## ADR-001: Monolithic Architecture with Microservice Readiness

### Context
The platform requires rapid development while keeping the option open for future horizontal scaling.

### Decision
A **modular monolithic architecture** was chosen with strict domain boundaries to allow seamless migration to microservices when required.

### Alternatives Considered
- Full microservices architecture
- Serverless-first design

### Trade-offs
**Pros**
- Faster development
- Easier debugging
- Lower operational complexity

**Cons**
- Single deployment unit
- Requires discipline to maintain boundaries

### Consequences
- Each module can later be extracted as an independent service
- Clear ownership boundaries are enforced early

---

## ADR-002: Express + TypeScript Instead of NestJS

### Context
A scalable, maintainable backend architecture was required without relying on heavy framework abstractions.

### Decision
Express was chosen with **TypeScript and custom OOP layering** to achieve NestJS-like structure with full control.

### Alternatives Considered
- NestJS
- Fastify

### Trade-offs
**Pros**
- Full architectural control
- Deep understanding of internals
- Lightweight runtime

**Cons**
- More manual setup
- Requires stricter discipline

### Consequences
- Strong ownership of architectural decisions
- Framework-agnostic design

---

## ADR-003: Object-Oriented Design (OOP)

### Context
The system contains complex business logic that must remain readable and testable.

### Decision
A **class-based OOP approach** was adopted across controllers, services, and domain logic.

### Alternatives Considered
- Functional programming
- Mixed paradigms

### Trade-offs
**Pros**
- Clear responsibilities
- Easier testing and mocking
- Familiar to large engineering teams

**Cons**
- Slightly more boilerplate

### Consequences
- Codebase scales better with team size
- Clear onboarding experience

---

## ADR-004: Multi-Database Strategy

### Context
Different data types require different storage characteristics.

### Decision
A **polyglot persistence strategy** was adopted:
- MySQL for relational data
- MongoDB for flexible schemas
- Redis for caching and queues

### Alternatives Considered
- Single database solution
- NoSQL-only approach

### Trade-offs
**Pros**
- Optimized storage per use case
- Better performance characteristics

**Cons**
- Increased operational complexity

### Consequences
- Clear data ownership per domain
- Scales well under varied workloads

---

## ADR-005: JWT Authentication with Secure Cookies

### Context
The system needs stateless authentication with strong security guarantees.

### Decision
JWT-based authentication using **HTTP-only secure cookies** was implemented, along with OAuth 2.0 support.

### Alternatives Considered
- Session-based authentication
- Token storage in localStorage

### Trade-offs
**Pros**
- CSRF-safe cookie strategy
- Stateless scalability
- OAuth compatibility

**Cons**
- Token rotation complexity

### Consequences
- Improved security posture
- Production-ready auth flow

---

## ADR-006: Real-Time Chat via WebSockets

### Context
Instant messaging requires low-latency, bidirectional communication.

### Decision
Socket-based communication was implemented using a dedicated chat module.

### Alternatives Considered
- Polling
- Server-Sent Events (SSE)

### Trade-offs
**Pros**
- Real-time communication
- Efficient connection reuse

**Cons**
- Connection management complexity

### Consequences
- Scalable real-time features
- Requires careful monitoring

---

## ADR-007: Background Jobs & Queues

### Context
Certain tasks should not block HTTP request cycles.

### Decision
Redis-backed queues were introduced for background processing and notifications.

### Alternatives Considered
- In-process background jobs
- Cron-only tasks

### Trade-offs
**Pros**
- Non-blocking workflows
- Retry and failure handling

**Cons**
- Additional infrastructure

### Consequences
- Improved system reliability
- Better user experience

---

## ADR-008: Cache-First Read Strategy

### Context
High-read operations need to be optimized for performance.

### Decision
Redis caching was applied for frequently accessed data.

### Alternatives Considered
- Database-only reads
- CDN-only caching

### Trade-offs
**Pros**
- Reduced database load
- Faster response times

**Cons**
- Cache invalidation complexity

### Consequences
- Improved scalability under load
- Requires strict invalidation policies

---

## 📌 Notes

- This document evolves with the system.
- Any major architectural change must add a new ADR entry.
- Decisions are never deleted, only superseded.

---
