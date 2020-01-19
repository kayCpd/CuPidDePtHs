import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Abs29Page } from './abs29.page';

describe('Abs29Page', () => {
  let component: Abs29Page;
  let fixture: ComponentFixture<Abs29Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abs29Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Abs29Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
