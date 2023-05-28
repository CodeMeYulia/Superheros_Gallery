// "use strict"

// //сохраняем рейтинги(массив) в переменную
// const ratings = document.querySelectorAll('.rating');

// if (ratings.length > 0) {
//     initRatings()
// }

// //main function
// function initRatings() {
//     let ratingActive, ratingValue;
//     //пробегаемся по рейтингам

//     for (let index = 0; index < ratings.length; index++) {
//         const rating = ratings[index];
//         initRaiting(rating);
//     }

//     //инициация конкретного рейтинга
//     function initRaiting(rating) {
//         initRatingVars(rating);
//         setRatingActiveWidth();
//     }

//     //инициализация переменных
//     function initRatingVars(rating) {
//     ratingActive = rating.querySelector('.rating__active');
//     ratingValue = rating.querySelector('.rating__value');
//     }

//     //изменяем ширину активных звезд
//     function setRatingActiveWidth(index = ratingValue.innerHtml) {
//     const setRatingActiveWidth = index / 0.05;
//     ratingActive.style.width = `${ratingActive}%`;
// }
// }
