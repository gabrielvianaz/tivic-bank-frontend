import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

// Componentes

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastroPfComponent } from './components/cadastro/cadastro-pf/cadastro-pf.component';
import { CadastroPjComponent } from './components/cadastro/cadastro-pj/cadastro-pj.component';
import { HomeComponent } from './components/home/home.component';
import { OperacoesComponent } from './components/home/operacoes/operacoes.component';
import { OperacaoComponent } from './components/home/operacoes/operacao.component';
import { DadosContaComponent } from './components/home/dados-conta/dados-conta.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { SpinnerComponent } from './components/common/spinner.component';
import { ExtratoComponent } from './components/extrato/extrato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    CadastroPfComponent,
    CadastroPjComponent,
    HomeComponent,
    OperacoesComponent,
    OperacaoComponent,
    DadosContaComponent,
    SpinnerComponent,
    ExtratoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
