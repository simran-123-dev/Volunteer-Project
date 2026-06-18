# NayePankh Foundation

A full-stack volunteer management system for the NayePankh Foundation.

## Project structure

- `client/`: React + Vite frontend
- `server/`: Express + MongoDB backend

## Quick start

1. Install dependencies
   - `cd client && npm install`
   - `cd server && npm install`

2. Configure environment
   - Create `server/.env` with:
     - `MONGO_URI=mongodb://127.0.0.1:27017/nayepankh`
     - `PORT=5000`

3. Start the backend
   - `cd server && npm run dev`

4. Start the frontend
   - `cd client && npm run dev`

## API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/volunteers`
- `GET /api/volunteers/:id`
- `PUT /api/volunteers/:id`
- `DELETE /api/volunteers/:id`
- `POST /api/contact`
- `GET /api/events`
- `GET /api/events/:id`
- `POST /api/events`
- `PUT /api/events/:id`
- `DELETE /api/events/:id`
