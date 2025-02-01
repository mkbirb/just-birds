import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOOTER } from './footer.component';

describe('FooterComponent', () => {
  let component: FOOTER;
  let fixture: ComponentFixture<FOOTER>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FOOTER]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FOOTER);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
