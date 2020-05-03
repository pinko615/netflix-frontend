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

## Firsts steps 🚀

_You can download or clone this project to see the code of the entire website._
```
git clone https://github.com/pinko615/GeeksHubs-P4---BackendMovie.git
```

## Version 🖥

_v1.0_

## Developed with 🛠️

* [JavaScript]
* [Express]
* [Node]
* [Sequelize-cli]
* [SQL]
* [Postman]

## Settings ⚙️

_To download and install all the dependencies you have to run the following commands._
```
npm init
```
```
npm install
```

## Code Demo 🤓

_Search by "?q=movieTitle"_
```
const { Op } = Sequelize;
app.get('/movies/search', function (request, response) {
    let filter = {};
    let { q } = request.query;

    if (q) {
        filter = {
            where: {
                title: {
                    [Op.like]: `${q}%`
                }
            }
        };
    }

    Movie.findAll(filter)
    .then(movies => response.send(movies))
    .catch(err =>{
        console.log(err)
        res.status(500).send({message:'error'})
    });
});
```

_1 cinema = many movies._
```
  Cinema.associate = function(models) {
    Cinema.hasMany(models.Movie)
  };
```

## Author ✒️

* **Martín Pinto Hoffman** - *Full Stack Designer & Developer* - [pinko615](https://github.com/pinko615)

---
Made with ❤️ by [Pinko615](https://github.com/pinko615) 😊

