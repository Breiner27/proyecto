import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./ejemplo/header/header.component";
import { NavComponent } from "./ejemplo/nav/nav.component";
import { CuerpoComponent } from "./ejemplo/cuerpo/cuerpo.component";
import { FooterComponent } from "./ejemplo/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, CuerpoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Curso Angular';
}
