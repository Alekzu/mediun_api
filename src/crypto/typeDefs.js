export const cryptoTypeDef = `
type Crypto {
    user: String!
    date: Date!
    created: Date!
    key: String!
}
type FilterInput {
    adate: Date!
    bdate: Date!
}
type CryptoInput {
    user: String!
    date: Date!
    created: Date!
    key: String!
}`;

export const cryptoQueries = `
    allCryptos: [Crypto]!
    cryptosbyDate(dates: FilterInput!): [Crypto]!
`;

export const cryptoMutations = `
    createCrypto(crypto: CryptoInput!): Crypto!
`;
