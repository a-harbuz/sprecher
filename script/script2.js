function createNewTextArea(nameSelector, array=[]){
    var newTextarea1 = document.createElement('textarea');
    var newTextarea2 = document.createElement('textarea');

    newTextarea1.style.width = '50%';
    newTextarea1.style.height = '1300px';

    newTextarea2.style.width = '50%';
    newTextarea2.style.height = '1300px';

    // Добавление нового элемента <p> в блок <div>
    var myDiv = document.querySelector(nameSelector);
    myDiv.appendChild(newTextarea1);
    myDiv.appendChild(newTextarea2);

    //for (let i=0; i<allWords.length; i++){
    //    addP('.div2',allWords[i],i);
    //}

    //let textArea = document.querySelector('.textarea1');
    newTextarea1.value = array;
}

function addNewArray(nameSelector){
    var newTextarea1 = document.createElement('textarea');
    newTextarea1.style.width = '100%';
    newTextarea1.style.height = '1300px';
    newTextarea1.style.marginTop = '80px';
    newTextarea1.value = 'Insert Text...';
    
    // Добавление нового элемента <textarea> в блок <div>
    var myDiv = document.querySelector(nameSelector);
    myDiv.appendChild(newTextarea1);

}