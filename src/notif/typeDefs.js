export const notifTypeDef = `
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

export const notifQueries = `
    allNotif: [User]!
`;

export const notifMutations = `
    createNotif(user: UserInput!): User!
`;
