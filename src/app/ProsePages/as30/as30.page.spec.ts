import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { As30Page } from './as30.page';

describe('As30Page', () => {
  let component: As30Page;
  let fixture: ComponentFixture<As30Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ As30Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(As30Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
