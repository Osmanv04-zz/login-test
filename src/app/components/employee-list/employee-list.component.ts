import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Employees } from '../../const/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees: any[] = []
  dataSource: any;
  constructor(
    public router: Router,

  ) { }

  ngOnInit(): void {
    this.employees = Employees
    this.employees = _.sortBy(this.employees, ['employee', 'lastName']);
    this.dataSource = new MatTableDataSource(this.employees)    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  logout(){
    localStorage.setItem('isLogged','0')
    this.router.navigate([''])
  }

}
