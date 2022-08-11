window.addEventListener("load", function(event) {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        // console.log("it runs")
        response.json().then( function(json) {
            // console.log(json);
            json.sort((a,b) => a.hoursInSpace - b.hoursInSpace);
            const container = document.getElementById("container");
            container.innerHTML = `<h3>Total Astronauts = ${json.length}</h3>
            <hr>`;
            for (i = 0; i < json.length; i++) {
                container.innerHTML += `
                    <div class="astronaut">
                    <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li class="${json[i].active}">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                    `;
            };
        });
    });
});