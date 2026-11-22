# NestJS Learning Journey

This repository documents my ongoing journey learning **NestJS**, the ideas behind its architecture, and the backend engineering concepts used to build maintainable server-side applications.

The goal is to learn by combining notes, small experiments, and practical projects—not just to copy examples. This is a personal, evolving study guide; it is not official NestJS documentation.

## Learning path

I am working through the topics in stages:

1. **NestJS foundations** — application structure, modules, controllers, providers, and dependency injection.
2. **The request lifecycle** — middleware, guards, interceptors, pipes, exception filters, and custom decorators.
3. **Building APIs** — REST endpoints, route and query parameters, request bodies, DTOs, validation, and response codes.
4. **Backend fundamentals** — configuration, persistence, authentication and authorization, error handling, logging, and testing.
5. **Architecture and quality** — separating responsibilities, managing dependencies, writing testable code, and applying patterns where they help.
6. **Practical projects** — apply each concept, record what worked, and revisit gaps in the backlog.

Progress and topics to revisit are tracked in [BACKLOG.md](./BACKLOG.md).

## Architecture and design patterns

NestJS gives structure to common backend patterns and architectural ideas:

- **Dependency injection and inversion of control (IoC):** classes declare what they depend on, and Nest's container provides those dependencies. This reduces tight coupling and makes components easier to test.
- **Modular architecture:** modules group related controllers and providers, making application boundaries and dependencies explicit.
- **Layered responsibility:** controllers handle the HTTP boundary, while providers/services hold reusable application logic. Data access can be separated behind its own provider or repository when appropriate.
- **Decorator- and metadata-based configuration:** decorators such as `@Controller()`, `@Get()`, and `@Injectable()` attach metadata that Nest uses to assemble the application.
- **Request pipeline:** middleware, guards, interceptors, pipes, and exception filters each handle a distinct part of request processing.
- **Provider patterns:** Nest supports class, value, factory, and existing-provider forms to control how dependencies are created and shared.

These are tools, not rules to apply mechanically. I will focus on understanding the problem each pattern solves and choosing the simplest design that fits.

## Backend concepts to understand

Alongside NestJS APIs, this repository will build familiarity with:

- HTTP methods, status codes, headers, and request/response lifecycles
- REST resource design and API contracts
- Input validation, serialization, and error responses
- Databases, persistence, and data-access boundaries
- Authentication, authorization, and secure configuration
- Unit and end-to-end testing
- Logging, observability, and deployment basics

## Projects

The project folders are hands-on exercises that apply the concepts as they are learned:

- [nestjs-project/](./nestjs-project/) — NestJS fundamentals and framework experiments
- [note-api/](./note-api/) — a notes API project
- [todo-api/](./todo-api/) — a task-management API project
- [booking-system/](./booking-system/) — a booking-system project

Each project may have its own README with setup and implementation details.

## Backlog and notes

- [BACKLOG.md](./BACKLOG.md) — learning progress, topics to study, and concepts to revisit

As the journey grows, this section can link to focused notes on modules, providers, request lifecycle, validation, persistence, and other topics.

## Learning sources

I use these resources together: video walkthroughs for guided practice, the official docs for authoritative framework behavior, and written articles for alternate explanations.

- [JavaScript Mastery — NestJS tutorial](https://www.youtube.com/watch?v=Q6NpiIp-6WM)
- [Official NestJS documentation](https://docs.nestjs.com/)
- [GeeksforGeeks — NestJS articles](https://www.geeksforgeeks.org/?s=NestJS)

When sources differ, the official NestJS documentation is the reference for framework APIs and current behavior.