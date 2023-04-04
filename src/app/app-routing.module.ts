import { TransferirComponent } from './components/transferir/transferir.component';
import { SacarComponent } from './components/sacar/sacar.component';
import { DepositarComponent } from './components/depositar/depositar.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'extrato',
    component: ExtratoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'depositar',
    component: DepositarComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sacar',
    component: SacarComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'transferir',
    component: TransferirComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
