import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPagePhotoComponent } from './sign-in-page-photo.component';

describe('SignInPagePhotoComponent', () => {
  let component: SignInPagePhotoComponent;
  let fixture: ComponentFixture<SignInPagePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInPagePhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInPagePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
