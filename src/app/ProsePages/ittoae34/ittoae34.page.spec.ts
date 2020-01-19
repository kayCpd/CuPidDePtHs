import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ittoae34Page } from './ittoae34.page';

describe('Ittoae34Page', () => {
  let component: Ittoae34Page;
  let fixture: ComponentFixture<Ittoae34Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ittoae34Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ittoae34Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
