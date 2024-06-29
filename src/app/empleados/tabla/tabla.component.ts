import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  empleados: IEmpleado[] = [];

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.empleados = this.empleadosService.getEmpleados();
  }

  eliminarEmpleado(index: number) {
    this.empleadosService.deleteEmpleado(index);
    this.empleados = this.empleadosService.getEmpleados();
  }
}
