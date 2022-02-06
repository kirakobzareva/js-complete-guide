const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdropDiv = document.getElementById("backdrop");
const cancelModalButton = addMovieModal.querySelector(".btn--passive");
const addMovieButton = cancelModalButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const films = [];



function toggleMovieModal() {
    addMovieModal.classList.toggle("visible");
    toggleBackground();
}

function toggleBackground() {
    backdropDiv.classList.toggle("visible");
}

function backdropClickHandler() {
    toggleMovieModal();
    clearUsrInputs();
}

function clearUsrInputs() {
    for (let userInput of userInputs) {
        userInput.value = "";
    }
}

function addMovieHandler() {
    let titleValue = userInputs[0].value;
    let imageUrl = userInputs[1].value;
    let rating = userInputs[2].value;

    if (titleValue.trim() === "" || imageUrl.trim() === "" || rating.trim() === "" || +rating < 1 || rating > 5) {
        alert("Please provide valid input");
        return;
    }

    let newFilm = {
        title: titleValue,
        image: imageUrl,
        rating: rating
    };

    films.push(newFilm);
    //console.log(films);
    toggleMovieModal();
    clearUsrInputs();
}



startAddMovieButton.addEventListener("click", toggleMovieModal);
cancelModalButton.addEventListener("click", backdropClickHandler);
addMovieButton.addEventListener("click", addMovieHandler);
