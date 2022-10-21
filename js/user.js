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

// popup post

const userPosts = [...document.querySelectorAll('.post-container .post')];
let popupPost = document.querySelector('.post-popup');
let closePopup = document.querySelector('.close-overlay');
let popupPostImg = document.querySelector('.post-popup .post .post-img-container .img')

userPosts.map(post => {
    post.addEventListener('click', () => {
        let img = post.querySelector('.post-img');
        popupPostImg.src = img.src;
        popupPost.classList.add('show')
    })
}
)