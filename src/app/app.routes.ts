import { Routes } from '@angular/router';
import { CuerpoComponent } from './ejemplo/cuerpo/cuerpo.component';
import { HeaderComponent } from './ejemplo/header/header.component';
import { FooterComponent } from './ejemplo/footer/footer.component';

export const routes: Routes = [
    {path:'',component:CuerpoComponent},
    {path:'',component:HeaderComponent},
    {path:'',component:FooterComponent}
];
