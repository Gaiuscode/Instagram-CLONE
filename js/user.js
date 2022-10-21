// suggestion carousel slider

let userCardContainer = document.querySelector('.suggestion-container');
let nxtArrow = document.querySelector('.nxt-arrow');
let preArrow = document.querySelector('.pre-arrow');

let containerDimensions = userCardContainer.getBoundingClientRect();
let containerWidth = containerDimensions.width;

nxtArrow.addEventListener('click', () => {
    userCardContainer.scrollLeft += containerWidth;
})

preArrow.addEventListener('click', () => {
    userCardContainer.scrollLeft -= containerWidth;
})