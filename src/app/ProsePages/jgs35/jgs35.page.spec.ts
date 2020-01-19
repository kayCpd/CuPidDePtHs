import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Jgs35Page } from './jgs35.page';

describe('Jgs35Page', () => {
  let component: Jgs35Page;
  let fixture: ComponentFixture<Jgs35Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jgs35Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Jgs35Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
