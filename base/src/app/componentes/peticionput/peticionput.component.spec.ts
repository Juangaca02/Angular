import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionputComponent } from './peticionput.component';

describe('PeticionputComponent', () => {
  let component: PeticionputComponent;
  let fixture: ComponentFixture<PeticionputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticionputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeticionputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
