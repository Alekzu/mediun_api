export const authTypeDef = `
type User {
    name: String!
    email: String!
    password: String!
}
input UserInput {
    name: String!
    email: String!
    password: String!
}`;

export const authQueries = `
    allAuthUsers: [User]!
`;

export const authMutations = `
    createAuth(user: UserInput!): User!
    updateAuth(id: Int!, user: UserInput!): User!
    deleteAuth(id: Int!): Int
`;
