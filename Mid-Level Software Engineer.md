**Mid-Level Software Engineer**, roadmap sebaiknya tidak terlalu berorientasi “belajar semua teknologi”, tetapi membangun kemampuan yang membuat kamu bisa **mendesain, mengimplementasikan, menguji, debug, deploy, dan maintain aplikasi production**.

Dengan stack yang sudah kamu pilih, saya akan jadikan:

> **Frontend:** JavaScript → TypeScript → React → Vite → Tailwind CSS → shadcn/ui  
> **Backend:** Go  
> **Database:** PostgreSQL  
> **Infrastructure:** Docker → AWS → Terraform → CI/CD  
> **Engineering:** API Design → Testing → Security → Caching → System Design → Observability

## Roadmap Mid-Level Software Engineer

### Phase 1 — Programming Fundamentals

**JavaScript**

Pelajari:

- Variables & data types
    
- Operators
    
- Conditionals
    
- Loops
    
- Functions
    
- Scope
    
- Closures
    
- Arrays
    
- Objects
    
- Destructuring
    
- Error handling
    
- Value vs reference
    
- Immutability
    
- Modules
    

**Target:** mampu membuat program tanpa bergantung pada framework.

---

### Phase 2 — Modern JavaScript

- `map`
    
- `filter`
    
- `reduce`
    
- `find`
    
- `some/every`
    
- `Set`
    
- `Map`
    
- Spread/rest
    
- Optional chaining
    
- Nullish coalescing
    
- Higher-order functions
    
- Closures
    
- ES Modules
    

Lalu masuk ke:

**Async JavaScript**

- Event loop
    
- Call stack
    
- Promise
    
- `async/await`
    
- `try/catch`
    
- `Promise.all`
    
- `Promise.allSettled`
    
- `Promise.race`
    
- `fetch`
    
- JSON
    

**Target:** memahami asynchronous programming, bukan sekadar menghafal syntax.

---

# Phase 3 — TypeScript

### Fundamental

- Primitive types
    
- Arrays
    
- Objects
    
- Functions
    
- Type aliases
    
- Interfaces
    
- Union
    
- Intersection
    
- Literal types
    
- Optional properties
    
- Enums — pahami, tetapi jangan terlalu bergantung
    
- Generics
    

### Advanced

- Type narrowing
    
- Type guards
    
- `keyof`
    
- `typeof`
    
- `infer`
    
- Utility types
    
- Conditional types
    
- Mapped types
    
- Template literal types
    
- Discriminated unions
    
- Function overloads
    
- Declaration files
    

### Yang sangat penting untuk mid-level

Belajar membuat **type-safe architecture**:

```text
API Response
      ↓
TypeScript Types
      ↓
API Client
      ↓
React
      ↓
Components
```

Bukan sekadar:

```ts
const user: any = ...
```

---

# Phase 4 — Web Fundamentals

Sebelum React terlalu jauh:

### HTML

- Semantic HTML
    
- Forms
    
- Accessibility
    
- SEO basics
    

### CSS

- Box model
    
- Positioning
    
- Flexbox
    
- Grid
    
- Responsive design
    
- Media queries
    
- CSS variables
    

### Browser

- DOM
    
- Events
    
- LocalStorage
    
- Cookies
    
- Session
    
- DevTools
    
- Network tab
    
- Performance tab
    

**Target:** mampu melakukan debugging browser tanpa bergantung pada React.

---

# Phase 5 — HTTP & Web API

Ini salah satu phase yang sangat penting untuk Software Engineer.

Pelajari:

```text
HTTP
├── Request
│   ├── Method
│   ├── URL
│   ├── Headers
│   └── Body
│
└── Response
    ├── Status Code
    ├── Headers
    └── Body
```

Pahami:

- GET
    
- POST
    
- PUT
    
- PATCH
    
- DELETE
    
- HTTP status codes
    
- Headers
    
- Cookies
    
- Sessions
    
- JSON
    
- Content-Type
    
- CORS
    
- HTTPS
    
