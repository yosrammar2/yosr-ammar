import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateYosrAmmarComponent } from './user-create-yosr-ammar.component';

describe('UserCreateYosrAmmarComponent', () => {
  let component: UserCreateYosrAmmarComponent;
  let fixture: ComponentFixture<UserCreateYosrAmmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCreateYosrAmmarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreateYosrAmmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

