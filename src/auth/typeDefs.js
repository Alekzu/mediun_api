export const authTypeDef = `
type AuthUser {
    name: String!
    email: String!
    password: String!
}
input AuthUserInput {
    name: String!
    email: String!
    password: String!
}`;

export const authQueries = `
    allAuthUsers: [AuthUser]!
`;

export const authMutations = `
    createAuth(user: AuthUserInput!): AuthUser!
    updateAuth(id: Int!, user: AuthUserInput!): AuthUser!
    deleteAuth(id: Int!): Int
`;