- Query parameters
    
- Path parameters
    

Kemudian:

### REST API

- Resource design
    
- Endpoint design
    
- Pagination
    
- Filtering
    
- Sorting
    
- Searching
    
- Validation
    
- Error response
    
- API versioning
    
- Idempotency
    
- Rate limiting
    

Contoh:

```http
GET /api/v1/users?page=1&limit=20
```

---

# Phase 6 — React

### React Fundamentals

- Components
    
- JSX
    
- Props
    
- State
    
- Events
    
- Conditional rendering
    
- Lists
    
- Forms
    
- Controlled components
    
- Composition
    

### Hooks

- `useState`
    
- `useEffect`
    
- `useRef`
    
- `useMemo`
    
- `useCallback`
    
- Custom hooks
    

### React Architecture

Mulai belajar:

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
Backend
```

Bukan semua logic dimasukkan ke component.

---

# Phase 7 — Vite

Gunakan Vite sebagai frontend build tool.

Pelajari:

- Vite project structure
    
- Environment variables
    
- Build
    
- Development server
    
- Production build
    
- Code splitting
    
- Dynamic imports
    
- Aliases
    
- Asset handling
    

Struktur:

```text
src/
├── components/
├── features/
├── pages/
├── layouts/
├── hooks/
├── lib/
├── services/
├── types/
└── main.tsx
```

---

# Phase 8 — Tailwind CSS

Fokus bukan menghafalkan class.

Pahami:

- Utility-first
    
- Responsive design
    
- Flex
    
- Grid
    
- Spacing
    
- Typography
    
- Colors
    
- Borders
    
- Shadows
    
- Positioning
    
- State variants
    
- Dark mode
    
- CSS variables
    
- Design tokens
    
- Component composition
    

Kemudian belajar membangun layout tanpa bergantung pada template.

---

# Phase 9 — shadcn/ui

Gunakan shadcn sebagai **component foundation**, bukan sebagai pengganti pemahaman UI.

Pelajari:

- Button
    
- Input
    
- Form
    
- Dialog
    
- Sheet
    
- Dropdown
    
- Select
    
- Combobox
    
- Tabs
    
- Table
    
- Data table
    
- Pagination
    
- Calendar
    
- Date picker
    
- Toast/Sonner
    
- Skeleton
    
- Sidebar
    
- Command
    

Yang lebih penting:

```text
shadcn
   ↓
Composition
   ↓
Design System
   ↓
Reusable Components
```

---

# Phase 10 — Go Fundamentals

Ini akan menjadi fokus backend utama.

### Basic

- Variables
    
- Constants
    
- Types
    
- Struct
    
- Array
    
- Slice
    
- Map
    
- Pointer
    
- Function
    
- Multiple return
    
- Error
    
- Package
    
- Module
    
- Export
    
- `defer`
    

### Intermediate

- Methods
    
- Interfaces
    
- Composition
    
- Embedding
    
- Generics
    
- Error wrapping
    
- Custom errors
    

---

# Phase 11 — Go Concurrency

Ini penting karena Go sangat kuat di concurrency.

Pelajari:

```text
Goroutine
   ↓
Channel
   ↓
Select
   ↓
Context
   ↓
Cancellation
   ↓
Timeout
```

Kemudian:

- `sync.Mutex`
    
- `sync.RWMutex`
    
- `sync.WaitGroup`
    
- Race conditions
    
- Worker pools
    
- Fan-in
    
- Fan-out
    
- Pipeline
    
- Graceful shutdown
    

Targetnya bukan sekadar:

```go
go doSomething()
```

tetapi memahami **concurrency model dan failure modes**.

---

# Phase 12 — Go HTTP Backend

Mulai dari standard library.

```text
Go
 ↓
net/http
 ↓
Handler
 ↓
Middleware
 ↓
