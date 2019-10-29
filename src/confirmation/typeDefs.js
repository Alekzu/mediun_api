export const confirmationTypeDef = `
type Confirmation {
    confirmationId: Int!
    appointmentId: String!
    show: Int!
    patienceId: String!
    doctorId: String!
}
input ConfirmationInput {
    appointmentId: String!
    show: Int!
    patienceId: String!
    doctorId: String!
}`;

export const confirmationQueries = `
    allUsers: [Confirmation]!
    userById(id: Int!): Confirmation!
`;

export const confirmationMutations = `
    createConfirmation(Confirmation: ConfirmationInput!): Confirmation!
    updateConfirmation(id: Int!, Confirmation: ConfirmationInput!): Confirmation!
    deleteConfirmation(id: Int!): Int!
`;
