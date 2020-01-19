import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Et45Page } from './et45.page';

describe('Et45Page', () => {
  let component: Et45Page;
  let fixture: ComponentFixture<Et45Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Et45Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Et45Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
