import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsoLoginComponent } from './sso-login.component';

describe('SsoLoginComponent', () => {
  let component: SsoLoginComponent;
  let fixture: ComponentFixture<SsoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsoLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
