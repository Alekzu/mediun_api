export const cryptoTypeDef = `
type Confirm {
    user: String!
    date: Date!
    created: Date!
    key: String!
}
type ConfirmInput {
    user: String!
    date: Date!
    created: Date!
    key: String!
}`;

export const cryptoQueries = `
    allConfirm: [Confirm]!
`;

export const cryptoMutations = `
    createConfirm(confirm: ConfirmInput!): User!
`;
