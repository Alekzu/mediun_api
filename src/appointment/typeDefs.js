export const appointmentTypeDef = `
type aUser {
    name: String!
    email: String!
    date: String!
}
input aUserInput {
    name: String!
    email: String!
    date: String!
}`;

export const appointmentQueries = `
    allaUsers: [aUser]!
`;

export const appointmentMutations = `
    createaUser(user: aUserInput!): aUser!
`;
