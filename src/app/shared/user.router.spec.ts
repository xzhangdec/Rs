import {TestBed, async, fakeAsync, tick, inject} from '@angular/core/testing';
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Router, RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {Location} from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';


@Component({
  selector: 'root-app',
  template: `<router-outlet></router-outlet>`
})
class RootComponent { }

@Component({
  selector: 'user',
  template: `<h1>userList</h1>`
})
export class UserListComponent { }

@Component({
  selector:'choseuser',
  template: `<h1>ChoseUser</h1>`
})
export class ChoseUserComponent { }


export const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserListComponent },
  { path: 'user/:id', component: ChoseUserComponent },
  { path: '**', redirectTo: 'user' }

];

@NgModule({
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  declarations: [RootComponent, UserListComponent, ChoseUserComponent],
  bootstrap: [RootComponent],
  exports: [RootComponent]
})
export class AppModule {}


describe('Router tests', () => {
  let router;
  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    });
  });
  beforeEach(inject([Router], _router => {
    router = _router;
  }));

  it('default route redirects to home (fakeAsync/tick)', fakeAsync(() => {
    let fixture = TestBed.createComponent(RootComponent);
    router.initialNavigation();
    fixture.detectChanges();
    tick();
    expect(location.pathname.endsWith('/user')).toBe(true);
  }));


  it('can navigate to home (fakeAsync/tick)', fakeAsync(() => {
    let fixture = TestBed.createComponent(RootComponent);
    router.navigate(['/user']);
    fixture.detectChanges();
    tick();
    expect(location.pathname.endsWith('/user')).toBe(true);
  }));

  it('should navigate to choseuser', fakeAsync(() => {
    let fixture = TestBed.createComponent(RootComponent);
    router.navigate(['/user', 5]);
    fixture.detectChanges();
    tick();
    expect(location.pathname.endsWith('/user/5')).toBe(true);
  }));

  it('should redirect unexisting urls to Home (fakeAsync/tick)', fakeAsync(() => {
    let fixture = TestBed.createComponent(RootComponent);
    router.navigate(['/undefined/route']);
    fixture.detectChanges();
    tick();
    expect(location.pathname.endsWith('/user')).toBe(true);
  }));
});
