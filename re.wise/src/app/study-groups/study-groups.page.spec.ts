import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudyGroupsPage } from './study-groups.page';

describe('StudyGroupsPage', () => {
  let component: StudyGroupsPage;
  let fixture: ComponentFixture<StudyGroupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyGroupsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudyGroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
