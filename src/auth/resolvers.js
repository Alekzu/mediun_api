import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allAuthUsers: (_) =>
			getRequest(URL, ''),
		//userAuthById: (_, { id }) =>
		//	generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createAuth: (_, { user }) =>
			generalRequest(`${URL}`, 'POST', user),
		updateAuth: (_, { id, user }) =>
			generalRequest(`${URL}/${id}`, 'PUT', user),
		deleteAuth: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
