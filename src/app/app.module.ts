import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewsComponent } from './views/views.component';
import { HomeComponent } from './views/home/home.component';
import { AdoptarMascotaComponent } from './views/adoptar-mascota/adoptar-mascota.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { QuienesSomosComponent } from './views/quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ViewsComponent,
    HomeComponent,
    AdoptarMascotaComponent,
    ContactoComponent,
    QuienesSomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
