
const SearchButton = document.getElementById("search-btn");
const InputBox = document.getElementById("search-text");
const MyDiv = document.getElementById("results");
const ClearButton = document.getElementById("clear-btn");

SearchButton.addEventListener("click", function () {
    // Logic to collect the information entered
    const enteredText = InputBox.value;

    // Fetch images from Unsplash API
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${enteredText}&client_id=Twsck62GqGe3K2YU8GvZaMYsdNY6c-aXhzSsyOZWgQk`)
        .then(function (output) {
            return output.json();
        })
        .then(function (result) {
            MyDiv.innerHTML = ''; // Clear old images
            result.results.map(function (ele) {
                const MyImg = document.createElement("img");
                MyImg.setAttribute("src", ele.urls.small);
                MyDiv.append(MyImg);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
});

ClearButton.addEventListener("click", function () {
    // Clear input and results
    InputBox.value = "";
    MyDiv.innerHTML = "";
});
