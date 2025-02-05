(function(){
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#myform');
    const madLib = document.querySelector('#madLibs');
    const error = document.querySelector('#error');

    myForm.addEventListener('submit' , function(event){
        event.preventDefault();

        const zodiac = document.querySelector('#zodiac').value;
        const adj = document.querySelector('#adjective').value;
        const num1 = document.querySelector('#number1').value;
        const num2 = document.querySelector('#number2').value;
        const color = document.querySelector('#favColor').value;
        const verb = document.querySelector('#verb').value;
        const pNoun = document.querySelector('#pluralnoun').value;

        let myText;

        if(adj == ''){
            const errorAdj = document.querySelector('#errorAdj');
            errorAdj.innerHTML = "Please give me an adjective";
            errorAdj.style.color = '#FF8E9B';
            document.querySelector('#adjective').focus();
        }
        else if(num1 == ''){
            const errorNum = document.querySelector('#errorNum');
            errorNum.innerHTML = "Please give me a number";      
            errorNum.style.color = '#FF8E9B';
            document.querySelector('#number1').focus();
        }
        else if(num2 == ''){
            const errorNum = document.querySelector('#errorNum');
            errorNum.innerHTML = "Please give me a number";
            errorNum.style.color = '#FF8E9B';            
            document.querySelector('#number2').focus();
        }
        else if(color == ''){
            const errorColor = document.querySelector('#errorColor');
            errorColor.innerHTML = "Please give me a color";
            errorColor.style.color ='#FF8E9B';                        document.querySelector('#favColor').focus();
        }
        else if(verb == ''){
            const errorVerb = document.querySelector('#errorVerb');
            errorVerb.innerHTML = "Please give me a verb";
            errorVerb.style.color = '#FF8E9B';                        document.querySelector('#verb').focus();
        }
        else if(pNoun == ''){
            const errorPNoun = document.querySelector('#errorPNoun');
            errorPNoun.innerHTML = "Please give me a plural noun";
            errorPNoun.style.color = '#FF8E9B';                        document.querySelector('#pluralnoun').focus();
        }
        else{
            myText = ` <p>Greetings <span>${zodiac}</span>. The stars have big plans for you this coming February. </p>
           <p> This month you can expect <span>${adj}</span> energy and may find yourself caught up with your own potential! </p>
            <p>Don’t worry as <span>${num1}</span> and <span>${num2}</span> are your lucky days this month and may bring you good fortune if you play your cards right.</p>
            <p>This month is the perfect one for you to meet someone new. Be on the lookout for someone with <span>${color}</span> hair. They just might be your soulmate! If you <span>${verb}</span> enough, you’re sure to encounter them!</p>
            <p>While things might look good for you this month, it’s crucial that you avoid <span>${pNoun}</span> else your entire life might fall apart and even the cosmos cannot save you.</p>
            <p>Best of luck <span>${zodiac}</span>!</p> ` ;

            document.querySelector('#output').className='showing';
            document.querySelector('#main-page').className='hidden';


            document.querySelector('#zodiac').value = '';
            document.querySelector('#adjective').value = '';
            document.querySelector('#number1').value = '';
            document.querySelector('#number2').value = '';
            document.querySelector('#favColor').value = '';
            document.querySelector('#verb').value = '';
            document.querySelector('#pluralnoun').value = '';
        }
        madLib.innerHTML = myText;
        console.log(myText);

    });
})();