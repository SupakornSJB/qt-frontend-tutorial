export interface Employee {
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    jobTitle: string,
}

export interface CreateEmployeeDTO {
    name: string,
    email: string,
    phoneNumber: string,
    jobTitle: string,
}