function handleSubmit(event) {
    event.preventDefault()

    // check input-type and pass through object
    const input = document.getElementById('name').value
    console.log("::: Form Submitted :::");
    document.querySelector('#confidence').innerHTML = "Preparing your result";
    document.querySelector('#irony').innerHTML = "";
    document.querySelector('#subjectivity').innerHTML = "";
    const inputType = Client.inputChecker(input)
    const inputObject = {
        type: inputType,
        input: input
    };
    console.log(inputObject);


    fetch("http://localhost:8080/add", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inputObject
            }),
        })
        .then(res => res.json())
        .then(function (res) {
            console.log(res);
            updateUI(res);
        })
}

// Get the analysed sentiments it to be displayed in the results section
async function updateUI(res) {
    const preparedResult = prepareContentUI(res);
    console.log(res.irony);
    document.querySelector('#confidence').innerHTML = preparedResult.confidence;
    // Its value is an integer number in the 0-100 range.
    document.querySelector('#irony').innerHTML = preparedResult.irony;
    // Two possible values: ironic/non-ironic. 
    document.querySelector('#subjectivity').innerHTML = preparedResult.subjectivity;
    // Two possible values: objective/subjective. 
}

// Prepare Content to be displayed in the results section without Uppercase
function prepareContentUI(apiResponse) {
    console.log(apiResponse);
    if (!apiResponse.confidence) {
        return false;
    }
    const irony = apiResponse.irony
    const subjectivity = apiResponse.subjectivity
    const preparedResult = {
        irony: "This text is " + irony.toLowerCase() + ".",
        confidence: "Confidence in the text is " + apiResponse.confidence + " percent.",
        subjectivity: "This text is " + subjectivity.toLowerCase() + "."
    };
    return preparedResult;
};

export {
    handleSubmit,
    prepareContentUI
}