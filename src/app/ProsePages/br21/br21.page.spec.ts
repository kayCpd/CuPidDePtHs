import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Br21Page } from './br21.page';

describe('Br21Page', () => {
  let component: Br21Page;
  let fixture: ComponentFixture<Br21Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Br21Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Br21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
