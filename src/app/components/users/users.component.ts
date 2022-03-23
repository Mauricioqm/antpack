import { Component, OnInit } from '@angular/core';
import { ReadService } from 'src/app/services/read.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  public page!: number;
  pages: number = 1;

  constructor(
    private rs: ReadService 
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.rs.obtenerUsuarios().subscribe(usuarios => {
      this.users = usuarios;
      console.log(this.users);
    }, error => {
      console.log(error);
      
    })
  }


  // obtenerEmpleados() {
  //   this.es.obtenerEmpleados().subscribe(empleados => {
  //     this.empleados = empleados.emp;
  //     console.log(this.empleados);
  //   }, error => {
  //     console.log(error);
  //   })
  // }

}
