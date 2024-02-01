import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionpostComponent } from './peticionpost.component';

describe('PeticionpostComponent', () => {
  let component: PeticionpostComponent;
  let fixture: ComponentFixture<PeticionpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticionpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeticionpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
