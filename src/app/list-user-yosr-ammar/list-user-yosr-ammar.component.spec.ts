import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserYosrAmmarComponent } from './list-user-yosr-ammar.component';

describe('ListUserYosrAmmarComponent', () => {
  let component: ListUserYosrAmmarComponent;
  let fixture: ComponentFixture<ListUserYosrAmmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListUserYosrAmmarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserYosrAmmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

