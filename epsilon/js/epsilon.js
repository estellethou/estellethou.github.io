// LANGUAGE BUTTON //

var french = document.getElementById('fr_click'),
    english = document.getElementById('en_click'),
    fr_txt = document.querySelectorAll('.fr'),
    en_txt = document.querySelectorAll('.en'),
    nb_fr = fr_txt.length,
    nb_en = en_txt.length;

french.addEventListener('click', function() {
    langue(french,english);
}, false);

english.addEventListener('click', function() {
    langue(english,french);
}, false);

function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang'); //toggle add 'current_lang' if classList of LangOn doesn't contain 'current_lang' OR delete 'current_lang' if LongOn contains it
        langueOff.classList.toggle('current_lang'); //toggle add 'current_lang' if classList of LangOff doesn't contain 'current_lang' OR delete 'current_lang' if LongOn contains it
    }

    if(langueOn.innerHTML == 'Fr'){
        displayText(fr_txt, nb_fr);
        hideText(en_txt, nb_en);
    }
    else if(langueOn.innerHTML == 'En'){
        displayText(en_txt, nb_en);
        hideText(fr_txt, nb_fr);
    }
}

function displayText(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
        console.log('toto' + i)
    }
}
function hideText(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
        console.log('tutu' + i)
    }
}

function init(){ //initialization to French 
    langue(french,english);
}
init();



// SEARCH BAR //
function search_food() { 
    let input = document.getElementById('searchbar').value 
    input = input.toLowerCase(); //minuscule
    let arrayOfFood = document.getElementsByClassName('food'); //array with all the food
      
    for (i = 0; i < arrayOfFood.length; i++) {  
        if (arrayOfFood[i].innerHTML.toLowerCase().includes(input)) { 
            arrayOfFood[i].style.display="list-item";                  
        } 
        else { 
            arrayOfFood[i].style.display="none"; 
        } 
    } 
} 