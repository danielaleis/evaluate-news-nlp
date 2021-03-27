function inputChecker(inputText) {
    console.log("::: Running inputChecker :::", inputText);
    //If no input is given, the user is told
    if (inputText == "") {
        document.querySelector('#confidence').innerHTML = "The input was empty";
    };
    //Using regex to determine if the input is text or a URL
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    let inputType = "";
    if (inputText.match(regex)) {
        inputType = "url";
    } else {
        inputType = "text";
    }
    return inputType;
}

export {
    inputChecker
}