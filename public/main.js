'use strict'
document.onload = () => {
    let partials = document.getElementsByClassName("partials");
    for (const partial of partials) {
        console.log(partial)
    }
}
function register(e) {
    e.preventDefault();
    let payload = {}
    let inputs = document.getElementsByClassName("register-input")
    for (const input of inputs) {
        payload[input.id] = input.value
    }
    fetch('http://localhost:4000/user/register', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}