import { SignInComponent } from './sign-in.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

describe('Sign-In Component', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let service: UserService;
  let router: Router;
  let spy: jasmine.Spy;

  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      providers: [UserService, Router]
    });

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    service = TestBed.get(UserService);
    router = TestBed.get(Router);

  });

  it('should welcome SignIn as title', () => {
    const el = fixture.nativeElement.querySelector('h4');
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Sign In');
  });

});
