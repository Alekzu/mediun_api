import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allschedules: (_) =>
			getRequest(URL, ''),
		scheduleById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createSchedule: (_, { schedule }) =>
			generalRequest(`${URL}/new`, 'POST', schedule),
		updateSchedule: (_, { id, sch }) =>
			generalRequest(`${URL}/${id}`, 'PUT', schedule),
		deleteSchedule: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
