import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiInformacionRoutingModule } from './mi-informacion-routing.module';
import { MiInformacionComponent } from './mi-informacion.component';



@NgModule({
  declarations: [
    MiInformacionComponent
  ],
  imports: [
    CommonModule,
    MiInformacionRoutingModule,
  
  ]
})
export class MiInformacionModule { 

}
