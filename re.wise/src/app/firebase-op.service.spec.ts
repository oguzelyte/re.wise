import { TestBed } from '@angular/core/testing';

import { FirebaseOpService } from './firebase-op.service';

describe('FirebaseOpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseOpService = TestBed.get(FirebaseOpService);
    expect(service).toBeTruthy();
  });
});
