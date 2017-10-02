import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  async,
  fakeAsync,
  ComponentFixture,
  TestBed,
  tick,
  inject
} from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  HttpModule
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

// Components
import { ChosenUserComponent } from './chosen-user.component';

// Service
import { UserService } from '../../shared/user.service';
//import { AppServiceStub } from './app.service.stub';

let comp:    ChosenUserComponent;
let fixture: ComponentFixture<ChosenUserComponent>;
let service: UserService;

let expectedApplicationId = 'abc123';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChosenUserComponent],
      imports: [RouterTestingModule, HttpModule],
      providers: [
        UserService,
        {
          provide: ActivatedRoute,
          useValue: {
            params:  Observable.of({id: expectedApplicationId})
          }
        }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents();
  }));

  tests();
});

function tests() {
  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenUserComponent);
    comp = fixture.componentInstance;

    service = TestBed.get(UserService);
  });


  /*
   *   COMPONENT BEFORE INIT
   */
  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });


  /*
   *   COMPONENT INIT
   */

  it(`should retrieve param id from ActivatedRoute`, async(() => {
    fixture.detectChanges();

    expect(comp.applicationId).toEqual(expectedApplicationId);
  }));
/*
  it(`should get the details after ngOnInit`, async(() => {
    spyOn(comp, 'getDetails');
    fixture.detectChanges();

    expect(comp.getDetails).toHaveBeenCalled();
  }));

  it(`should get the list after ngOnInit`, async(() => {
    spyOn(comp, 'getList');
    fixture.detectChanges();

    expect(comp.getList).toHaveBeenCalled();
  }));
  */
}
