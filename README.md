# The Art of Music

The Art of Music is a React and Vite website hosted as a static site on Vercel. Supabase provides shared storage for Community posts, poll votes, and visitor feedback.

## Run locally

Requirements: Node.js 20.19 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

To enable Supabase locally, create an ignored `.env.local` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

Use the project URL and publishable key from Supabase. Never put the database password or a secret/service-role key in the frontend or in a `VITE_` variable.

## Deploy to Vercel

1. Import this GitHub repository into Vercel.
2. Select the **Vite** framework preset and use the repository root as the root directory.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. In **Project Settings → Environment Variables**, add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` for the environments you deploy (Production, Preview, and Development as needed).
5. Redeploy so the new values are included in the frontend build.

## How saved interactions work

Community posts, poll votes, and visitor feedback are stored in Supabase and shared across visitors. Community wall comments appear immediately; creative verses are pending review until approved in the Supabase Table Editor (`community_posts`). When enabling this behavior on an existing Supabase project, run [`supabase/community-auto-approve-comments.sql`](./supabase/community-auto-approve-comments.sql) in the Supabase SQL Editor to update the insert policy. Poll results are shared, while the one-vote indicator is stored per browser and is not strong identity-based vote enforcement. Feedback is insert-only from the website and can be reviewed in the Supabase Table Editor (`community_feedback`). Contact drafts remain stored only in the visitor's browser and are not delivered to the team.
