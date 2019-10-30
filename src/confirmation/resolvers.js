import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allConfirmation: (_) =>
			getRequest(URL, ''),
		confirmationById: (_, { id }) =>
			generalRequest(`userById?id=${id}`, 'GET'),
	},
	Mutation: {
		createConfirmation: (_, { confirmation }) =>
			generalRequest(`${URL}`, 'POST', confirmation),
		updateConfirmation: (_, { id, confirmation }) =>
			generalRequest(`${URL}/${id}`, 'PUT', confirmation),
		deleteConfirmation: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
