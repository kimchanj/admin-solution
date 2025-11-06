// setup-root.mjs
import fs from "fs";

const files = {
  ".gitignore": `# Node
node_modules/
.next/
out/
npm-debug.log*
yarn-error.log
pnpm-lock.yaml

# .NET / Visual Studio
bin/
obj/
*.user
*.suo
*.userosscache
*.sln.docstates
.vs/

# Build artifacts
dist/
build/

# OS
.DS_Store
Thumbs.db

# Prisma / SQLite
**/prisma/dev.db
**/prisma/dev.db-journal
**/*.db
**/*.db-journal
`,

  ".editorconfig": `root = true
[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2

[*.cs]
indent_size = 4
`,

  "README.md": `# admin-solution (Monorepo)

- dotnet-admin : ASP.NET Core MVC + Identity (SQLite)
- web-admin    : Next.js (App Router + NextAuth + Prisma)
- ai-tools     : 코드/문서/테스트 자동화 스텁

## Quick Start
1. cd dotnet-admin → dotnet run
2. cd web-admin → npm run dev
3. cd ai-tools → node codegen-readme.mjs
`
};

// 파일 생성
for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(name, content);
  console.log(`✅ Created ${name}`);
}

console.log("\n✨ Root setup complete!");
