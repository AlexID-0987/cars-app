import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManypeopleComponent } from './manypeople.component';

describe('ManypeopleComponent', () => {
  let component: ManypeopleComponent;
  let fixture: ComponentFixture<ManypeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManypeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManypeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
