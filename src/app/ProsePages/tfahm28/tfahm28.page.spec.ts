import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tfahm28Page } from './tfahm28.page';

describe('Tfahm28Page', () => {
  let component: Tfahm28Page;
  let fixture: ComponentFixture<Tfahm28Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tfahm28Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tfahm28Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
