import { BrowserModule } from '@angular/platform-browser';
/* */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { ChatComponent } from './components/chat/chat.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserGetComponent } from './entities/user/user-get/user-get.component';
import { FooterComponent } from './components/footer/footer.component';
/* */
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
/** config angular i18n con esto configuro para ng-zorro y la fecha para español**/
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
//import en from '@angular/common/locales/en';
registerLocaleData(localeEs);

/*para redux en angular*/
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
/*para socketio en angular*/
import {SocketIoModule} from 'ngx-socket-io';
/*para el spinner*/
import { NgxSpinnerModule } from "ngx-spinner";

/*interceptor*/
import { InterceptorService } from './interceptors/interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuLateralComponent,
    LoginComponent,
    HomeComponent,
    UserGetComponent,
    ChatComponent,
    ListUsersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    /** import ng-zorro-antd root module，you should import NgZorroAntdModule and avoid importing sub modules directly **/
    NgZorroAntdModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    SocketIoModule.forRoot(environment.config),
    NgxSpinnerModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},{provide:LOCALE_ID,useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
