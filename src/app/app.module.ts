import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthInterceptor } from './auth/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './auth/auth.guard';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './service/user.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { PreConflictChkComponent } from './pre-conflict-chk/pre-conflict-chk.component';
import { CnfltChkReqComponent } from './cnflt-chk-req/cnflt-chk-req.component';
import { StepperConflictCheckComponent } from './stepper-conflict-check/stepper-conflict-check.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PartySearchComponent } from './party-search/party-search.component';
import { PartyDealComponent } from './party-deal/party-deal.component';
import { ConflictSummaryComponent } from './conflict-summary/conflict-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    AdminComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    HomeComponent,
    PreConflictChkComponent,
    CnfltChkReqComponent,
    StepperConflictCheckComponent,
    SearchBarComponent,
    PartySearchComponent,
    PartyDealComponent,
    ConflictSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [UserService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
