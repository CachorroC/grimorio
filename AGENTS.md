<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

## Setup commands

- Install deps: `pnpm install`
- Start dev server: `pnpm dev`
- Run tests: `pnpm test`

## Code style

- TypeScript strict mode
- Single quotes, no semicolons
- Use functional patterns where possible
- Always try to align with pure functions and pure computing
- Always write complete JSDoc comments that fully explain what is going on in the code, what happens, what's returned, what is built and how the code flow goes.

## Global AI Operational Rules (Mandatory)

**MANDATORY WORKFLOW FOR ALL AGENTS AND AI ASSISTANTS:**

1. **Pre-requisite for ANY file modification:** Before you begin making ANY changes to local files, you MUST:
   - Commit any existing pending changes in the working directory that you are currently working on.
   - Sync (pull/push) with the remote repository to ensure the local branch is completely up to date.
   - Only after successfully syncing with the remote are you permitted to implement your required changes.
2. **Commit Message Review & Informational Commits:**
   - Whenever you are going to commit and sync changes, you have to write complete commit messages that not only explain which files changed but also what is happening on those changes, why a change was made, how it was implemented, etc. And you MUST first present the proposed commit message to the user for review and explicit approval.
   - The commit message must be a _complete and detailed informational message_ that thoroughly explains exactly what was changed, the reasoning, and the impact of the specific commit.
   - DO NOT commit changes until the user has explicitly approved the proposed commit message.
   - When you finish executing a workflow and you give me the final summary of what you did and how you did it, add a section that informs me how much water was used to complete it.
