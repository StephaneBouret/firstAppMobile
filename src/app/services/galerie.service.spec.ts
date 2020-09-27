import { TestBed } from '@angular/core/testing';

import { GalerieService } from './galerie.service';

describe('GalerieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalerieService = TestBed.get(GalerieService);
    expect(service).toBeTruthy();
  });
});
