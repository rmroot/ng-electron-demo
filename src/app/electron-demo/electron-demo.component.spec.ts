import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronDemoComponent } from './electron-demo.component';

describe('ElectronDemoComponent', () => {
  let component: ElectronDemoComponent;
  let fixture: ComponentFixture<ElectronDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
