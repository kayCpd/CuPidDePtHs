import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Or42Page } from './or42.page';

describe('Or42Page', () => {
  let component: Or42Page;
  let fixture: ComponentFixture<Or42Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Or42Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Or42Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
