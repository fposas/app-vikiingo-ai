import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlesComponent } from './controles.component';

describe('ControlesComponent', () => {
  let component: ControlesComponent;
  let fixture: ComponentFixture<ControlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlesComponent]
    });
    fixture = TestBed.createComponent(ControlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
