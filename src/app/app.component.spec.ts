import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PreConflictChkComponent } from './pre-conflict-chk/pre-conflict-chk.component';
import { CnfltChkReqComponent } from './cnflt-chk-req/cnflt-chk-req.component';
import { StepperConflictCheckComponent } from './stepper-conflict-check/stepper-conflict-check.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PartySearchComponent } from './party-search/party-search.component';
import { PartyDealComponent } from './party-deal/party-deal.component';
import { ConflictSummaryComponent } from './conflict-summary/conflict-summary.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './service/user.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
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
      providers: [UserService, AuthGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass : AuthInterceptor,
          multi : true
      }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the user', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const user = fixture.debugElement.componentInstance;
    expect(user).toBeTruthy();
  });

  it('should create the signin', () => {
    const fixture = TestBed.createComponent(SignInComponent);
    const signin = fixture.debugElement.componentInstance;
    expect(signin).toBeTruthy();
  });

  it('should create the admin', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    const admin = fixture.debugElement.componentInstance;
    expect(admin).toBeTruthy();
  });

  it('should create the header', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const header = fixture.debugElement.componentInstance;
    expect(header).toBeTruthy();
  });

  it('should create the search', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const search = fixture.debugElement.componentInstance;
    expect(search).toBeTruthy();
  });

  it('should create the footer', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const footer = fixture.debugElement.componentInstance;
    expect(footer).toBeTruthy();
  });

  it('should create the home', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.debugElement.componentInstance;
    expect(home).toBeTruthy();
  });

  it('should create the preconflictChk', () => {
    const fixture = TestBed.createComponent(PreConflictChkComponent);
    const preconflictChk = fixture.debugElement.componentInstance;
    expect(preconflictChk).toBeTruthy();
  });

  it('should create the cnfltChkReq', () => {
    const fixture = TestBed.createComponent(CnfltChkReqComponent);
    const cnfltChkReq = fixture.debugElement.componentInstance;
    expect(cnfltChkReq).toBeTruthy();
  });

  it('should create the stepperConflictCheck', () => {
    const fixture = TestBed.createComponent(StepperConflictCheckComponent);
    const stepperConflictCheck = fixture.debugElement.componentInstance;
    expect(stepperConflictCheck).toBeTruthy();
  });

  it('should create the searchBar', () => {
    const fixture = TestBed.createComponent(SearchBarComponent);
    const searchBar = fixture.debugElement.componentInstance;
    expect(searchBar).toBeTruthy();
  });

  it('should create the partySearch', () => {
    const fixture = TestBed.createComponent(PartySearchComponent);
    const partySearch = fixture.debugElement.componentInstance;
    expect(partySearch).toBeTruthy();
  });

  it('should create the partyDeal', () => {
    const fixture = TestBed.createComponent(PartyDealComponent);
    const partyDeal = fixture.debugElement.componentInstance;
    expect(partyDeal).toBeTruthy();
  });

  it('should create the conflictSummary', () => {
    const fixture = TestBed.createComponent(ConflictSummaryComponent);
    const conflictSummary = fixture.debugElement.componentInstance;
    expect(conflictSummary).toBeTruthy();
  });



  /* it(`should have as title 'macquire-cmprsk-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('macquire-cmprsk-angular');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to macquire-cmprsk-angular!');
  });*/
});
