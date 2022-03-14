import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiSearchListComponent } from './wiki-search-list.component';

describe('WikiSearchListComponent', () => {
  let component: WikiSearchListComponent;
  let fixture: ComponentFixture<WikiSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiSearchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
