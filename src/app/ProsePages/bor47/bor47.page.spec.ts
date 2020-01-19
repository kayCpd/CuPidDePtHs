import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bor47Page } from './bor47.page';

describe('Bor47Page', () => {
  let component: Bor47Page;
  let fixture: ComponentFixture<Bor47Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bor47Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bor47Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
