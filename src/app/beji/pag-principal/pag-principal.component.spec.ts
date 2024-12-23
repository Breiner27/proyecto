import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPrincipalComponent } from './pag-principal.component';

describe('PagPrincipalComponent', () => {
  let component: PagPrincipalComponent;
  let fixture: ComponentFixture<PagPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
