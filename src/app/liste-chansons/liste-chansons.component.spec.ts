import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChansonsComponent } from './liste-chansons.component';

describe('ListeChansonsComponent', () => {
  let component: ListeChansonsComponent;
  let fixture: ComponentFixture<ListeChansonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeChansonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChansonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
