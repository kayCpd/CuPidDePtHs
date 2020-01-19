import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyMantraPage } from './daily-mantra.page';

describe('DailyMantraPage', () => {
  let component: DailyMantraPage;
  let fixture: ComponentFixture<DailyMantraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyMantraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyMantraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
