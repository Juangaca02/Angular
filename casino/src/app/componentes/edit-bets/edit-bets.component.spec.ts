import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBetsComponent } from './edit-bets.component';

describe('EditBetsComponent', () => {
  let component: EditBetsComponent;
  let fixture: ComponentFixture<EditBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
