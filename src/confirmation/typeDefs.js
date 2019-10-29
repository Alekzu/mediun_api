export const confirmationTypeDef = `
type cUser {
    name: String!
    email: String!
    date: String!
}
input cUserInput {
    name: String!
    email: String!
    date: String!
}`;

export const confirmationQueries = `
    allcUsers: [cUser]!
`;

export const confirmationMutations = `
    createcUser(user: cUserInput!): cUser!
`;
