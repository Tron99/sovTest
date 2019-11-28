const { ApolloServer, gql } = require("apollo-server");
const PORT = process.env.PORT || 4000
import chucknorris from './ChuckNorris';

const typeDef = gql(chucknorris.typeDefs);
const resolvers =  chucknorris.resolvers;

const server = new ApolloServer({
    typeDefs: [typeDef],
    resolvers: [resolvers],
});

server.listen(PORT, () => {
  console.log(`🚀  Server ready at ${PORT}`);
});