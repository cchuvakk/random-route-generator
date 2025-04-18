import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomepageComponent } from './welcomepage.component';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login_service';
import { ToasterService } from '../../toaster/toaster.service'; //ng test

fdescribe('WelcomepageComponent - Check funs', () => { //групировка тестов, fdescribe для ток его запуска
  let component: WelcomepageComponent;
  let fixture: ComponentFixture<WelcomepageComponent> //п
  let routerSpy: jasmine.SpyObj<Router> 
  let loginServiceSpy: jasmine.SpyObj<LoginService> 
  let toasterSpy: jasmine.SpyObj<ToasterService> 

  beforeEach(async ()=>{
    routerSpy = jasmine.createSpyObj('Router',['navigate']);
    loginServiceSpy = jasmine.createSpyObj('LoginService', ['login']);
    toasterSpy = jasmine.createSpyObj('ToasterService', ['success', 'error']);

    await TestBed.configureTestingModule({ //апишка для тестов
      declarations: [WelcomepageComponent],
      providers: [
        {provide: Router, useValue: routerSpy},
        {provide: LoginService, useValue: loginServiceSpy},
        {provide: ToasterService, useValue: toasterSpy}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomepageComponent);
    component = fixture.componentInstance;
  });

  it('на /mainpage идет ли если чо залогнилися', async ()=>{ //сам тест
    component.email = 'poggers1337@gmail.com'
    component.password = '1234567'
    component.rememberMe = false;

    loginServiceSpy.login.and.returnValue(Promise.resolve());

    //вызов 
    await component.onLogin();

    //проверочка
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/mainpage']);
  });
});
