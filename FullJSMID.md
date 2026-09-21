Baik. Kalau target akhirnya **Mid-Level Software Engineer**, saya akan ubah backend kembali ke **Node.js + Express** dan menyederhanakan stack agar tidak terlalu banyak teknologi yang dipelajari bersamaan.

## Target Tech Stack

```text
                    MID-LEVEL SOFTWARE ENGINEER
                              │
          ┌───────────────────┴───────────────────┐
          │                                       │
       FRONTEND                                BACKEND
          │                                       │
    JavaScript                                Node.js
          │                                       │
    TypeScript                                Express
          │                                       │
       React                                   REST API
          │                                       │
        Vite                                 PostgreSQL
          │                                       │
    Tailwind CSS                              Redis
          │                                       │
      shadcn/ui                              Testing
          │                                       │
          └───────────────────┬───────────────────┘
                              │
                    SOFTWARE ENGINEERING
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
      API Design         System Design         Security
          │                   │                   │
        Testing             Cache            Observability
          │                   │                   │
          └───────────────────┬───────────────────┘
                              │
                         PRODUCTION
                              │
                  Docker → AWS → Terraform
                              │
                           CI/CD
```

# Roadmap Baru

## Phase 1 — JavaScript Fundamentals

Pelajari:

* Variables
* Data types
* Operators
* Conditions
* Loops
* Functions
* Scope
* Closures
* Arrays
* Objects
* Value vs reference
* Error handling
* Modules

**Target:** mampu membuat program JavaScript tanpa framework.

---

## Phase 2 — Modern JavaScript

Fokus:

* Arrow functions
* Destructuring
* Spread/rest
* Template literals
* `map`
* `filter`
* `find`
* `reduce`
* `some/every`
* `Set`
* `Map`
* Optional chaining
* Nullish coalescing
* Higher-order functions
* Closures
* ES Modules

---

## Phase 3 — Async JavaScript

Ini sangat penting karena Node.js sangat bergantung pada asynchronous programming.

Pelajari:

```text
Call Stack
    ↓
Event Loop
    ↓
Promise
    ↓
async/await
    ↓
I/O
```

Materi:

* Event loop
* Call stack
* Callback
* Promise
* `async/await`
* `try/catch`
* `Promise.all`
* `Promise.allSettled`
* `Promise.race`
* `fetch`
* JSON

---

# Phase 4 — TypeScript

### Fundamental

* Primitive types
* Arrays
* Objects
* Functions
* Type aliases
* Interfaces
* Union
* Intersection
* Literal types
* Optional properties
* Generics

### Advanced

* Type narrowing
* Type guards
* `keyof`
* `typeof`
* Utility types
* Conditional types
* Mapped types
* Discriminated unions
* Function overloads
* `infer`
* Declaration files
* Module system
* `tsconfig`

Target:

```text
TypeScript
    ↓
Type-safe frontend
    +
Type-safe backend
```

---

# Phase 5 — Web Fundamentals

### HTML

* Semantic HTML
* Forms
* Accessibility

### CSS

* Box model
* Flexbox
* Grid
* Positioning
* Responsive design
* CSS variables

### Browser

* DOM
* Events
* Cookies
* LocalStorage
* Session
* DevTools
* Network debugging

---

# Phase 6 — HTTP

Sebelum masuk Express, pahami HTTP terlebih dahulu.

```text
Client
  │
  │ HTTP Request
  ▼
Server
  │
  │ HTTP Response
  ▼
Client
```

Pelajari:

* HTTP methods
* Status codes
* Headers
* Body
* Content-Type
* JSON
* Cookies
* Sessions
* Query parameters
* Path parameters
* HTTPS
* CORS

Contoh:

```http
GET /api/users?page=1&limit=20
```

---

# Phase 7 — API Design

Pelajari bagaimana mendesain API yang baik.

### REST

```text
GET    /users
GET    /users/:id
POST   /users
PATCH  /users/:id
DELETE /users/:id
```

Pelajari:

* Resource design
* Endpoint naming
* HTTP status codes
* Request validation
* Response structure
* Error handling
* Pagination
* Filtering
* Sorting
* Searching
* API versioning
* Idempotency
* Rate limiting
* API documentation
* OpenAPI

Contoh response:

```json
{
  "data": {
    "id": 1,
    "name": "Aza"
  },
  "meta": {
    "requestId": "..."
  }
}
```

---

# Phase 8 — Node.js

Sekarang masuk backend.

Pelajari Node.js tanpa langsung bergantung kepada Express.

Materi:

