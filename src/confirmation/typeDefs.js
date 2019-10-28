export const usersTypeDef = `
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

export const usersQueries = `
    allUsers: [User]!
`;

export const usersMutations = `
    createUser(user: UserInput!): User!
`;
