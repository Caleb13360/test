"use strict";
// Define function addToList()
function addToList()
{
    // Reference Variables (to items in the DOM)
    let dateRef = document.getElementById("dateInput");
    // TODO: Define and initialise reference variable "contentRef" for id "reminderInput"
    let contentRef = document.getElementById("reminderInput");
    // TODO: Define and initialise reference variable "countRef" for id "reminderCount"
    let countRef = document.getElementById("reminderCount");
    // TODO: Define and initialise reference variable "listRef" for id "reminderList"
    let listRef = document.getElementById("reminderList");

    // Working variables (used inside this code only)
    // TODO: Define and initialise variable "listContent" as an empty string
    let listContent = "";
    // Define and initialise variable "date" with date from input
    let date = new Date(dateRef.value);
        // Note: Here we've:
        //       retrieved the value from the input field in the reference "dateRef"
        //       and then passed it as an argument to the Date object to create 
        //       a new Date object with the date value from the user input
    // TODO: Define and initialise variable "content" with 
    //       the value from the reference "contentRef"
    let content = contentRef.value;
    // TODO: Define and initialise variable "count" with 
    //       the innerText from the reference "countRef" and
    //       convert it to a number using Number(value)
    let count = Number(countRef.innerText)
    // TODO: Define and initialise variable "item" as an empty string
    let item = "";

    // TODO: Write an if statement to check if there is an existing list
    //       on the page by checking the value of the count variable.
    //       If the count variable is greater than zero, then there are items
    //       on the HTML page inside "listRef". You can then get the current list
    //       and store it inside the "listContent" variable.
    //       Note that you can get the HTML contents of an element by using
    //       reference.innerHTML
    if (count > 0) {
        listContent = listContent + listRef.innerHTML
    }



    // TODO: Next, we need to create the item itself (to display on the page)
    //       You should store this in the variable "item"
    //       We want the HTML to look like this:
    //       <p>Content at Date</p>
    //       You can convert the date object into a String output using 
    //           date.toDateString()
    //       Remember that you have the text content available in the 
    //       variable "content"
    item = `<p>${content} at ${date.toDateString()}</p>`
    // TODO: Then, we need to append / concatenate the value in "item" to 
    //       the variable "listContent".
    listContent = listContent + item;

    // TODO: Next, we need to increment (+1) the value in the variable "count"
    count++
    // TODO: Finally, we need to display the result to the user.
    //       We can do this by setting the innerText and innerHTML for the 
    //       reference "countRef" and "listRef" with the values contained within
    //       the variables "count" and "listContent" respectively
    //       Remember that reference.innerText = value will set the text inside an element,
    //       and reference.innerHTML = value will set the HTML inside an element.
    //       (replace "reference" with the actual variable containing the reference.
    countRef.innerText = count;
    listRef.innerHTML = listContent;


}