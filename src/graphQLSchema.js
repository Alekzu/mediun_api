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
// authentication/auth
mport {
    sessionsMutations,
    sessionQueries,
    sessionsTypeDef
} from './authentication/auth/authtypeDef';

// authentication/users
import {
	userTypeDef,
	userQueries
} from './authentication/user/usertypeDef';
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

import cryptoResolvers from './crypto/resolvers';
import confirmationResolvers from './confirmation/resolvers';
import authResolvers from './authentication/auth/authresolvers';
import userResolvers from './authentication/user/userresolvers';
import notifResolvers from './notif/resolvers';
import appointmentResolvers from './appointment/resolvers';
import excusesResolvers from './excuses/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		cryptoTypeDef,
		confirmationTypeDef,
		sessionsTypeDef,
		userTypeDef,
		notifTypeDef,
		appointmentTypeDef,
		excusesTypeDef,
		usersTypeDef,
	],
	[
		cryptoQueries,
		confirmationQueries,
		sessionQueries,
		userQueries,
		notifQueries,
		appointmentQueries,
		excusesQueries,
	],
	[
		cryptoMutations,
		confirmationMutations,
		sessionsMutations,
		notifMutations,
		appointmentMutations,
		excusesMutations,
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
		userResolvers,
		notifResolvers,
		appointmentResolvers,
		excusesResolvers,
		usersResolvers,
	)
});
