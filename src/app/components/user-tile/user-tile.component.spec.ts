//Test url is correct when click navToUserDetail(id)



import { UserTileComponent } from './user-tile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, ComponentFixture, async, inject, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

import {Observable} from 'rxjs/Observable';


let MockUser = {
  "id": 5,
  "name": "Chelsey Dietrich",
  "username": "Kamren",
  "email": "Lucio_Hettinger@annie.ca",
  "address": {
    "street": "Skiles Walks",
    "suite": "Suite 351",
    "city": "Roscoeview",
    "zipcode": "33263",
    "geo": {
      "lat": "-31.8129",
      "lng": "62.5342"
    }
  },
  "phone": "(254)954-1289",
  "website": "demarco.info",
  "company": {
    "name": "Keebler LLC",
    "catchPhrase": "User-centric fault-tolerant solution",
    "bs": "revolutionize end-to-end systems"
  }
};
let MockUser2 = {
  "id": 8,
  "name": "Nicholas Runolfsdottir V",
  "username": "Maxime_Nienow",
  "email": "Sherwood@rosamond.me",
  "address": {
    "street": "Ellsworth Summit",
    "suite": "Suite 729",
    "city": "Aliyaview",
    "zipcode": "45169",
    "geo": {
      "lat": "-14.3990",
      "lng": "-120.7677"
    }
  },
  "phone": "586.493.6943 x140",
  "website": "jacynthe.com",
  "company": {
    "name": "Abernathy Group",
    "catchPhrase": "Implemented secondary concept",
    "bs": "e-enable extensible e-tailers"
  }
};
let MockUsersArray = [ MockUser, MockUser2 ];


describe('UserTileComponent', () => {
  let fixture: ComponentFixture<UserTileComponent>;
  let userService: UserService;
  let userTileComponet: UserTileComponent;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        },
        {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
          deps: [ MockBackend, BaseRequestOptions ]
        }
      ],
      declarations: [
        UserTileComponent,
      ],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UserTileComponent);
        userTileComponet = fixture.componentInstance;
        userService = TestBed.get(UserService);
        router = TestBed.get(Router);
      });
  }));

  describe("Functionalities", () => {
    it('should call getUsers and set users to the returned object', (done) => {
      spyOn(userService, 'getUsersJSON').and.callFake(() => {
        return Observable.of(MockUsersArray);
      });

      userTileComponet.getUsers().subscribe(() => {
        expect(userService.getUsersJSON).toHaveBeenCalled();
        expect(userService.getUsersJSON).toHaveBeenCalledTimes(1);
        expect(userTileComponet.Users).toBe(MockUsersArray);
        done();
      });
    });

    it('should initialize and call getUsers', () => {
      spyOn(userTileComponet, 'getUsers').and.returnValue({ subscribe: () => {} });

      userTileComponet.ngOnInit();

      expect(userTileComponet.getUsers).toHaveBeenCalled();
      expect(userTileComponet.getUsers).toHaveBeenCalledTimes(1);
    });
  });

  it('should call navToUserDetail() after click', () => {
    spyOn(userTileComponet, 'navToUserDetail');

    fixture.whenStable().then(() => {

      fixture.detectChanges();

      let z = fixture.nativeElement.querySelector('.content');
      z.click();
      expect(userTileComponet.navToUserDetail).toHaveBeenCalled();


    })
  });

  it('should navigate to detail page for user based on selected user id', () => {

    userTileComponet.navToUserDetail(MockUser.id);
    expect(router.navigate).toHaveBeenCalledWith([ '/user', MockUser.id ], Object({ queryParams: Object({ id: MockUser.id }) }));

  });



})
