# Netflix-like Carousel (React + Vite)

What you get:
- React + Vite project with a smooth, futuristic Netflix-like UX.
- Auto-advancing image carousel (5s per slide) with smooth fade/slide transitions.
- Drop your images into `src/assets/images/` (replace the sample SVGs) and run.

How to run:
1. Extract the zip.
2. In the project folder run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

Notes:
- The app uses `import.meta.globEager` to bundle images placed in `src/assets/images/`. Replace or add images there (png/jpg/jpeg/svg).
- It auto-plays every 5 seconds and pauses on hover. Use left/right arrow keys to navigate.
