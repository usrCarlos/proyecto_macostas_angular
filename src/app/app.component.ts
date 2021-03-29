import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appAngular';

  lista:string[]=[];

  async ngOnInit(){

    const  respuesta = await fetch('http://localhost:8080/listarmascotas')
    const respuesta2= await respuesta.json();
    this.lista=respuesta2
    console.log(this.lista)

}
}