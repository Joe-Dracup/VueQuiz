import { eq } from 'drizzle-orm'
import { quizzes } from '~/db/schema'

export default defineEventHandler(async (event) => {
  const id = await getRouterParam(event, 'id')

  const match = await event.context.db
    .select()
    .from(quizzes)
    .where(eq(quizzes.id, id!))

  return match.length > 0
    ? match[0].quiz
    : setResponseStatus(event, 404, 'Quiz Not Found')
})
