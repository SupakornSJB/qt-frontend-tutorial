import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeemodal',
  imports: [CommonModule, FormsModule],
  templateUrl: './employeemodal.component.html',
  styleUrl: './employeemodal.component.scss'
})
export class EmployeemodalComponent {
  modalService = inject(NgbModal);
  @ViewChild("modalTemplate") content!: TemplateRef<any>

  id: string = "";
  name: string = "";
  email: string = "";
  phoneNumber: string = "";
  jobTitle: string = "";
  isEdit: boolean = false;
  title: string = "";

  constructor(private employeeService: EmployeeService) { }

  open(){
    this.isEdit = false;
    this.title = "Create Employee";
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' });
    this.name = "";
    this.email = "";
    this.phoneNumber = "";
    this.jobTitle = "";
  }

  openEdit(employee: Employee) {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' });
    this.title = "Edit Employee";
    this.isEdit = true;
    this.id = employee.id;
    this.name = employee.name;
    this.email = employee.email;
    this.phoneNumber = employee.phoneNumber;
    this.jobTitle = employee.jobTitle;
  }

  submitCreate() {
    this.modalService.dismissAll();
    this.employeeService.createUser({ 
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      jobTitle: this.jobTitle
    })
   }

  submitEdit() {
    this.modalService.dismissAll();
    this.employeeService.editUser({ 
      id: this.id,
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      jobTitle: this.jobTitle
    })
   }
}
