export const appointmentTypeDef = `
type schedule {
    patient: String
    date: String
    doctor: String
    specialism: String
    code: String
    available: Boolean
}
input aScheduleInput {
    patient: String!
    date: String!
    doctor: String!
    specialism: String!
    code: String!
    available: Boolean!
}`;

export const appointmentQueries = `
    allschedules: [schedule]!
    scheduleById(id: String!): schedule!
    scheduleByPatient(id: String!): schedule!
`;

export const appointmentMutations = `
    createSchedule(sch: aScheduleInput!): schedule!
    updateSchedule(id: String!, sch: aScheduleInput!): schedule!
    deleteSchedule(id: String!): Int!
`;
