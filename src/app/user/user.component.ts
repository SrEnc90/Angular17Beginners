import { Component } from '@angular/core';
import { GamesinlineComponent } from '../gamesinline/gamesinline.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesinlineComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'midudev';
  isLoggedIn = false;
  favGame = ''; //! para que el hijo pueda emitir el evento al padre necesito un atributo que reciba el evento

  getFavoriteGame(gameName: string) {
    this.favGame = gameName;
  }

  greet() {
    alert('Hola !!!!');
  }

  //! para crear un componente puedo hacer ng g c games.
  //! si necesitas ayuda para saber que atributos le puedes colocar a un componente puedes hacer ng g c games --help
  //! para simular que es lo va a ocurrir cuándo cree el componente usar --dry-run: ng g c games -d
  //! para no crear el archivo test usar --skipTests: ng g c games -d --skipTests
  //! ng g c gamesinline --skip-tests --inline-style --inline-template generar un componente con el template y el style en línea
}
