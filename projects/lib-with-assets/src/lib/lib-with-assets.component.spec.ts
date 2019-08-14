import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibWithAssetsComponent } from './lib-with-assets.component';

describe('LibWithAssetsComponent', () => {
  let component: LibWithAssetsComponent;
  let fixture: ComponentFixture<LibWithAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibWithAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibWithAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
