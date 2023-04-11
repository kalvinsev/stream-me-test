import './env';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import createSchema from '../schema';
import createSession from '../session';

const port = process.env.PORT || 4000;

async function createServer() {
  try {
    // 1. create mongoose connection
    await createSession();
    // 2. create express server
    const app = express();

    app.use(
      cors({
        origin: ['http://localhost:3000/', 'http://localhost:4000/graphql'],
        credentials: true,
      })
    );

    // allow JSON requests
    app.use(express.json());

    const schema = await createSchema();

    // 3. create GraphQL server
    const apolloServer = new ApolloServer({
      schema,
      context: ({ req, res }) => ({ req, res }),
      introspection: true,
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    // start the server
    app.listen({ port }, () => {
      console.log(
        `🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
      );
    });
  } catch (err) {
    console.log(err);
  }
}

createServer();