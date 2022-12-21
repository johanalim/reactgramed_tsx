import express from "express"
import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql"

const app = express()

const books = [
{ id: 1, subtitle: "John Doe", title: "Data Quality Fundamentals" },
{ id: 2, subtitle: "Jane Doe", title: "Scaling Python with Ray Adventures in Cloud and Serverless Patterns" },
{ id: 3, subtitle: "Mike Doe", title: "Learning Google" },
]

const schema = buildSchema(`
    input UserInput {
        subtitle: String!
        title: String!
    }
    type User {
        id: Int!
        subtitle: String!
        title: String!
    }
    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: Int!, input: UserInput): User
    }
    type Query {
        getUser(id: String): User
        getUsers: [User]
    }
`)

type Book = {
id: number
subtitle: string
title: string
}

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)

const PORT = 8000

app.listen(PORT)
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`)