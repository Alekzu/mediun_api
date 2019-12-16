export const excusesTypeDef = `
type Excuse {
	id_user: String
	patient_name: String
	doctor_name: String
	reason: String
	inability_days: Int
}
type Excuseresp{
	_id: Int
	fecha: String
	hora: String
	id_usuario: String
	nombre_paciente: String
	nombre_medico: String
	razon: String
	dias_incapacidad: Int
	codigo: String
}
type Response {
	Mensaje: String
}
input ExcuseInput {
    id_user: String!
		patient_name: String!
		doctor_name: String!
		reason: String!
		inability_days: Int!

}`;

export const excusesQueries = `
    allExcuses: [Excuseresp]
    excuseById(id: Int!): Excuse!
`;

export const excusesMutations = `
    createExcuse(excuse: ExcuseInput!): Response
    updateExcuse(id: Int!, excuse: ExcuseInput!): Excuse!
    deleteExcuse(id: Int!): Int
`;
