export const appointmentTypeDef = `
type User {
    name: String!
    email: String!
    date: String!
}
input UserInput {
    name: String!
    email: String!
    date: String!
}`;

export const appointmentQueries = `
    allUsers: [User]!
`;

export const appointmentMutations = `
    createUser(user: UserInput!): User!
`;
