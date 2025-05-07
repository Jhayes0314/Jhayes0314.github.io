// TODO: Fetch data from the PostgreSQL database (to be implemented later)
function fetchgradeData() {
    // This function will query the PostgreSQL database and return grade data
    console.log("Fetching grade data...");

    let xhr = new XMLHttpRequest();
    let apiRoute = "/api/grades";

    xhr.onreadystatechange = function () {
        // Check if request is complete
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // If response was successful
            if (xhr.status === 200) {
                // Directly pass parsed response into the table population function
                populateGradebook(JSON.parse(xhr.responseText));
            } else {
                console.error(`Could not get grades. Status: ${xhr.status}`);
            }
        }
    };

    xhr.open("GET", apiRoute, true);
    xhr.send();
}

// TODO: Populate the table with grade data
function populateGradebook(data) {
    console.log("Populating gradebook with data:", data);

    let tableElm = document.getElementById("gradebook");

    // Loop through the array of grade objects
    data.forEach(function (assignment) {
        let row = document.createElement("tr");

        let columns = {}; // Create an object to store column elements

        // Create name column (last name, first name)
        columns.name = document.createElement("td");
        columns.name.appendChild(
            document.createTextNode(assignment.last_name + ", " + assignment.first_name)
        );

        // Create grade column
        columns.grade = document.createElement("td");
        columns.grade.appendChild(
            document.createTextNode(assignment.total_grade)
        );

        // Add both columns to the row
        row.appendChild(columns.name);
        row.appendChild(columns.grade);

        // Add the row to the gradebook table
        tableElm.appendChild(row);
    });
}

// Start fetching grade data when the page loads
fetchgradeData();

