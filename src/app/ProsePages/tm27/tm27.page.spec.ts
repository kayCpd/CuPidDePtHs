import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tm27Page } from './tm27.page';

describe('Tm27Page', () => {
  let component: Tm27Page;
  let fixture: ComponentFixture<Tm27Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tm27Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tm27Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
