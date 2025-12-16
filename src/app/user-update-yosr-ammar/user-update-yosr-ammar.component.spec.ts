import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateYosrAmmarComponent } from './user-update-yosr-ammar.component';

describe('UserUpdateYosrAmmarComponent', () => {
  let component: UserUpdateYosrAmmarComponent;
  let fixture: ComponentFixture<UserUpdateYosrAmmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserUpdateYosrAmmarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpdateYosrAmmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

