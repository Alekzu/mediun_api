export const cryptoTypeDef = `

type CryptoO {
    _id: String!
    usero: String!
    dateo: String!
    createdo: String!
    keyo: String!
}
input Filter {
    user: String!
    adate: String!
    bdate: String!
}
input Crypto {
    user: String!
    date: String!
}`;

export const cryptoQueries = `
    allCryptos: [CryptoO]!
`;

export const cryptoMutations = `
    createCrypto(crypto: Crypto!): [CryptoO]!
    cryptosbyDate(filter: Filter!): [CryptoO]!
`;
