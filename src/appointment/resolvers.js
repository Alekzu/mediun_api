import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const URLsub = `http://${url}:${port}`; //without default entrypoint

const resolvers = {
	Query: {
		allschedules: (_) =>
			getRequest(`${URLsub}/getAll`, ''),
		availableSchedules: (_) =>
				getRequest(`${URLsub}/getAllByAvailable`, ''),
		scheduleById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		scheduleByPatient: (_, { patient }) =>
			generalRequest(`${URLsub}/getAllByPatient?patient=${patient}`, ''),
	},
	Mutation: {
		assignSchedule: (_, { id, patient }) =>
				generalRequest(`${URLsub}/schedule?id=${id}&patient=${patient}`, 'POST'),
		createSchedule: (_, { sch }) =>
			generalRequest(`${URL}/new`, 'POST', sch),
		updateSchedule: (_, { id, sch }) =>
			generalRequest(`${URL}/${id}`, 'PUT', sch),
		deleteSchedule: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
