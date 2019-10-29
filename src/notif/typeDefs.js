export const notifTypeDef = `
type NotifUser {
    name: String!
    email: String!
    date: String!
}
input NotifUserInput {
    name: String!
    email: String!
    date: String!
}`;

export const notifQueries = `
    allNotif: NotifUser!
    notifById(id: Int!): NotifUser!
`;

export const notifMutations = `
    createNotif(user: NotifUserInput!): NotifUser!
`;
