// Let’s set the onClick property of all the buttons when the webpage loads.

//ensures the page is loaded before functions are executed.
window.onload = function(){ 
    document.getElementById("reservation").onsubmit = store;
   //  document.getElementById("clearButton").onclick = clearStorage;
    // document.getElementById("removeButton").onclick = removeItem;
    // document.getElementById("retrieveButton").onclick = retrieveRecords;
} // end function onload

// The functions will only be accessible after the page has finished loading. 
// This is specified by the window.onload method.

/*
When the submit button is clicked, it takes the user input and passes 
it to the store function in the main.js file. The 
document.getElementById('carBrand').value gets the user input. 
These values are then passed to the car object and stored in local 
storage using the setItem method.
*/

/**
 * stores items in the localStorage
 */
 function reservation() { 
    var name = document.getElementById('yourName').value;
    var email = document.getElementById('yourEmail').value;
    var phone = document.getElementById('yourPhone').value; 
    var date = document.getElementById('checkin-date').value; 
    var time = document.getElementById('checkin-time').value; 
    var packages = document.getElementById('packages-selection').value; 
    var detail = document.getElementById('more-detail').value; 

    //gets the key from the user

    const booking = {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time,
        packages: packages,
        detail: detail,
    }

    window.localStorage.setItem(key,JSON.stringify(booking));  
    //converting object to string
} // end function store

/*
The retrieveButton will invoke the retrieveRecords function when clicked. 
This method fetches items from the localStorage using the getItem function.

var paragraph = document.createElement("p") 
creates a new paragraph component in our web page.

document.createTextNode(records); 
helps create the text that will be displayed to the user.

The text node is then added to the paragraph tag by paragraph.appendChild(infor).

These components are then shown in a specific place on the web page by 
document.getElementById("retrieve") and element.appendChild(paragraph).
*/

/**
 * retrieves items in the localStorage
 */

/*
function retrieveRecords(){ 
    console.log("retrieve records");
     var key = document.getElementById('retrieveKey').value;
    var records = window.localStorage.getItem(key);
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
} // end function retrieveRecords
*/
/*
removeButton invokes removeItem(). This method will delete a value from the local 
storage using the removeItem function.
*/

/**
 * deletes item from localStorage
 */
/*
function removeItem(){  
    var key = document.getElementById('removeKey').value;
    localStorage.removeItem(key)
    console.log("remove items");
} // end function removeItem
*/
/*
clearButton calls the clearStorage(). The clear() method is used to remove all 
values in the local storage.
*/

/**
 * clears the entire localStorage
 */
/*
function clearStorage(){ 
    localStorage.clear()
    console.log("clear records");
} // clearStorage
*/
/*
window.onstorage = function(e) {
    console.log("The " + e.key 
    + " value was changed from " + e.oldValue + " to " + e.newValue);
    }
    */