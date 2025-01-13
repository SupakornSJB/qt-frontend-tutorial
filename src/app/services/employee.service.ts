import { Injectable } from '@angular/core';
import { CreateEmployeeDTO, Employee } from '../interfaces/employee';
import * as uuid from "uuid";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: Employee[] = [];

  constructor() {
    this.employeeList = [];
    for (let i = 0; i < 5; i++) {
      this.employeeList.push(
        {
          id: this.generateId(),
          name: "Tawan",
          email: "Tawan@email.com",
          phoneNumber: "0000000000",
          jobTitle: "Noob"
        },
      );
    }
  }

  private generateId(): string {
    return uuid.v4();
  }

  createUser(user: CreateEmployeeDTO) {
    this.employeeList.push({ id: this.generateId(), ...user });
  }

  editUser(user: Employee) {
    const indexToUpdate = this.employeeList.findIndex((em) => em.id === user.id);
    if (indexToUpdate === -1) return;
    this.employeeList[indexToUpdate] = user;
  }

  deleteUser(userId: string) {
    const deleteIndex = this.employeeList.findIndex((em) => em.id === userId);
    if (deleteIndex === -1) return;
    this.employeeList.splice(deleteIndex, 1);
  }
}