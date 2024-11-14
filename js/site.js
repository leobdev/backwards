
//1. Get the string from the page
//controller function
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);

}

//2. Reverse the string
//logic functiuon
function reverseString(userString){
    let revString = [];

    for (let index = userString.length -1; index >= 0; index--) {
       
        revString += userString[index];       
    }

    return revString;
}

//3. Display the reversed message
//view function
function displayString(revString){
    document.getElementById("msg").innerHTML = `Your string spelled backwards is <strong> ${revString}</strong>`;
    document.getElementById("alert").classList.remove("invisible");

}