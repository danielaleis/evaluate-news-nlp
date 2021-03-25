function inputChecker(inputText) {
    console.log("::: Running inputChecker :::", inputText);
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