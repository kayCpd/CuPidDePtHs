import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Hlmf10Page } from './hlmf10.page';

describe('Hlmf10Page', () => {
  let component: Hlmf10Page;
  let fixture: ComponentFixture<Hlmf10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hlmf10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Hlmf10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
