import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadosService } from './empleados.service';
import { TituloComponent } from './titulo/titulo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';



@NgModule({
  declarations: [
    TituloComponent,
    FormularioComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TituloComponent,
    FormularioComponent,
    TablaComponent
  ],
  providers: [
    EmpleadosService
  ]
})
export class EmpleadosModule { }
