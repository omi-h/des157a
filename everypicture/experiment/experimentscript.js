(function(){
    'use strict';

    const container = document.querySelector('.container');
    const images = document.querySelectorAll('img');

    console.log(images);


    container.addEventListener('mouseenter' , scatter);

    function scatter(event){
        for (let i = 0; i < images.length; i++) {
            const randomX = (Math.random() - 0.5)*500;
            const randomY = (Math.random() - 0.5)*500;
            images[i].style.transform = `translate(-50%, -50%) translate(${randomX}px, ${randomY}px)`;
            images[i].style.transition = 'transform 0.8s ease-in';
          }
    }

    
})();