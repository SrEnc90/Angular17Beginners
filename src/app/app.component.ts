import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from "./comments/comments.component";

//! Este es el componente raíz de la aplicación Angular. Aquí se define la estructura de la aplicación y se importan los componentes necesarios para arrancar la aplicación.(Es el componente que envuelve a los demás componentes)
@Component({
  selector: 'app-root', //! Este es el selector que se usará para insertar el componente en el DOM.
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommentsComponent], //! Estoy importando el componente UserComponent, lo estoy renderizando en el template con <app-user/>
  //! templateUrl: './app.component.html', //! Este es el archivo HTML que se usará para renderizar el componente. Recurso externo
  //! Recurso en línea
  // template: ` 
  //   <h1>Hola mundo desde {{city.toUpperCase()}}</h1>
  //   <app-user />
  // `,
  //! Recurso aparte
  templateUrl: './app.component.html',
  //! Estilos en línea
  // styles: `
  // h1 {
  //   text-align: center;
  //   }
  //   `
  styleUrl: './app.component.css' //! Este es el archivo CSS que se usará para estilizar el componente. Recurso externo
})
export class AppComponent {
  city = 'Barcelona';
}
