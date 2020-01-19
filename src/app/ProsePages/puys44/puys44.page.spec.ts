import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Puys44Page } from './puys44.page';

describe('Puys44Page', () => {
  let component: Puys44Page;
  let fixture: ComponentFixture<Puys44Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Puys44Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Puys44Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
