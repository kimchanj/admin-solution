# Shared Domain Models

## 1. User
- **id**: string (GUID / UUID)
- **email**: string
- **passwordHash**: string
- **name**: string
- **role**: string (default: user)
- **createdAt**: DateTime
- **updatedAt**: DateTime

## 2. Post
- **id**: string (GUID / UUID)
- **title**: string
- **content**: string
- **authorId**: string (FK → User)
- **createdAt**: DateTime
- **updatedAt**: DateTime

## 3. Comment
- **id**: string (GUID / UUID)
- **postId**: string (FK → Post)
- **authorId**: string (FK → User)
- **content**: string
- **createdAt**: DateTime

---

### Relationships



### Notes
- 이 스키마는 모든 스택(.NET / Next.js / AI-tools)에서 공통 기준으로 사용됨.
- 각 기술의 ORM (EF Core, Prisma, SQLAlchemy 등)은 이 정의를 기준으로 매핑한다.
