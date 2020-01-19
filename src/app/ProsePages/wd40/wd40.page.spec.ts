import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Wd40Page } from './wd40.page';

describe('Wd40Page', () => {
  let component: Wd40Page;
  let fixture: ComponentFixture<Wd40Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wd40Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Wd40Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
