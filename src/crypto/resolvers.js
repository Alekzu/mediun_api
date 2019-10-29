import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';
//for date
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

const URL = `http://${url}:${port}/${entryPoint}`;
//for date
const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),//enn date
}
const resolvers = {
	Query: {
		allCryptos: (_) =>
			generalRequest(`${URL}/crypto`, 'GET'),
		cryptosbyDate: (_, { dates }) =>
			generalRequest(`${URL}/crypto/{id:[0-9]+}`, 'GET', dates),
	},
	Mutation: {
		createCrypto: (_, { crypto }) =>
			generalRequest(`${URL}/crypto`, 'POST', crypto),
		//updateUser: (_, { id, user }) =>
		//	generalRequest(`${URL}/${id}`, 'PUT', user),
		//deleteUser: (_, { id }) =>
		//	generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
