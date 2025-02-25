(function(){
    'use strict';

    const plush = document.querySelector('#plush');
    const hat = document.querySelector('#hat');
    const keychain = document.querySelector('#keychain');
    const purse = document.querySelector('#purse');
    const sticker = document.querySelector('#sticker');

    plush.addEventListener('click' , function(event){
        event.preventDefault();
        document.querySelector('#overlay1').className = 'showing';
    });

    hat.addEventListener('click' , function(event){
        event.preventDefault();
        document.querySelector('#overlay2').className = 'showing';
    });

    keychain.addEventListener('click' , function(event){
        event.preventDefault();
        document.querySelector('#overlay3').className = 'showing';
    });

    purse.addEventListener('click' , function(event){
        event.preventDefault();
        document.querySelector('#overlay4').className = 'showing';
    });

    sticker.addEventListener('click' , function(event){
        event.preventDefault();
        document.querySelector('#overlay5').className = 'showing';
    });


    const closeButton = document.querySelectorAll('.close');
    const allOverlays = document.querySelectorAll('.overlay');

    for(const eachClose of closeButton){
        eachClose.addEventListener('click' , function(event){
            for(const anOverlay of allOverlays){
                anOverlay.className = 'hidden';
            }
        });
    }

    document.addEventListener( 'keydown' , function(event){
        if( event.key === 'Escape' ){
            for(const anOverlay of allOverlays){
                anOverlay.className = 'hidden';
            }
        }
    } );


})();