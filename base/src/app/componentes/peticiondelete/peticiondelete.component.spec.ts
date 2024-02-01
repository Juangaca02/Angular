import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticiondeleteComponent } from './peticiondelete.component';

describe('PeticiondeleteComponent', () => {
  let component: PeticiondeleteComponent;
  let fixture: ComponentFixture<PeticiondeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticiondeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeticiondeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
