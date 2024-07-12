import { createId } from '@paralleldrive/cuid2'
import { json, pgTable, varchar } from 'drizzle-orm/pg-core'

export const quizzes = pgTable('quizzes', {
  id: varchar('id', { length: 128 })
    .$defaultFn(() => createId())
    .primaryKey(),
  quiz: json('quiz'),
})