REST API
```

Pelajari:

- `http.Server`
    
- `http.Handler`
    
- `ServeMux`
    
- Request
    
- Response
    
- Middleware
    
- JSON
    
- HTTP client
    
- Context
    
- Timeout
    
- Graceful shutdown
    

Baru setelah memahami ini, framework/router tambahan boleh dipelajari.

---

# Phase 13 — Backend Architecture

Bangun struktur:

```text
HTTP
 │
 ▼
Handler
 │
 ▼
Service
 │
 ▼
Repository
 │
 ▼
PostgreSQL
```

Contoh:

```text
internal/
├── handler/
├── service/
├── repository/
├── middleware/
├── model/
├── config/
└── database/
```

Pelajari:

- Separation of concerns
    
- Dependency injection
    
- Repository pattern
    
- Service layer
    
- Configuration
    
- Error handling
    
- Logging
    
- Validation
    
- Graceful shutdown
    
- Health check
    
- Readiness check
    

---

# Phase 14 — SQL & PostgreSQL

Jangan langsung bergantung pada ORM.

Pelajari SQL secara serius.

### SQL

- SELECT
    
- INSERT
    
- UPDATE
    
- DELETE
    
- JOIN
    
- GROUP BY
    
- HAVING
    
- Subquery
    
- CTE
    
- Window functions
    

### PostgreSQL

- Primary key
    
- Foreign key
    
- Constraints
    
- Unique
    
- Composite indexes
    
- Partial indexes
    
- Transactions
    
- Isolation levels
    
- Locks
    
- Connection pooling
    

Kemudian:

```sql
EXPLAIN ANALYZE
```

Harus menjadi sesuatu yang familiar.

---

# Phase 15 — Go + PostgreSQL

Gunakan:

```text
Go
 ↓
database/sql
 ↓
PostgreSQL driver
 ↓
PostgreSQL
```

Pelajari:

- `Query`
    
- `QueryRow`
    
- `Exec`
    
- `Scan`
    
- Transactions
    
- Prepared statements
    
- `QueryContext`
    
- Connection pooling
    
- Migration
    
- SQL injection prevention
    

Target:

> Bisa memahami query yang dijalankan aplikasi dan mengoptimalkannya.

---

# Phase 16 — Authentication & Authorization

Pelajari secara serius:

### Authentication

```text
User
 ↓
Login
 ↓
Credential verification
 ↓
Session / Token
 ↓
Authenticated request
```

Pelajari:

- Password hashing
    
- Sessions
    
- Cookies
    
- JWT
    
- Refresh token
    
- Access token
    
- OAuth2
    
- OpenID Connect
    
- Google OAuth
    

### Authorization

- RBAC
    
- Permissions
    
- Resource ownership
    

Contoh:

```text
Admin
 ├── create
 ├── update
 ├── delete
 └── publish

User
 ├── read
 └── bookmark
```

---

# Phase 17 — Frontend ↔ Backend

Sekarang gabungkan:

```text
React
   │
   │ HTTP
   ▼
Go API
   │
   ▼
PostgreSQL
```

Pelajari:

- API client
    
- Authentication
    
- Token/session handling
    
- Loading state
    
- Error state
    
- Optimistic update
    
- Pagination
    
- Infinite scroll
    
- Form validation
    
- API error mapping
    

---

# Phase 18 — Testing

Ini yang membedakan tutorial project dengan software engineering.

### Backend

- Unit test
    
- Integration test
    
- HTTP test
    
- Database test
    
- `httptest`
    
- Test fixtures
    

### Frontend

- Component test
    
- Integration test
    
- User interaction test
    

### E2E

```text
Browser
 ↓
React
 ↓
Go API
 ↓
PostgreSQL
```

Test entire flow.

---

# Phase 19 — Security

Wajib memahami:

- HTTPS
    
- CORS
    
- CSRF
    
- XSS
    
- SQL injection
    
- Input validation
    
- Authentication
    
- Authorization
    
- Password hashing
    
- Rate limiting
    
- Secrets management
    
- Secure cookies
    
- Security headers
    
- OWASP Top 10
    

---

# Phase 20 — Caching

Baru setelah memahami database.

Pelajari:

```text
Client
  ↓
