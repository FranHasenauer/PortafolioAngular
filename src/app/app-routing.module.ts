import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'skills', loadChildren: () => import('./components/skills/skills.module').then(m => m.SkillsModule) },
{ path: 'proyectos', loadChildren: () => import('./components/proyectos/proyectos.module').then(m => m.ProyectosModule) },
{ path: 'info', loadChildren: () => import('./components/mi-informacion/mi-informacion.module').then(m => m.MiInformacionModule) },









{path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
