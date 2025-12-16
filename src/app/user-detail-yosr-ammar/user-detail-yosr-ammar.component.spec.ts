import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailYosrAmmarComponent } from './user-detail-yosr-ammar.component';

describe('UserDetailYosrAmmarComponent', () => {
  let component: UserDetailYosrAmmarComponent;
  let fixture: ComponentFixture<UserDetailYosrAmmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailYosrAmmarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailYosrAmmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

