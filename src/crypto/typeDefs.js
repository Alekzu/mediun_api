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
    allCrypto: [Confirm]!
`;

export const cryptoMutations = `
    createCrypto(confirm: ConfirmInput!): Confirm!
`;
