import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutpageComponent } from './aboutpage.component';
import { Router } from '@angular/router';

describe('AboutpageComponent - Check', () => {
  let component: AboutpageComponent;
  let fixture: ComponentFixture<AboutpageComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [AboutpageComponent], 
      providers: [
        {provide: Router, useValue: routerSpy},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutpageComponent);
    component = fixture.componentInstance;
  });

  it('проверка routerов чекич', async () => {
    
    expect(routerSpy.navigate).toHaveBeenCalledOnceWith(['/mainpage']);
  });
});
