# dragonhack-2022
to start dev database: `docker-compose up -d pg`

to run backend in development mode: `npm run dev`

to run frontend in development mode: `cd frontend && npm start`

to build frontend: `cd frontend && npm run build`

frontend is build into `frontend/build`, which is served by the express using `express.static` in `app.ts`.