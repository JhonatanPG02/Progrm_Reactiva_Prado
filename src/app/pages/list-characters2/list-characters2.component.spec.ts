import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharacters2Component } from './list-characters2.component';

describe('ListCharacters2Component', () => {
  let component: ListCharacters2Component;
  let fixture: ComponentFixture<ListCharacters2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCharacters2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCharacters2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
