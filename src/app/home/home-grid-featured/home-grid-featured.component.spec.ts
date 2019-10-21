import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGridFeaturedComponent } from './home-grid-featured.component';

describe('HomeGridFeaturedComponent', () => {
  let component: HomeGridFeaturedComponent;
  let fixture: ComponentFixture<HomeGridFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGridFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGridFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
