import { getDB, type VueQuizDB } from '~/db/db'

let db: VueQuizDB

declare module 'h3' {
  interface H3EventContext {
    db: VueQuizDB
  }
}

export default eventHandler((event) => {
  if (!db) {
    const config = useRuntimeConfig(event)
    db = getDB(config.database.url).db
  }

  event.context.db = db
})
