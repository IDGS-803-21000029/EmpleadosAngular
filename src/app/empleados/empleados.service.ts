import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private empleados: IEmpleado[] = [
    {
      nombre: 'Andres',
      correo: 'andres@gmail.com',
      telefono: '4771234567',
      fechaNacimiento: '01/05/2005',
      sexo: 'Masculino'
    },
    {
      nombre: 'Carlos',
      correo: 'carlos@hotmail.com',
      telefono: '4778956231',
      fechaNacimiento: '15/01/2002',
      sexo: 'Masculino'
    }
  ];    

  constructor() { }

  getEmpleados(): IEmpleado[] {
    return this.empleados;
  }

  addEmpleado(empleado: IEmpleado): void {
    this.empleados.push(empleado);
  }

  deleteEmpleado(index: number): void {
    this.empleados.splice(index, 1);
  }

}
