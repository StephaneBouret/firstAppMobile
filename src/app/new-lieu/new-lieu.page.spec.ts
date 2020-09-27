import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewLieuPage } from './new-lieu.page';

describe('NewLieuPage', () => {
  let component: NewLieuPage;
  let fixture: ComponentFixture<NewLieuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLieuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewLieuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
