export const appointmentTypeDef = `
type schedule {
    id: String
    patient: String
    date: String
    doctor: String
    specialism: String
    code: String
    available: Boolean
}
input aScheduleInput {
    id: String!
    patient: String!
    date: String!
    doctor: String!
    specialism: String!
    code: String!
    available: Boolean!
}`;

export const appointmentQueries = `
    allschedules: [schedule]!
    availableSchedules: [schedule]!
    scheduleById(id: String!): schedule!
    scheduleByPatient(patient: String!): [schedule]!
`;

export const appointmentMutations = `
    assignSchedule(id: String!, patient: String!): schedule
    createSchedule(sch: aScheduleInput!): schedule!
    updateSchedule(id: String!, sch: aScheduleInput!): schedule!
    deleteSchedule(id: String!): Int!
`;
