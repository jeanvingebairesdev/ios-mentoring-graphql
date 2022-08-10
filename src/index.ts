// index.ts
import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import { resolvers } from "@generated/type-graphql";
import * as tq from 'type-graphql';

const prisma = new PrismaClient()

const app = async () => {
  // const schema = await tq.buildSchema({ resolvers })

  const schema = await tq.buildSchema({
  resolvers: resolvers,
  // automatically create `schema.gql` file with schema definition
  // in project's working directory
  emitSchemaFile: true,
  // or create the file with schema in selected path
  // emitSchemaFile: path.resolve(__dirname, "snapshots/schema", "schema.gql"),
})

  // const schema = await tq.buildSchema({ resolvers: [ListCrudResolver, MovieCrudResolver] })

  const context = () => {
    return {
      prisma
    }
  }

  new ApolloServer({ schema, context }).listen({ port: 4000 }, () =>
    console.log('🚀 Server ready at: http://localhost:4000')
  )
}

app()
