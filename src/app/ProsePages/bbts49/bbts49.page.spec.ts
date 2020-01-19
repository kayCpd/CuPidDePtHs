import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bbts49Page } from './bbts49.page';

describe('Bbts49Page', () => {
  let component: Bbts49Page;
  let fixture: ComponentFixture<Bbts49Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bbts49Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bbts49Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
