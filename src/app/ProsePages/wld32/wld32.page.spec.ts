import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Wld32Page } from './wld32.page';

describe('Wld32Page', () => {
  let component: Wld32Page;
  let fixture: ComponentFixture<Wld32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wld32Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Wld32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
