import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AskmePage } from './askme.page';

describe('AskmePage', () => {
  let component: AskmePage;
  let fixture: ComponentFixture<AskmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskmePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AskmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
