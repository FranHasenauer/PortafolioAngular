import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiInformacionComponent } from './components/mi-informacion/mi-informacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ErrorPersonalizadoComponent } from './components/error-personalizado/error-personalizado.component';


const routes: Routes = [
{ path: 'skills', component:SkillsComponent},
{ path: 'proyectos', component:ProyectosComponent},
{ path: 'info', component:MiInformacionComponent },






{path: '', redirectTo: '', pathMatch: 'full'},
{ path: '**', component:ErrorPersonalizadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
