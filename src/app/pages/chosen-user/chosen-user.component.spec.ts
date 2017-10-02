import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  async, fakeAsync, ComponentFixture, TestBed, tick, inject } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  HttpModule
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { ChosenUserComponent } from './chosen-user.component';

import { UserService } from '../../shared/user.service';

let chosenUserComponent: ChosenUserComponent;
let fixture: ComponentFixture<ChosenUserComponent>;
let service: UserService;

let expectedApplicationId = '1';

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
    chosenUserComponent = fixture.componentInstance;

    service = TestBed.get(UserService);
  });

  it('should be initialized', () => {
    expect(fixture).toBeDefined();
    expect(chosenUserComponent).toBeDefined();
  });


  it('should retrieve param id from ActivatedRoute', async(() => {
    fixture.detectChanges();
    expect(chosenUserComponent.applicationId).toEqual(expectedApplicationId);
  }));

  it('should back to user list page after click backToUserList()', async(() => {
    spyOn(chosenUserComponent, 'backToUserList');
    fixture.detectChanges();
    expect(chosenUserComponent.backToUserList).toHaveBeenCalled();
  }));

}
