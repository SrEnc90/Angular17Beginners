import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gamesinline',
  standalone: true,
  imports: [],
  //! forma antigua usando el *ngFor
  // template: `
  //   <ul>
  //     <li *ngFor="let game of games">
  //       {{game.name}}
  //   </ul>
  // `,
  //! Forma nueva usando la directiva @for
  template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)" >{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesinlineComponent {
  @Input() username = ""; //! con el decorador @Input() le estoy diciendo a Angular que este atributo lo voy a recibir desde fuera (del padre al hijo) (desde el padre: user.component.ts)
  @Output() addFavoriteEvent = new EventEmitter<string>(); //! con el decorador @Output() le estoy diciendo a Angular que este atributo lo voy a emitir del hijo al padre (user.component.ts)

  fav(gameName: string) {
    // alert(`A ${this.username} le gusta jugar ${gameName}`);
    this.addFavoriteEvent.emit(gameName);

    //! con el @Input de padre a hijo
    //! Con el @Output de hijo a padre
  }

  games = [
    {
      id: 1,
      name: "Uncharted 4",
    },
    {
      id: 2,
      name: "The Last of Us Part II",
    },
    {
      id: 3,
      name: "God of War",
    },
    {
      id: 4,
      name: "Spiderman",
    }    
  ]
}
