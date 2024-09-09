import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


//! Este es el punto de entrada de la aplicación Angular. Aquí se importan los módulos y componentes necesarios para arrancar la aplicación.(Es el primero en cargar)
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
