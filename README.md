# Interview Experience Mobile

A Vue 2 mobile web application for browsing, reading, liking, and collecting interview experience articles. The app uses Vant as its mobile UI library, Vue Router for page navigation, Axios for API access, and a 375px viewport conversion setup for mobile layouts.

## Features

- User registration and login
- Token-based route protection
- Interview article feed with recommended and latest sorting
- Infinite scrolling article lists
- Article detail pages
- Like and collect actions
- Personal liked and collected article lists
- User profile page with logout support
- Mobile-first UI built with Vant components

## Tech Stack

- Vue 2
- Vue CLI 5
- Vue Router 3
- Vant 2
- Axios
- Less
- postcss-px-to-viewport

## Project Structure

```text
src/
  api/              API request modules
  assets/           Static assets
  components/       Reusable Vue components
  router/           Application routes and auth guard
  utils/            Axios instance, token storage, and Vant setup
  views/            Page-level Vue components
```

## Getting Started

### Prerequisites

- Node.js
- npm

This project is based on Vue CLI 5. Use a Node.js version that is compatible with your local Vue CLI dependency set.

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run serve
```

The Vue CLI development server will print the local URL after it starts.

### Build for Production

```bash
npm run build
```

The production build is generated in the `dist/` directory.

### Lint Files

```bash
npm run lint
```

## Available Routes

| Route | Description |
| --- | --- |
| `/login` | User login page |
| `/register` | User registration page |
| `/article` | Main article feed |
| `/article/:id` | Article detail page |
| `/collect` | Collected articles |
| `/like` | Liked articles |
| `/user` | User profile page |

The app redirects `/` to `/article`. Routes other than `/login` and `/register` require a stored authentication token.

## API Configuration

API requests are configured in `src/utils/request.js`.

```js
baseURL: "http://interview-api-t.itheima.net/h5/"
```

The Axios instance automatically:

- Adds the stored token as a Bearer token in the `Authorization` header
- Returns `response.data` from successful responses
- Clears the token and redirects to `/login` on `401` responses
- Shows Vant toast messages for other API errors

## Mobile Layout

The project uses `postcss-px-to-viewport` with a 375px design width:

```js
viewportWidth: 375
```

Vant's primary theme color is customized in `vue.config.js`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run serve` | Start the local development server |
| `npm run build` | Build the app for production |
| `npm run lint` | Run ESLint and fix supported issues |

## Notes

- Authentication tokens are stored in `localStorage`.
- The article list currently starts from page `33`, matching the current implementation in `src/views/Article.vue`.
- The app uses lazy-loaded route components to reduce the initial bundle size.
