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
    console.log(res.irony);
    //document.querySelector('#results').innerHTML = "<code>" + output + "</code>";
    document.querySelector('#confidence').innerHTML = "Confidence in the text is " + res.confidence + "%";
    //DOC: This field represents the confidence associated with the sentiment analysis performed on the text. 
    // Its value is an integer number in the 0-100 range.
    //Terminal bei demi lovato sagt: 92

    document.querySelector('#irony').innerHTML = "This text is " + res.irony;
    //DOC: two possible values: ironic/non-ironic. Test:Alanis.
    //Terminal bei alanis sagt: Nonironic


    document.querySelector('#subjectivity').innerHTML = "This text is " + res.subjectivity;
    //DOC: two possible values: objective/subjective. 
    //Ironic bekommt: subjective. Demi: subjective


 //   const response = await fetch('/all');
 //   const latestData = await response.json();

}

export { handleSubmit }


