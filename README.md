# The Art of Music

The Art of Music is a React and Vite website that can be hosted as a static site. The frontend does not require a Base44 account or backend.

## Run locally

Requirements: Node.js 20.19 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Deploy to Vercel

1. Import this GitHub repository into Vercel.
2. Select the **Vite** framework preset and use the repository root as the root directory.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy. No Base44 credentials or environment variables are required.

## How saved interactions work

Guestbook entries, poll votes, feedback, and contact drafts are stored in the visitor's browser using `localStorage`. They remain on that browser/device and are not shared with other visitors or sent to the project team. Clearing browser site data removes them.