API
  ↓
Cache
  ↓
Database
```

Konsep:

- Cache hit
    
- Cache miss
    
- TTL
    
- Cache invalidation
    
- Cache-aside
    
- Read-through
    
- Write-through
    
- Write-behind
    
- Cache key design
    
- Eviction
    

Kemudian Redis:

```text
Go
 ↓
Redis
 ↓
PostgreSQL
```

Pahami juga:

- Cache stampede
    
- Cache penetration
    
- Cache avalanche
    

---

# Phase 21 — System Design

Ini mulai membawa kamu ke level mid-level.

Pelajari:

### Scalability

```text
Vertical Scaling
Horizontal Scaling
```

### Architecture

```text
Client
 ↓
CDN
 ↓
Load Balancer
 ↓
API Servers
 ↓
Cache
 ↓
Database
```

Kemudian:

- Reverse proxy
    
- Load balancing
    
- Read replica
    
- Database scaling
    
- Partitioning
    
- Sharding
    
- Queue
    
- Pub/Sub
    
- Async processing
    
- Event-driven architecture
    

---

# Phase 22 — Reliability

Pelajari:

- Timeout
    
- Retry
    
- Exponential backoff
    
- Circuit breaker
    
- Rate limiting
    
- Bulkhead
    
- Graceful degradation
    
- Health check
    
- Readiness
    
- Liveness
    
- Disaster recovery
    

Contoh:

```text
Frontend
   ↓
API
   ↓
Queue
   ↓
Worker
   ↓
Database
```

Tidak semua pekerjaan harus dilakukan synchronously dalam HTTP request.

---

# Phase 23 — Observability

Pelajari:

```text
Logs
Metrics
Traces
```

Kemudian:

- Structured logging
    
- Request ID
    
- Correlation ID
    
- Latency
    
- Error rate
    
- Throughput
    
- CPU
    
- Memory
    
- Database metrics
    
- Distributed tracing
    

Target:

> Ketika production error, kamu bisa mencari penyebabnya secara sistematis.

---

# Phase 24 — Docker

Pelajari:

- Image
    
- Container
    
- Dockerfile
    
- Layers
    
- Volumes
    
- Networks
    
- Environment variables
    
- Multi-stage build
    
- Docker Compose
    
- Container security
    

Target:

```text
React
 ↓
Docker

Go
 ↓
Docker

PostgreSQL
 ↓
Docker
```

---

# Phase 25 — AWS

Karena target kamu juga mengarah ke cloud engineering, AWS bisa menjadi production platform.

Prioritas:

### Core

- IAM
    
- VPC
    
- EC2
    
- Security Group
    
- Route 53
    
- S3
    
- CloudFront
    

### Application

- ALB
    
- ECS
    
- Fargate
    
- ECR
    
- Lambda
    
- API Gateway
    

### Database

- RDS PostgreSQL
    
- Aurora PostgreSQL
    
- ElastiCache
    

### Messaging

- SQS
    
- SNS
    
- EventBridge
    

### Operations

- CloudWatch
    
- Secrets Manager
    
- CloudTrail
    

---

# Phase 26 — Terraform

Infrastructure as Code:

```text
Terraform
    ↓
AWS
    ↓
Infrastructure
```

Pelajari:

- Provider
    
- Resource
    
- Variable
    
- Output
    
- Data source
    
- Module
    
- State
    
- Remote state
    
- Backend
    
- IAM
    
- VPC
    
- RDS
    
- ECS
    
- ALB
    
- S3
    

---

# Phase 27 — CI/CD

Gunakan GitHub Actions.

Pipeline:

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
Push Image
   ↓
Deploy
   ↓
Health Check
```

Kemudian:

- Environment
    
- Secrets
    
- Database migration
    
- Rollback
    
- Deployment strategy
    
- Blue/green deployment
    

---

# Phase 28 — Software Engineering Practices

Ini **wajib** kalau targetnya mid-level.

Pelajari:

### Git

- Branch
    
