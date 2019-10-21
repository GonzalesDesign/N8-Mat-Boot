import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMatGridComponent } from './home-mat-grid.component';

describe('HomeMatGridComponent', () => {
  let component: HomeMatGridComponent;
  let fixture: ComponentFixture<HomeMatGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMatGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMatGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
