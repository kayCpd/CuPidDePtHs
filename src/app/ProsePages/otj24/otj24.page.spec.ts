import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Otj24Page } from './otj24.page';

describe('Otj24Page', () => {
  let component: Otj24Page;
  let fixture: ComponentFixture<Otj24Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Otj24Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Otj24Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
