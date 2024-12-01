import { RouterModule, Routes } from '@angular/router';
import { IniciarsesionComponent } from './beji/iniciarsesion/iniciarsesion.component';
import { PagPrincipalComponent } from './beji/pag-principal/pag-principal.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
        { path: 'iniciarsesion', component: IniciarsesionComponent },
        { path: 'pag-principal', component: PagPrincipalComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
