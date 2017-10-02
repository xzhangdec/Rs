import {Injectable} from "@angular/core"
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';



@Injectable()
export class UserService{
  public userList:Array<any> = [];
  private subscription:Subscription = new Subscription();

  private userURL = "https://jsonplaceholder.typicode.com/users";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  private Users = new BehaviorSubject<Array<any>>([]);

  constructor(private http:Http){
    this.subscription = this.getUsersJSON().subscribe((user)=>{
      for(let i of user){
        this.userList.push(i);
      }
    },(err)=>{
      console.error("Get Users Err: " + err);
    });
  }

  getUsersJSON():Observable<any>{
    return this.http.get(this.userURL, this.options).map((res: Response) => {
      let body = res.json();
      return body || { };
    });
  }

  getUserById(id):Observable<any> {
    return this.getUsersJSON().map((users) => users.find(user => user.id == id));
  }

}
