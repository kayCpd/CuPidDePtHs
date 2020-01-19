import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tld22Page } from './tld22.page';

describe('Tld22Page', () => {
  let component: Tld22Page;
  let fixture: ComponentFixture<Tld22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tld22Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tld22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
