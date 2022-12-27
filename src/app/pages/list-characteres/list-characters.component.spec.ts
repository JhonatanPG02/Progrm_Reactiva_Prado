import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDogsComponent } from './list-characters.component';

describe('ListDogsComponent', () => {
  let component: ListDogsComponent;
  let fixture: ComponentFixture<ListDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
