import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainpageComponent } from './mainpage.component';
import { Router } from '@angular/router';
import maplibregl from 'maplibre-gl';

describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;
  let mapConstructorSpy: jasmine.Spy;

  beforeEach(async () => {
    mapConstructorSpy = spyOn<any>(maplibregl, 'Map').and.callThrough();   //тк внешний конструктор

    await TestBed.configureTestingModule({
      declarations: [MainpageComponent],
      providers:[
        {provide: maplibregl, useValue: mapConstructorSpy},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainpageComponent);
    component = fixture.componentInstance;
  });

  it('проверка карты', () => { 
    component.ngAfterViewInit();
    expect(mapConstructorSpy).toHaveBeenCalled();
  });
});
