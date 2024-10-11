// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        // Add more mock users as needed
      ])
    )
  }),

  rest.get('/users/:id', (req, res, ctx) => {
    const { id } = req.params
    return res(
      ctx.status(200),
      ctx.json({ id, name: `User ${id}`, email: `user${id}@example.com` })
    )
  }),

  // Add more handlers as needed
]
