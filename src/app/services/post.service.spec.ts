import { TestBed } from '@angular/core/testing';

import { PostsServicesService } from './post.service';

describe('PostService', () => {
  let service: PostsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
