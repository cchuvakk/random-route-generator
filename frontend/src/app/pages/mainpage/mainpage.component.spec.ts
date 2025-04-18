import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainpageComponent } from './mainpage.component';
import { Router } from '@angular/router';

describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;
  let routerSpy: jasmine.SpyObj<Router>

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router',['navigate']);

    await TestBed.configureTestingModule({
      declarations: [MainpageComponent],
      providers:[
        {provide: Router, useValue: routerSpy},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainpageComponent);
    component = fixture.componentInstance;
  });

  it('проверка роутера', async () => { //мб await тут!

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/aboutpage']);
  });
});