* Node runtime
* npm
* package.json
* Modules
* ESM/CommonJS
* `fs`
* `path`
* `http`
* `events`
* `stream`
* `buffer`
* Environment variables
* Process
* Error handling
* Event loop
* Worker threads — pahami konsepnya

Yang paling penting:

> Pahami apa yang Node.js lakukan sebelum Express menyembunyikan detailnya.

---

# Phase 9 — Express

Sekarang Express.

```text
Client
   ↓
Express
   ↓
Middleware
   ↓
Router
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
PostgreSQL
```

Pelajari:

* Express application
* Routing
* Router
* Middleware
* Request
* Response
* Error middleware
* Async handlers
* Authentication middleware
* Authorization middleware
* Validation middleware

---

# Phase 10 — Backend Architecture

Jangan membuat semua logic di `routes`.

Gunakan:

```text
src/
├── config/
├── routes/
├── controllers/
├── services/
├── repositories/
├── middlewares/
├── schemas/
├── types/
├── utils/
└── app.ts
```

Flow:

```text
HTTP Request
      ↓
    Router
      ↓
   Controller
      ↓
    Service
      ↓
  Repository
      ↓
  PostgreSQL
```

### Responsibility

**Controller**

Menangani HTTP.

**Service**

Business logic.

**Repository**

Database access.

Ini sangat penting untuk project yang mulai besar.

---

# Phase 11 — PostgreSQL & SQL

Jangan langsung mengandalkan ORM.

Pelajari SQL:

* SELECT
* INSERT
* UPDATE
* DELETE
* JOIN
* GROUP BY
* HAVING
* Subquery
* CTE
* Window functions

PostgreSQL:

* Primary key
* Foreign key
* Constraints
* Unique
* Composite index
* Partial index
* Transactions
* Isolation levels
* Locks
* Connection pooling

Dan terutama:

```sql
EXPLAIN ANALYZE
```

Target:

> Bisa mengetahui kenapa query lambat.

---

# Phase 12 — ORM / Database Layer

Setelah SQL kuat, baru gunakan ORM/query builder.

Untuk stack Node.js + TypeScript, saya akan memilih **Drizzle ORM** sebagai jalur utama jika tujuanmu adalah memahami SQL dan tetap mendapatkan type safety.

```text
Express
   ↓
Service
   ↓
Repository
   ↓
Drizzle
   ↓
PostgreSQL
```

Pelajari:

* Schema
* Relations
* Queries
* Transactions
* Migrations
* Type inference
* Raw SQL
* Query optimization

Tidak perlu mempelajari Prisma dan Drizzle sekaligus.

---

# Phase 13 — Authentication

Pelajari:

```text
Register
   ↓
Password hashing
   ↓
Login
   ↓
Session / Token
   ↓
Authenticated Request
```

Materi:

* Password hashing
* Cookies
* Sessions
* JWT
* Access token
* Refresh token
* OAuth2
* OpenID Connect
* Google OAuth

---

# Phase 14 — Authorization

Authentication ≠ Authorization.

Pelajari:

### RBAC

```text
ADMIN
 ├── create
 ├── update
 ├── delete
 └── publish

USER
 ├── read
 └── bookmark
```

Kemudian:

* Permissions
* Resource ownership
* Role hierarchy
* Middleware authorization

---

# Phase 15 — React

### Fundamental

* Components
* JSX
* Props
* State
* Events
* Conditional rendering
* Lists
* Forms
* Controlled components
* Composition

### Hooks

* `useState`
* `useEffect`
* `useRef`
* `useMemo`
* `useCallback`
* Custom hooks

---

# Phase 16 — React Advanced

Pelajari:

* Context
* State management
* Server state
* Data fetching
* Loading state
* Error state
* Optimistic updates
* Pagination
* Infinite scroll
* Protected routes
* Lazy loading
* Code splitting
* React performance

Arsitektur:

```text
Pages
  ↓
Features
  ↓
Components
  ↓
Hooks
  ↓
API Client
  ↓
Express API
```

---

# Phase 17 — Vite

Frontend build tooling:

* Vite
* Environment variables
* Build
* Production build
* Code splitting
* Dynamic imports
* Aliases
* Asset handling

---

# Phase 18 — Tailwind CSS

Pelajari:

* Utility classes
* Responsive design
* Flex
* Grid
* Spacing
* Typography
* Colors
* Borders
* Shadows
* Positioning
* State variants
* Dark mode
* CSS variables
* Design tokens

Target:

> Bisa membuat UI tanpa bergantung pada template.

---

# Phase 19 — shadcn/ui

Pelajari component ecosystem:

