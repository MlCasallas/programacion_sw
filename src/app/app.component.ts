import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaTareasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Nota: Cambié `styleUrl` a `styleUrls` ya que es el nombre correcto
})
export class AppComponent {
  title = 'Milton y Nestor';
}
