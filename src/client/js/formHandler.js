// import { SingleEntryPlugin } from "webpack"

function handleSubmit(event) {
    event.preventDefault()

    // check input-type and pass through object
    const input = document.getElementById('name').value
    const inputType = Client.inputChecker(input)
    console.log("::: Form Submitted :::");
    const inputObject = {type:inputType, input: input};
    console.log(inputObject);
    fetch("http://localhost:8080/add", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputObject }),
        })
   .then(res => res.json())
    //hier updateUI einbauen?
    .then(function(res) {
        console.log(res);
        //DAL: war da = document.getElementById('results').innerHTML = res
        //setTimeout(function() {
          //  console.log('Howdy');
        //}, 1000);
        updateUI(res);
        // war (output)
    })
}

// Get the analysed sentimentes it to be displayed in the results section
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

function prepareContentUI(apiResponse){
    console.log(apiResponse);
    if(!apiResponse.confidence){
        return false;
    }  
     const preparedResult = {irony: "This text is " + apiResponse.irony, confidence: "Confidence in the text is " +  apiResponse.confidence + "%", subjectivity: "This text is " + apiResponse.subjectivity};
     return preparedResult;
};

export { handleSubmit, prepareContentUI }