* Button
* Input
* Form
* Dialog
* Sheet
* Dropdown
* Select
* Combobox
* Tabs
* Card
* Table
* DataTable
* Pagination
* Calendar
* DatePicker
* Toast/Sonner
* Skeleton
* Sidebar
* Command

Fokusnya bukan menghafal komponen.

Tetapi:

```text
shadcn
   ↓
Composition
   ↓
Reusable Components
   ↓
Design System
```

---

# Phase 20 — Frontend ↔ Backend

Sekarang satukan:

```text
React
  │
  │ HTTP
  ▼
Express
  │
  ▼
Drizzle
  │
  ▼
PostgreSQL
```

Pelajari:

* API client
* Authentication
* Authorization
* Form submission
* Validation
* Error handling
* Loading state
* Optimistic updates
* Pagination
* Search
* Filtering

---

# Phase 21 — Validation & Error Handling

Gunakan schema validation library seperti **Zod**.

Flow:

```text
Request
   ↓
Zod validation
   ↓
Controller
   ↓
Service
   ↓
Database
```

Pelajari:

* Request validation
* Response validation
* Schema reuse
* Error types
* Centralized error handling
* HTTP error mapping

---

# Phase 22 — Testing

### Backend

* Unit testing
* Integration testing
* API testing
* Database testing
* Mocking
* Test fixtures

### Frontend

* Component testing
* Integration testing
* User interaction testing

### E2E

```text
Browser
 ↓
React
 ↓
Express
 ↓
PostgreSQL
```

Test seluruh flow.

---

# Phase 23 — Security

Wajib memahami:

* HTTPS
* CORS
* CSRF
* XSS
* SQL injection
* Input validation
* Authentication
* Authorization
* Password hashing
* Rate limiting
* Secure cookies
* Security headers
* Secrets
* OWASP Top 10

---

# Phase 24 — Redis & Caching

Setelah database dan API sudah kuat.

```text
React
 ↓
Express
 ↓
Redis
 ↓
PostgreSQL
```

Pelajari:

* Cache hit
* Cache miss
* TTL
* Cache invalidation
* Cache-aside
* Read-through
* Write-through
* Cache key
* Eviction

Kemudian masalah production:

* Cache stampede
* Cache penetration
* Cache avalanche

---

# Phase 25 — Background Jobs & Queue

Jangan semua pekerjaan dilakukan dalam HTTP request.

Contoh:

```text
User
 ↓
POST /reports
 ↓
Express
 ↓
Queue
 ↓
Worker
 ↓
Generate Report
 ↓
S3
```

Pelajari:

* Queue
* Worker
* Retry
* Dead-letter queue
* Idempotency
* Background jobs
* Event-driven architecture

Di AWS nantinya gunakan:

* SQS
* EventBridge
* SNS

---

# Phase 26 — System Design

Mulai berpikir sebagai engineer, bukan hanya programmer.

Pelajari:

### Scalability

* Vertical scaling
* Horizontal scaling
* Load balancing
* CDN
* Caching

### Database

* Indexing
* Read replicas
* Partitioning
* Sharding
* Connection pooling

### Architecture

* Monolith
* Modular monolith
* Microservices
* Event-driven architecture

### Reliability

* Timeout
* Retry
* Exponential backoff
* Circuit breaker
* Rate limiting
* Fault tolerance

---

# Phase 27 — Observability

Production application harus bisa di-debug.

Pelajari:

```text
Logs
Metrics
Traces
```

Contoh:

```text
Request
  ↓
requestId
  ↓
Express
  ↓
Service
  ↓
PostgreSQL
```

Monitor:

* Latency
* Error rate
* Throughput
* CPU
* Memory
* DB performance

---

# Phase 28 — Docker

Containerize:

```text
React
 ↓
Nginx

Express
 ↓
Node.js

PostgreSQL
 ↓
Container
```

Pelajari:

* Dockerfile
* Image
* Container
* Layer
* Volume
* Network
* Environment
* Multi-stage build
* Docker Compose
* Container security

---

# Phase 29 — AWS

Prioritas:

### Compute

* EC2
* ECS
* Fargate
* Lambda

### Networking

* VPC
* Subnet
* Route table
* Internet Gateway
* NAT Gateway
* Security Group
* ALB

### Storage

* S3
* EBS

### Database

* RDS PostgreSQL
* Aurora PostgreSQL
* ElastiCache Redis

### Application

* API Gateway
* CloudFront
* Route 53

### Messaging

* SQS
* SNS
* EventBridge

### Operations

* CloudWatch
* Secrets Manager
* IAM

---

# Phase 30 — Terraform

Infrastructure as Code:

```text
Terraform
    ↓
AWS
    ↓
Production Infrastructure
```

