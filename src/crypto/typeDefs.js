export const cryptoTypeDef = `

scalar Date

type MyType {
   created: Date
}


type Crypto {
    user: String!
    date: Date!
    created: Date!
    key: String!
}
input FilterInput {
    adate: Date!
    bdate: Date!
}
input CryptoInput {
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
