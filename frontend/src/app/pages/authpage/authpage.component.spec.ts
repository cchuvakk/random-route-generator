import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthpageComponent } from './authpage.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth_service';
import { ToasterService } from '../../toaster/toaster.service';

describe('AuthpageComponent - Check funs', () => {
  let component: AuthpageComponent;
  let fixture: ComponentFixture<AuthpageComponent>
  let routerSpy: jasmine.SpyObj<Router>
  let authserviceSpy: jasmine.SpyObj<AuthService>
  let toasterSpy: jasmine.SpyObj<ToasterService>

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router',['navigate']);
    authserviceSpy = jasmine.createSpyObj('AuthService', ['auth']);
    toasterSpy = jasmine.createSpyObj('ToasterService', ['success', 'error']);

    await TestBed.configureTestingModule({
      declarations: [AuthpageComponent],
      providers: [
        {provide: Router, useValue: routerSpy},
        {provide: AuthService, useValue: authserviceSpy},
        {provide: ToasterService, useValue: toasterSpy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthpageComponent);
    component = fixture.componentInstance;
  });

  it('на /authpage зарегался надеюсь', async () => {
    component.email = 'poggers7331@gmail.com'
    component.password = 'lol123'
    component.confirmPassword = '1231213'
    authserviceSpy.register.and.returnValue(Promise.resolve());

    await component.onRegister();

    //проверочка
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/welcomepage']);
  });
});
