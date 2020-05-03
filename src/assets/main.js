// const row = document.querySelector('.carousel-container');
// const movies = document.querySelectorAll('.movie');

// const leftArrow = document.getElementById('left-arrow');
// const rightArrow = document.getElementById('right-arrow');

// // event listener for right arrow
// rightArrow.addEventListener('click', () => {
//     row.scrollLeft += row.offsetWidth;

//     const activeIndicator = document.querySelector('.indicators .active');
//     if(activeIndicator.nextSibling) {
//         activeIndicator.nextSibling.classList.add('active');
//         activeIndicator.classList.remove('active');
//     }
// });

// // event listener for left arrow
// leftArrow.addEventListener('click', () => {
//     row.scrollLeft -= row.offsetWidth;

//     const activeIndicator = document.querySelector('.indicators .active');
//     if(activeIndicator.previousSibling) {
//         activeIndicator.previousSibling.classList.add('active');
//         activeIndicator.classList.remove('active');
//     }
// });

// // pagination
// const pagesNumber = Math.ceil(movies.length / 5);
// for(let i = 0; i < pagesNumber; i++) {
//     const indicator = document.createElement('button');

//     if(i === 0) {
//         indicator.classList.add('active');
//     }

//     document.querySelector('.indicators').appendChild(indicator);
//     indicator.addEventListener('click', (e) => {
//         row.scrollLeft = i * row.offsetWidth;

//         document.querySelector('.indicators .active').classList.remove('active');
//         e.target.classList.add('active');
//     })
// }

// // img hover
// movies.forEach((movie) => {
//     movie.addEventListener('mouseenter', (e) => {
//         const element = e.currentTarget;
//         setTimeout(() => {
//             movies.forEach(movie => movie.classList.remove('hover'));
//             element.classList.add('hover');
//         }, 200);
//     })
// });

// row.addEventListener('mouseleave', () => {
//     movies.forEach(movie => movie.classList.remove('hover'));
// })

// // login

// const inputs = document.querySelectorAll('.input');

// function focusFunc() {
//     let parent = this.parentNode.parentNode;
//     parent.classList.add('focus');
// }

// function blurFunc() {
//     let parent = this.parentNode.parentNode;
//     if(this.value == "") {
//         parent.classList.remove('focus');
//     }
// }

// inputs.forEach(input => {
//     input.addEventListener('focus', focusFunc);
//     input.addEventListener('blur', blurFunc);
// });

// // rent

// // $(function() {
// //     'use strict';

// //     window.addEventListener('load', function() {
// //       // Fetch all the forms we want to apply custom Bootstrap validation styles to
// //       var forms = document.getElementsByClassName('needs-validation');

// //       // Loop over them and prevent submission
// //       var validation = Array.prototype.filter.call(forms, function(form) {
// //         form.addEventListener('submit', function(event) {
// //           if (form.checkValidity() === false) {
// //             event.preventDefault();
// //             event.stopPropagation();
// //           }
// //           form.classList.add('was-validated');
// //         }, false);
// //       });
// //     }, false);
// //   })();


// // // video modal