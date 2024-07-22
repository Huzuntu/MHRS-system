import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPageLoginFormComponent } from './sign-in-page-login-form.component';

describe('SignInPageLoginFormComponent', () => {
  let component: SignInPageLoginFormComponent;
  let fixture: ComponentFixture<SignInPageLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInPageLoginFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInPageLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
