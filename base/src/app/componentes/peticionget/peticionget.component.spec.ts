import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticiongetComponent } from './peticionget.component';

describe('PeticiongetComponent', () => {
  let component: PeticiongetComponent;
  let fixture: ComponentFixture<PeticiongetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticiongetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeticiongetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
