document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let event = document.getElementById("event").value;
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, event})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Registration failed");
        }
        return response.text();
    })
    .then(data => alert(data))
    .catch(error => {
        console.log(error);
        alert("Registration failed");
    });
};