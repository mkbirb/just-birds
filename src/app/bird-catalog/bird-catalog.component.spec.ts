import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdCatalogComponent } from './bird-catalog.component';

describe('BirdCatalogComponent', () => {
  let component: BirdCatalogComponent;
  let fixture: ComponentFixture<BirdCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirdCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
