import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { LoginComponent } from './componets/login/login.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'ventas', component: VentasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
