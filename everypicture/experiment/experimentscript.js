(function(){
    'use strict';

    const button = document.querySelector('button');
    const images = document.querySelectorAll('img');

    // console.log(images);


    button.addEventListener('click' , scatter);

    function scatter(event){
        for (let i = 0; i < images.length; i++) {
            const randomX = (Math.random() - .5)*400;
            const randomY = (Math.random() - .5)*400;
            images[i].style.transform = `translate(-50%, -50%) translate(${randomX}px, ${randomY}px)`;
            images[i].style.transition = 'transform 1s ease-out';
          }
    }

    
})();