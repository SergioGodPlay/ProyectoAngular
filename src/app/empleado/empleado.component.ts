import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aqui iria un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Sergio";

  apellido = "Sanchez";

  edad = 27;

  empresa = "Sony Interactive Entertainment";

  /*getEdad(){

    return this.edad;

  }*/


  constructor() { }

  ngOnInit(): void {
  }

}
