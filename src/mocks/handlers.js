// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([{ id: 1,name: 'John',email: 'john@example.com' }])
  }),

  // http.get('/users', (req, res, ctx) => {
  //   return res(
  //     ctx.status(200),
  //     ctx.json([
  //       { id: 1, name: 'John Doe', email: 'john@example.com' },
  //       { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  //       // Add more mock users as needed
  //     ])
  //   )
  // }),

  // http.get('/users/:id', (req, res, ctx) => {
  //   const { id } = req.params
  //   return res(
  //     ctx.status(200),
  //     ctx.json({ id, name: `User ${id}`, email: `user${id}@example.com` })
  //   )
  // }),

  // Add more handlers as needed
]
