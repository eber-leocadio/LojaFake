import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiasComponent } from './joias.component';

describe('JoiasComponent', () => {
  let component: JoiasComponent;
  let fixture: ComponentFixture<JoiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
