import { Component } from '@angular/core';
import { promise } from 'protractor';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  nombre: String = 'Paula';
  nombre2: String = 'Paula KateriNne cAmpoS caMPos';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  a: number = 0.234;

  salario: number = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 200,
    direccion: {  
      calle: "Primera",
      casa: 19
    }
  };
  valorDePromesa = new Promise( (resolve,reject)=>{
    setTimeout(()=> resolve("Llegó la data!"), 3500);
  });

  fecha = new Date();
}
