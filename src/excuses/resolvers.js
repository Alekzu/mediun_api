import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allExcuses: (_) =>
			//getRequest(URL, ''),
			//getRequest(`${URL}`, ''),
			generalRequest(`${URL}`, 'GET'),//use this
	},
	Mutation: {
		createExcuse: (_, { excuse }) =>
			generalRequest(`${URL}`, 'POST', excuse),
		updateExcuse: (_, { id, excuse }) =>
		generalRequest(`${URL}/${id}`, 'PUT', excuse),
		deleteExcuse: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
