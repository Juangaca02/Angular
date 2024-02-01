import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarComponent } from './crear-usuar.component';

describe('CrearUsuarComponent', () => {
  let component: CrearUsuarComponent;
  let fixture: ComponentFixture<CrearUsuarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearUsuarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearUsuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
