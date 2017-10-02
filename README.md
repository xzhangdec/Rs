# Rs2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
### ***Unit Test Cases***
√=>***Passed*** 
x => ***Rejected*** 
#### **UserService**
1.should retrieve all users     √
2.should retrieve user by Id   √
#### **User.Route**
1.default route redirects to user  √
2.can navigate to user  √
3.should navigate to choseuser  √
4.should redirect unexisting urls to user  √
#### **UserTile(User-List-Part)**
1.should call getUsers and set users to the returned object  √
2.should initialize and call getUsers  √
3.should call navToUserDetail() after click  √
#### **ChoseUser(User-Detail-Part)**
1.should be initialized  √
2.should retrieve param id from ActivatedRoute     x(***Rejected***)
3.should back to user list page after click backToUserList() x(***Rejected***)

#### ***Reason for Rejected:***
	Error => "Uncaught NetworkError: Failed to execute 'send' on 'XMLHttpRequest': Failed to load 'ng:///DynamicTestModule/HomeContentComponent.ngfactory.js'"
	Reason => This is Chrome eating bugs.


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
### ***e2e Test Cases***
##### ***All Test Cases are Passed.***

	should 10 users shown when we load page √
	Leanne graham should be the first user √
	should go to 'choseUser(user detail page)' when clicked √
	(user detail) 'choseUser' page should back to userList page after click icon'<=' √

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
