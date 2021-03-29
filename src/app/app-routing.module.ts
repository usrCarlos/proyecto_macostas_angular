import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { AdoptarMascotaComponent } from './views/adoptar-mascota/adoptar-mascota.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { HomeComponent } from './views/home/home.component';
import { QuienesSomosComponent } from './views/quienes-somos/quienes-somos.component';

const routes: Routes = [
  {path: 'home', component:  HomeComponent},
  {path: 'adoptar-mascota', component: AdoptarMascotaComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
