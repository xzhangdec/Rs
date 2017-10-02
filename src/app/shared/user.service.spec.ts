import { inject, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';



import { UserService } from './user.service';

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

describe('UserService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        UserService,
        { provide: Http,
          useFactory: (backend: ConnectionBackend,
                       defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions] },
      ]
    });
  });

  function targettURL(backend: MockBackend, url: string) {
    backend.connections.subscribe(c => {
      expect(c.request.url).toBe(url);
      const response = new ResponseOptions({ body:JSON.stringify(MockUsersArray) });
      c.mockRespond(new Response(response));
    });
  }

  it("should retrieve all users", inject([UserService, MockBackend], fakeAsync((svc, backend) => {
    let res;
    targettURL(backend, 'https://jsonplaceholder.typicode.com/users');
    svc.getUsersJSON().subscribe(users => {
      res = users;
    });
    tick();
    expect(res[0]).toEqual(MockUser);
    expect(res.length).toEqual(2);
    }))
  );

  it("should retrieve user by Id", inject([UserService, MockBackend], fakeAsync((svc, backend) => {
    targettURL(backend, 'https://jsonplaceholder.typicode.com/users');
    svc.getUserById(MockUser.id).subscribe(user => {
      expect(user).toEqual(MockUser);
    });

  })))

});
