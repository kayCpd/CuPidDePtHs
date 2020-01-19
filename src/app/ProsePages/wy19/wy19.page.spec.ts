import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Wy19Page } from './wy19.page';

describe('Wy19Page', () => {
  let component: Wy19Page;
  let fixture: ComponentFixture<Wy19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wy19Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Wy19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
