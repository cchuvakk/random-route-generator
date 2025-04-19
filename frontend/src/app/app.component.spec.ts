import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let routerSpy: any

  beforeEach(async () => {
    routerSpy = { url: '/mainpage' };
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers:[
       { provide: Router, useValue: routerSpy },
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'frontend' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend');
  });

  it('прятать меню в /welcomepage', () => {
    routerSpy.url = '/welcomepage';
    //component
  });

  it('показывать меню в /mainpage', () => {
    routerSpy.url = '/mainpage';
    //component
  });

  it('тригеррить боковую панель ', () => {
    
  });

  it('тригеррить боковую панель ', () => {
    
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, frontend');
  });
});
