import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepageComponent } from './profilepage.component';
import { Router } from '@angular/router';

describe('ProfilepageComponent', () => {
  let component: ProfilepageComponent;
  let fixture: ComponentFixture<ProfilepageComponent>;
  let routerSpy: jasmine.SpyObj<Router>

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ProfilepageComponent],
      providers:[
        {provide: Router, useValue: routerSpy},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilepageComponent);
    component = fixture.componentInstance;
  });

  it('проверка router чек', async () => {
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/mainpage']);
  });
});
