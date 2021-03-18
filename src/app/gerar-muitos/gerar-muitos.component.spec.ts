import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarMuitosComponent } from './gerar-muitos.component';

describe('GerarMuitosComponent', () => {
  let component: GerarMuitosComponent;
  let fixture: ComponentFixture<GerarMuitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerarMuitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerarMuitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
