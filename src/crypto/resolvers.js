import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';


const URL = `http://${url}:${port}/${entryPoint}`;


const resolvers = {
	Query: {
		allCryptos: (_) =>
			generalRequest(`${URL}`, 'GET'),
	},
	Mutation: {
		createCrypto: (_, { crypto }) =>
			generalRequest(`${URL}`, 'POST', crypto),
		cryptosbyDate: (_, { filter }) =>
			generalRequest(`${URL}/filter`, 'POST', filter),
		//updateUser: (_, { id, user }) =>
		//	generalRequest(`${URL}/${id}`, 'PUT', user),
		//deleteUser: (_, { id }) =>
		//	generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