Pelajari:

* Providers
* Resources
* Variables
* Outputs
* Data sources
* Modules
* State
* Remote state
* Backend
* IAM
* VPC
* RDS
* ECS
* ALB
* S3

---

# Phase 31 — CI/CD

Gunakan GitHub Actions.

```text
Git Push
   ↓
Lint
   ↓
Test
   ↓
Build
   ↓
Docker Build
   ↓
Push ECR
   ↓
Deploy AWS
   ↓
Health Check
```

Pelajari:

* Git
* GitHub
* GitHub Actions
* Environment
* Secrets
* Docker registry
* Database migration
* Rollback
* Deployment strategy

---

# Phase 32 — Software Engineering

Ini sangat penting untuk target **mid-level**.

Pelajari:

### Git

* Branching
* Merge
* Rebase
* Cherry-pick
* Revert
* Conflict resolution

### Code Quality

* Clean Code
* SOLID
* DRY
* KISS
* YAGNI
* Separation of concerns
* Refactoring

### Engineering

* Requirement analysis
* Technical design
* Trade-off
* Code review
* Documentation
* Debugging
* Technical debt
* Incident analysis

---

# Project Roadmap

Daripada membuat banyak project kecil, saya sarankan **6 project bertingkat**.

### Project 1 — Frontend

```text
React
TypeScript
Vite
Tailwind
shadcn/ui
```

Fokus:

* Component
* State
* Forms
* Routing
* Responsive UI
* API consumption

---

### Project 2 — Backend

```text
Node.js
Express
TypeScript
PostgreSQL
Drizzle
```

Fokus:

* REST API
* CRUD
* SQL
* Architecture
* Validation
* Testing

---

### Project 3 — Full Stack

```text
React
      ↓
Express
      ↓
Drizzle
      ↓
PostgreSQL
```

Tambahkan:

* Authentication
* Authorization
* Search
* Filtering
* Pagination
* Admin panel

---

### Project 4 — Production-like App

```text
React
   ↓
Express
   ↓
Redis
   ↓
PostgreSQL
```

Tambahkan:

* Cache
* Rate limiting
* Background jobs
* Logging
* Error tracking
* Tests

---

### Project 5 — Distributed System

```text
                    ┌── Redis
                    │
React → Express API ┼── PostgreSQL
                    │
                    └── SQS
                         ↓
                       Worker
```

Pelajari:

* Async processing
* Queue
* Retry
* Worker
* Idempotency
* Event-driven architecture

---

### Project 6 — Production AWS

```text
                    CloudFront
                        │
                        ▼
                       S3
                        │
                     React
                        
Client
   │
   ▼
  ALB
   │
   ▼
ECS/Fargate
   │
   ├── Express
   │
   ├── Redis
   │
   └── RDS PostgreSQL
```

Infrastructure:

```text
Terraform
     ↓
AWS
```

CI/CD:

```text
GitHub
   ↓
GitHub Actions
   ↓
ECR
   ↓
ECS
```

---

## Jadi stack final kamu

| Area              | Teknologi                                         |
| ----------------- | ------------------------------------------------- |
| Language Frontend | JavaScript                                        |
| Language          | TypeScript                                        |
| Frontend          | React                                             |
| Build Tool        | Vite                                              |
| CSS               | Tailwind CSS                                      |
| UI                | shadcn/ui                                         |
| Runtime Backend   | Node.js                                           |
| Backend Framework | Express                                           |
| API               | REST                                              |
| Validation        | Zod                                               |
| Database          | PostgreSQL                                        |
| Database Layer    | Drizzle                                           |
| Cache             | Redis                                             |
| Queue             | AWS SQS                                           |
| Testing           | Vitest / testing tools + API/E2E testing          |
| Container         | Docker                                            |
| Cloud             | AWS                                               |
| IaC               | Terraform                                         |
| CI/CD             | GitHub Actions                                    |
| Architecture      | Monolith → Modular Monolith → Distributed Systems |

**Perubahan terpenting dari roadmap sebelumnya:** Go, `net/http`, dan concurrency Go dikeluarkan dari jalur utama. Energi belajar dialihkan ke **Node.js internals → Express → API architecture → PostgreSQL → React → testing → caching → system design → AWS**, karena itu lebih langsung konsisten dengan stack yang sekarang kamu pilih.

Untuk target **mid-level**, saya juga tidak akan memaksa kamu mempelajari NestJS, Fastify, Next.js, Prisma, Drizzle *dan* ORM lain sekaligus. Satu stack yang dikuasai secara mendalam lebih bernilai daripada lima framework yang hanya pernah disentuh.
