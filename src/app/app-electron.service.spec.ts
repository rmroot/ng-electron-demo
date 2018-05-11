import { TestBed, inject } from '@angular/core/testing';

import { AppElectronService } from './app-electron.service';

describe('AppElectronService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppElectronService]
    });
  });

  it('should be created', inject([AppElectronService], (service: AppElectronService) => {
    expect(service).toBeTruthy();
  }));
});
