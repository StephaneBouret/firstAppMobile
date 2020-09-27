import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsLieuPage } from './details-lieu.page';

describe('DetailsLieuPage', () => {
  let component: DetailsLieuPage;
  let fixture: ComponentFixture<DetailsLieuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsLieuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsLieuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
