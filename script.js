const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;

// Add an event listener for the Enter key
txtInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // Trigger the button element's click event
        checkBtn.click();
    }
});

checkBtn.addEventListener("click", () => {
    // split string, reverse, then rejoin
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span>${txtInput.value}</span> is not a palindrome :(`;
    } else {
        infoTxt.innerHTML = `Yes, <span>${txtInput.value}</span> is a palindrome :)`;
    }
});

txtInput.addEventListener("keyup", () => {
    // remove spaces and special characters from output
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput){
        return checkBtn.classList.add("active");
    } else {
        infoTxt.style.display = "none";
        checkBtn.classList.remove("active");
    }
});