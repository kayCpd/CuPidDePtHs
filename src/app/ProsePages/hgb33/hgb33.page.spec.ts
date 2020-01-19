import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Hgb33Page } from './hgb33.page';

describe('Hgb33Page', () => {
  let component: Hgb33Page;
  let fixture: ComponentFixture<Hgb33Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hgb33Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Hgb33Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
