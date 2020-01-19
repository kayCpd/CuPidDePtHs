import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Df7Page } from './df7.page';

describe('Df7Page', () => {
  let component: Df7Page;
  let fixture: ComponentFixture<Df7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Df7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Df7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
