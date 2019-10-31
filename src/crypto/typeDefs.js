export const cryptoTypeDef = `

type Crypto {
    user: String!
    date: String!
    created: String!
    key: String!
}
input FilterInput {
    adate: String!
    bdate: String!
}
input CryptoInput {
    user: String!
    date: String!
    created: String!
    key: String!
}`;

export const cryptoQueries = `
    allCryptos: [Crypto]!
    cryptosbyDate(dates: FilterInput!): [Crypto]!
`;

export const cryptoMutations = `
    createCrypto(crypto: CryptoInput!): Crypto!
`;
