import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { MateriasComponent } from './materias/materias.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'alumnos', component:AlumnosComponent},
    {path:'materias', component:MateriasComponent},
    {path:'Calificaciones', component:CalificacionesComponent},
];
