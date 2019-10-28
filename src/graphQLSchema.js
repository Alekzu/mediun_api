import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';
//crypto
import {
	cryptoMutations,
	cryptoQueries,
	cryptoTypeDef
} from './crypto/typeDefs';
//confirmation
import {
	confirmationMutations,
	confirmationQueries,
	confirmationTypeDef
} from './confirmation/typeDefs';
//auth
import {
	authMutations,
	authQueries,
	authTypeDef
} from './auth/typeDefs';
//notif
import {
	notifMutations,
	notifQueries,
	notifTypeDef
} from './notif/typeDefs';
//appointment
import {
	appointmentMutations,
	appointmentQueries,
	appointmentTypeDef
} from './appointment/typeDefs';
//excuses
import {
	excusesMutations,
	excusesQueries,
	excusesTypeDef
} from './excuses/typeDefs';
//users
import {
	usersMutations,
	usersQueries,
	usersTypeDef
} from './users/typeDefs';

import cryptoResolvers from './crypto/resolvers';
import confirmationResolvers from './confirmation/resolvers';
import authResolvers from './auth/resolvers';
import notifResolvers from './notif/resolvers';
import appointmentResolvers from './appointment/resolvers';
import excusesResolvers from './excuses/resolvers';
import usersResolvers from './users/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		cryptoTypeDef,
		confirmationTypeDef,
		authTypeDef,
		notifTypeDef,
		appointmentTypeDef,
		excusesTypeDef,
		usersTypeDef
	],
	[
		cryptoQueries,
		confirmationQueries,
		authQueries,
		notifQueries,
		appointmentQueries,
		excusesQueries,
		usersQueries
	],
	[
		cryptoMutations,
		confirmationMutations,
		authMutations,
		notifMutations,
		appointmentMutations,
		excusesMutations,
		usersMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		cryptoResolvers,
		confirmationResolvers,
		authResolvers,
		notifResolvers,
		appointmentResolvers,
		excusesResolvers,
		usersResolvers
	)
});
