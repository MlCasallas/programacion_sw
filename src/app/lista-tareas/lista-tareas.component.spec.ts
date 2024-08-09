import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListaTareasComponent } from './lista-tareas.component';
import { ConsumoApiService } from '../servicios/consumo-api.service';

describe('ListaTareasComponent', () => {
  let component: ListaTareasComponent;
  let fixture: ComponentFixture<ListaTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Añadido HttpClientTestingModule
      declarations: [ListaTareasComponent],
      providers: [ConsumoApiService] // Añadido ConsumoApiService
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
