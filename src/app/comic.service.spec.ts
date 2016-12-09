/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComicService } from './comic.service';

describe('ComicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComicService]
    });
  });

  it('should ...', inject([ComicService], (service: ComicService) => {
    expect(service).toBeTruthy();
  }));
});