- Merge
    
- Rebase
    
- Cherry-pick
    
- Revert
    
- Conflict resolution
    

### Code Quality

- Clean code
    
- Naming
    
- Refactoring
    
- SOLID
    
- DRY
    
- KISS
    
- YAGNI
    
- Separation of concerns
    

### Engineering Process

- Requirement analysis
    
- Technical design
    
- Trade-off
    
- Code review
    
- Documentation
    
- Debugging
    
- Incident analysis
    
- Technical debt
    

---

# Phase 29 — Project Portfolio

Jangan membuat 20 project tutorial.

Lebih baik **5–7 project yang semakin kompleks**.

### Project 1 — React Dashboard

```text
React
TypeScript
Vite
Tailwind
shadcn
```

Fokus:

- Component architecture
    
- Forms
    
- State
    
- Routing
    
- Responsive UI
    

---

### Project 2 — Go REST API

```text
Go
PostgreSQL
REST
```

Fokus:

- HTTP
    
- CRUD
    
- SQL
    
- Repository
    
- Service
    
- Testing
    

---

### Project 3 — Full-Stack Application

```text
React
      ↓
Go REST API
      ↓
PostgreSQL
```

Tambahkan:

- Authentication
    
- Authorization
    
- Pagination
    
- Search
    
- Filtering
    
- Testing
    

---

### Project 4 — Production-like Application

Tambahkan:

```text
React
 ↓
Go API
 ↓
Redis
 ↓
PostgreSQL
```

Dengan:

- Cache
    
- Rate limiting
    
- Background jobs
    
- Logging
    
- Metrics
    

---

### Project 5 — Distributed Application

```text
                ┌── Redis
                │
React → Go API ─┼── PostgreSQL
                │
                └── Queue
                      ↓
                    Worker
```

Gunakan AWS SQS untuk queue.

---

### Project 6 — AWS Production Deployment

```text
                    CloudFront
                        │
                        ▼
                       S3
                        │
React ─────────────────┘

Client
   │
   ▼
ALB
   │
   ▼
ECS/Fargate
   │
   ├── Redis
   │
   └── RDS PostgreSQL
```

Provision dengan Terraform.

---

# Urutan Akhir yang Saya Rekomendasikan

Kalau disederhanakan:

```text
                    MID-LEVEL SOFTWARE ENGINEER
                              │
       ┌──────────────────────┴──────────────────────┐
       │                                             │
    FRONTEND                                      BACKEND
       │                                             │
 JavaScript                                        Go
       │                                             │
 TypeScript                                    net/http
       │                                             │
 React                                         REST API
       │                                             │
 Vite                                          Architecture
       │                                             │
 Tailwind                                      Concurrency
       │                                             │
 shadcn/ui                                     PostgreSQL
       │                                             │
 Frontend Architecture                              │
       │                                             │
       └──────────────────┬──────────────────────────┘
                          │
                    SOFTWARE ENGINEERING
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
      Testing          Security          API Design
        │                 │                 │
      Cache          Observability     System Design
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
                    PRODUCTION ENGINEERING
                          │
                Docker → AWS → Terraform
                          │
                       CI/CD
```

## Yang membedakan roadmap ini dari roadmap Junior

Untuk **Junior**, biasanya cukup:

> Bisa membuat aplikasi.

Untuk **Mid-Level**, targetnya:

> Bisa mengambil requirement → mendesain solusi → mengimplementasikan → mengetes → melakukan debugging → mengoptimalkan → deploy → memonitor → memperbaiki masalah production.

Jadi saya tidak akan menjadikan framework sebanyak mungkin sebagai target. **Go + standard library + PostgreSQL + React + TypeScript** sudah cukup kuat untuk membangun fondasi mid-level. Framework tambahan bisa dipelajari setelah kamu memahami problem yang ingin diselesaikan.

Dan karena kamu sebelumnya memilih **Vite**, saya akan mempertahankan Vite sebagai build tool frontend, bukan memasukkan Next.js ke roadmap.