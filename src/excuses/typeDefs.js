export const excusesTypeDef = `
type Excuse {
	id: Int!
    code: Int!
    dias_incapacidad: Int!
    fecha: String!
    hora: String!
    nombre_medico: String!
    nombre_paciente: String!
    razon: String!
}
input ExcuseInput {
    id: Int!
    code: Int!
    dias_incapacidad: Int!
    fecha: String!
    hora: String!
    nombre_medico: String!
    nombre_paciente: String!
    razon: String!
}`;

export const excusesQueries = `
    allExcuses: [Excuse]!
`;

export const excusesMutations = `
    createExcuse(excuse: ExcuseInput!): Excuse!
`;
