import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';


const URL = `http://${url}:${port}/${entryPoint}`;


const resolvers = {
	Query: {
		allCryptos: (_) =>
			generalRequest(`${URL}`, 'GET'),
		cryptosbyDate: (_, { dates }) =>
			generalRequest(`${URL}/{id:[0-9]+}`, 'GET', dates),
	},
	Mutation: {
		createCrypto: (_, { crypto }) =>
			generalRequest(`${URL}`, 'POST', crypto),
		//updateUser: (_, { id, user }) =>
		//	generalRequest(`${URL}/${id}`, 'PUT', user),
		//deleteUser: (_, { id }) =>
		//	generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
