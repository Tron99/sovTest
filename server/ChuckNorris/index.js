import { loadGQLFile } from '../utils/gqlLoader';
import { resolvers } from './chucknorris.resolvers';

export default {
  resolvers: resolvers,
  typeDefs: loadGQLFile('chucknorris.graphql')
}lstat