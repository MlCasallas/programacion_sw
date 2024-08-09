import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from '../servicios/consumo-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Asegúrate de importar HttpClientModule aquí
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css'],
  providers: [ConsumoApiService] // Solo proporciona el servicio aquí
})
export class ListaTareasComponent implements OnInit {
  tareas: any[] = [];

  constructor(private servicioApi: ConsumoApiService) {}

  ngOnInit(): void {
    this.getListadoTareas();
  }

  getListadoTareas() {
    this.servicioApi.getListadoTareas().subscribe(datos => {
      this.tareas = datos;
    });
  }
}
