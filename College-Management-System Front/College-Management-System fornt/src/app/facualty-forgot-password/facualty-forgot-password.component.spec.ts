import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacualtyForgotPasswordComponent } from './facualty-forgot-password.component';

describe('FacualtyForgotPasswordComponent', () => {
  let component: FacualtyForgotPasswordComponent;
  let fixture: ComponentFixture<FacualtyForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacualtyForgotPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacualtyForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
