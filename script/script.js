document.addEventListener('DOMContentLoaded', function () {
    var textContainer = document.getElementById('text-container');
    var sentences = document.getElementsByClassName('sentence');

    // Добавляем кнопку после каждого предложения
    for (var i = 0; i < sentences.length; i++) {
        var button = document.createElement('button');
        button.innerText = 'btn ' + (i + 1);
        button.addEventListener('click', function () {
            alert('Вы нажали кнопку!');
            //speak('Hallo, wie geht es dir.');
            //speak(window.getSelection());
        });

        sentences[i].appendChild(button);
    }
});
// =================================================================
function speak(text) { 
    // Сам синтезатор - Button
    const message = new SpeechSynthesisUtterance();
    message.lang = "de-DE";
    //text = 'Hallo Vasya';

    //text = 'Zuerst hörst du dir das Übungsdiktat einmal "gelesen" an. Danach spielst du "diktiert" ab.';
    //text += 'Die vielen Sprechpausen sind dafür da, dass du die Audio-Datei pausierst, um mitzukommen.';
    //text += 'Sollte dir das trotzdem zu schnell sein, gibt es unter dem Audio-Player einen Slider, mit dem du die Wiedergabegeschwindigkeit anpassen kannst.';

    message.text = text;
    window.speechSynthesis.speak(message)
}

function speakWithPause(text) {
    // Произнести с паузой после каждого предложения
    //alert('Button press..')
    let textArea = document.querySelector('.textarea1');
    let words = textArea.value.split('\n'); // \n .
    speak(words[0]);
    for (let i=1; i<words.length; i++){
        setTimeout(function(){
            speak(words[i]);
        }, 11000*i);
        // !! доработать паузы между фразами !!!
        //console.log(words[i]);  
        //sleep(3000);
        //console.log('3000 pass');
    }

}

function sleep(milliseconds) {
    const date = Date.now();
    //console.log(date);
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while ((currentDate - date) < milliseconds);
  }
// =================================================================
function highlightText(sentenceClass) {  //Обработчик - ondblclick
    //var textElement = document.getElementById('text');
    let textElement = document.querySelector(sentenceClass);
    textElement.classList.toggle('highlighted');

    var range = document.createRange();
    range.selectNodeContents(textElement);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    speak(window.getSelection());

}

function splitt(arg) { //Разделяет текст на строки
    let textElement = document.querySelector(arg);
    let words = textElement.innerText.split('\n');
    //alert('Split machen..')
    //console.log(words);
    console.log(words[0]);
    //let textArea = document.querySelector('.w3review');
    for (let i=0; i<words.length; i++){
        //alert(words[i]);
        console.log(words[i]);
        //textArea.innerHTML.valueOf = 'AAA';
    }
    
}  
// =================================================================
function split2() { //Разделяет текст на строки (\n)
    clearP(); //очищаем экран
    // в окошке слева
    let textArea = document.querySelector('.textarea1');
    let words = textArea.value.split('\n'); // \n .
    //console.log(words[1]);
    for (let i=0; i<words.length; i++){
        //console.log(words[i]);
        addP('.div2',words[i],i);
    }
    //addP('.div2','New Txt'); // параметры вызова функции

    // в окошке справа
    textArea = document.querySelector('.textarea2');
    words = textArea.value.split('\n');
    //console.log(words[1]);
    for (let i=0; i<words.length; i++){
        //console.log(words[i]);
        addP('.div3',words[i],i);
    }
}  

function split3() { //Разделяет текст на строки (.)
    clearP(); //очищаем экран
    let textArea = document.querySelector('.textarea1');
    let words = textArea.value.split('.'); // \n .
    for (let i=0; i<words.length; i++){
        addP('.div2',words[i],i);
    }

    textArea = document.querySelector('.textarea2');
    words = textArea.value.split('\n');
    for (let i=0; i<words.length; i++){
        addP('.div3',words[i],i);
    }
}
// ==========================================================================
 
function addP(nameSelector,newTxt,i){
    //<p class="sentence1" ondblclick="highlightText('.sentence1')"></p>

    // Создание нового элемента <p>
    var newParagraph = document.createElement('p');
    //var newParagraph1 = document.createElement('p');

    // Добавление текста в новый элемент
    //var textNode = document.createTextNode('Новый элемент добавлен с помощью JavaScript.');
    var textNode = document.createTextNode(newTxt);
    //var textNode = document.createTextNode(newTxt + '  -  перевод');
    newParagraph.appendChild(textNode);
    //newParagraph1.innerText = '..';
    // Уст.доп.атрибуты
    newParagraph.setAttribute('class','sent'+i);
    let attr = `highlightText('.sent${i}')`
    newParagraph.setAttribute('ondblclick',attr);
    newParagraph.setAttribute('style','margin: 15px 5px'); // отступы параграфов

    // Получение ссылки на блок <div>
    var myDiv = document.querySelector(nameSelector);

    // Добавление нового элемента <p> в блок <div>
    myDiv.appendChild(newParagraph);
    //myDiv.append(newParagraph, newParagraph1);

}

function clearP(){
    //alert('Нажали кнопку Clear');
    let pAll = document.querySelectorAll('p');
    for(let i=0; i<pAll.length; i++){
        console.log(pAll[i].innerText);
        pAll[i].remove();

    }
    //location.reload();
}
// ==========================================================================
function countWords(){
// разделение текста на слова,поиск совпадений и группировка
clearP(); //очищаем экран
let allWords = [];
let count = 0;
let countuniq = 0;
let textArea = document.querySelector('.textarea1');
let str = textArea.value.split('\n');

     for (let i=0; i<str.length; i++){
         let words = str[i].split(' '); // разделяем на слова
         //console.log(words.length);
         for (let y=0; y<words.length; y++){
             count++;
            //console.log(words[y]);
            //обрабатываем каждое слово
            if (allWords.includes(words[y]) == false){
                allWords.push(words[y]);
                countuniq++;
            }
         }
    }

    ////allWords.sort(); // сортировка по алфавиту
    allWords.unshift('Уникальных слов: '+countuniq);
    allWords.unshift('Всего слов в тексте: '+count);
    //Вывод массива на экран
    //ver.1
    for (let i=0; i<allWords.length; i++){
        addP('.div2',allWords[i],i);
    }
    //addNewArray('.div3'); //- лучше подключить переводчика с API

    //ver.2
    //createNewTextArea('.div2', allWords);

    //console.log('Всего слов в тексте: '+count);
    //console.log('Уникальных слов: '+countuniq);
    //console.log(allWords);
}
// ==========================================================================
