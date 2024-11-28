import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./ejemplo/header/header.component";
import { NavComponent } from "./ejemplo/nav/nav.component";
import { CuerpoComponent } from "./ejemplo/cuerpo/cuerpo.component";
import { FooterComponent } from "./ejemplo/footer/footer.component";
import { IniciarsesionComponent } from "./beji/iniciarsesion/iniciarsesion.component";
import { PagPrincipalComponent } from "./beji/pag-principal/pag-principal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, CuerpoComponent, FooterComponent, IniciarsesionComponent, PagPrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Curso Angular';
}
