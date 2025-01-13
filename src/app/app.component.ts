import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './services/employee.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeemodalComponent } from './components/employeemodal/employeemodal.component';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, EmployeemodalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public employeeService: EmployeeService) { }
  @ViewChild(EmployeemodalComponent) employeeModal!: EmployeemodalComponent;
}