export const confirmationTypeDef = `
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

export const confirmationQueries = `
    allUsers: [User]!
`;

export const confirmationMutations = `
    createUser(user: UserInput!): User!
`;
