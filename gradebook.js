// TODO: Fetch data grom the PostgreSQL database (to be implemented later)
function fetchGradeData() {
    // This function will query the PostgreSQL database and return grade data
    console.log("Feteching grade data...");
    //Create a new request for the HTTP data
    let xhr = new XMLHttp();
    // This is the address on the machine we're asking for data
    let apiroute = "/api/grades";
    //When the request changes status we run this anonymous function
    xhr.onreadystatechange = function(){
        let results;
       //Check if we're done
        if(xhr.readystate === xhr.done){
            // Check if we're successful
            if(xhr.status !== 200){
                console.error('Could not get grades.
                              Status: ${xhr.status}');
            }
            // And then call the function to update the HTML with our data
            populateGradebook(JSON.parse(xhr.responseText));
        }
    }.bind(this);
    xhr.open("get", apiRoute, true);
    xhr.send();
}

// TODO: Populate the table with grade data
function populateGradebook(data) {
     // This function will take the fetched grade data and populate the table
     console.log("Populating gradebook with data:", data);
}

// TODO REMOVE THIS
// Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
// END REMOVE
