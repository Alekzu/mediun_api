import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allschedules: (_) =>
			getRequest(URL, ''),
		//userById: (_, { id }) =>
		//	generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createSchedule: (_, { sch }) =>
			generalRequest(`${URL}/new`, 'POST', sch),
		updateSchedule: (_, { id, sch }) =>
			generalRequest(`${URL}/${id}`, 'PUT', sch),
		deleteSchedule: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
