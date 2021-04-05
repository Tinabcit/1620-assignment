/* function to add a new note */
// Created a new array which we have to objects to present in the js file 
// were the body and title are object of the notes.
function note(title,body){
const notes = [
    {title: 'title'},
    {body: 'body'}
 ]
}
//Creating new Array
function note(push,notesObject) { //Making and declairing new notes by creating a new function
const notes = []
for (const notesObject of notes){
    if (notesObject.status === "new notes"){
        notes.push(notesObject)
    }
 }
}
// Creating second function which included a querySelector as well as add event Listerner too.
const firstnote = document.querySelector('#notes');
const output = document.querySelector('.notes-output');
output.textContent = notes.value;
noteone.addEventLisner('input',function(){
    output.textContent = notes.value;
});