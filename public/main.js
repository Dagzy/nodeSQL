'use strict'
window.onload = () => {    
    window.links = document.getElementsByClassName("nav-link");
    window.partials = document.getElementsByClassName("partial")
    for (const link of links) {
        link.addEventListener('click', showArticle)
    }
}
function showArticle(e){
    e.preventDefault();
    let t = e.target.innerText.toLowerCase().trim();
    let partial = document.getElementById(t);
    hideArticles();
    partial.classList.remove("hidden");
}
function hideArticles(){
    for (const partial of partials) {
        partial.classList.add("hidden")
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