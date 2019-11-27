const { ApolloServer, gql } = require("apollo-server");
// const books = require("./books");
const PORT = process.env.PORT || 4000

const typeDef = gql`
    type Book {
        title:String
    }

    type Query {
        books: [Book]
    }
`
    ;



const resolver = {
    Query: {
        books: () => [
            {
                title: 'Harry Dickson'
            }
        ]
    }
}


const server = new ApolloServer({
    typeDefs: [typeDef],
    resolvers: [resolver],
});

server.listen(PORT, () => {
    console.log(`🚀  Server ready at ${PORT}`);
});