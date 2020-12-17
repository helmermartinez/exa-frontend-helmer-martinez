import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { RolComponent } from './componets/rol/rol.component';
import { MenuComponent } from './componets/menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RolService } from './services/rol.service';
import { AuthService } from './services/auth.service';
import { InterceptorService } from './interceptor/interceptor.service';
import { VentasComponent } from './components/ventas/ventas.component';
import { ProductoComponent } from './components/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RolComponent,
    MenuComponent,
    VentasComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RolService,AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
