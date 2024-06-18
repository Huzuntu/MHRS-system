import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPageLoginComponent } from './sign-in-page-login.component';

describe('SignInPageLoginComponent', () => {
  let component: SignInPageLoginComponent;
  let fixture: ComponentFixture<SignInPageLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInPageLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInPageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
