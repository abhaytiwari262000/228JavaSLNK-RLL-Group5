import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpwComponent } from './adminpw.component';

describe('AdminpwComponent', () => {
  let component: AdminpwComponent;
  let fixture: ComponentFixture<AdminpwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
