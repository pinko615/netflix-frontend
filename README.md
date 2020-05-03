# NetflixAngular

![netflix-angular](http://pink0.online/netflix.jpg)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)

## Firsts steps

You can download or clone this project to see the code of the entire website.
```
git clone https://github.com/pinko615/GH-Proyecto-1-Netflix-Frontend.git
```

## Version 🖥

v1.0

## Developed with 🛠️

* [VSCode] https://code.visualstudio.com/
* [Angular CLI] https://cli.angular.io/ 
* [Typescript] https://www.typescriptlang.org/
* [Node] https://nodejs.org/es/
* [Bootstrap] https://getbootstrap.com/
* [GitHub] https://github.com/

## Dependencies ⚙️

```
"dependencies": {
    "@angular/animations": "~9.1.0",
    "@angular/common": "~9.1.0",
    "@angular/compiler": "~9.1.0",
    "@angular/core": "~9.1.0",
    "@angular/forms": "~9.1.0",
    "@angular/platform-browser": "~9.1.0",
    "@angular/platform-browser-dynamic": "~9.1.0",
    "@angular/router": "~9.1.0",
    "bootstrap": "^4.4.1",
    "jquery": "^3.5.0",
    "ng2-search-filter": "^0.5.1",
    "rxjs": "~6.5.4",
    "tslib": "^1.10.0",
    "zone.js": "~0.10.2"
  }
```

## devDependencies ⚙️

```
"devDependencies": {
    "@angular-devkit/build-angular": "~0.901.0",
    "@angular/cli": "~9.1.0",
    "@angular/compiler-cli": "~9.1.0",
    "@angular/language-service": "~9.1.0",
    "@types/node": "^12.11.1",
    "@types/jasmine": "~3.5.0",
    "@types/jasminewd2": "~2.0.3",
    "codelyzer": "^5.1.2",
    "jasmine-core": "~3.5.0",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~4.4.1",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage-istanbul-reporter": "~2.1.0",
    "karma-jasmine": "~3.0.1",
    "karma-jasmine-html-reporter": "^1.4.2",
    "protractor": "~5.4.3",
    "ts-node": "~8.3.0",
    "tslint": "~6.1.0",
    "typescript": "~3.8.3"
  }
```

## Services ⚙️

```
auth.service.ts

  signUpUser(user) {
    return this.http.post<any>(this.signUpUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLogged() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
```
```
tokeninterceptor.service.ts

  intercept(req, next) {
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.authService.getToken()
      }
    });
    return next.handle(tokenReq);
  }

```

## Screenshots 📷

Login
![netflix-angular3](http://pink0.online/netflix3.jpg)

## Author ✒️

* **Martín Pinto Hoffman** - *Full Stack Designer & Developer* - [pinko615](https://github.com/pinko615)

---
Made with ❤️ by [Pinko615](https://github.com/pinko615) 😊

