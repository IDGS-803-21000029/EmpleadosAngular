import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nuevo : IEmpleado = {
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    sexo: ''
  }

  constructor(private empleadosService: EmpleadosService) { }

  agregarEmpleado() {
    if (this.nuevo.nombre && this.nuevo.correo && this.nuevo.telefono && this.nuevo.fechaNacimiento && this.nuevo.sexo) {
      const nuevoEmpleado: IEmpleado = {
        nombre: this.nuevo.nombre,
        correo: this.nuevo.correo,
        telefono: this.nuevo.telefono,
        fechaNacimiento: this.nuevo.fechaNacimiento,
        sexo: this.nuevo.sexo
      };

      this.empleadosService.addEmpleado(nuevoEmpleado);

      // Limpiar el formulario
      this.nuevo.nombre = '';
      this.nuevo.correo = '';
      this.nuevo.telefono = '';
      this.nuevo.fechaNacimiento = '';
      this.nuevo.sexo = 'Masculino';
    }
  }


}
