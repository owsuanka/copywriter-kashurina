document.getElementById("open-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open");
    document.getElementById("bg-modal").classList.remove("invisible");
    document.getElementById("bg-modal").classList.remove("opacity-0");
})

document.getElementById("close-button").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open");
    document.getElementById("bg-modal").classList.add("invisible");
    document.getElementById("bg-modal").classList.add("opacity-0");
})

document.getElementById("bg-modal").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open");
    document.getElementById("bg-modal").classList.add("invisible");
    document.getElementById("bg-modal").classList.add("opacity-0");
})

// форма обратной связи
document.getElementById("open-modal-btn-sv").addEventListener("click", function(){
    document.getElementById("my-modal-sv").classList.add("open");
    document.getElementById("bg-modal-sv").classList.remove("invisible");
    document.getElementById("bg-modal-sv").classList.remove("opacity-0");
})

document.getElementById("close-button-sv").addEventListener("click", function(){
    document.getElementById("my-modal-sv").classList.remove("open");
    document.getElementById("bg-modal-sv").classList.add("invisible");
    document.getElementById("bg-modal-sv").classList.add("opacity-0");
})

document.getElementById("bg-modal-sv").addEventListener("click", function(){
    document.getElementById("my-modal-sv").classList.remove("open");
    document.getElementById("bg-modal-sv").classList.add("invisible");
    document.getElementById("bg-modal-sv").classList.add("opacity-0");
})

