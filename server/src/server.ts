// static imports
import { ApolloServer } from 'apollo-server'
import { createContext } from './context'
import { schema } from './schema'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const server = new ApolloServer({
  schema,
  context: createContext,
})

server.listen().then(({ url }) =>
  console.log(
    `\
🚀 Server ready at: ${url}
⭐️ Hello Graphql`,
  ),
)
