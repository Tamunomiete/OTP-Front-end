const otpcodes = document.querySelectorAll(".code"); // Selecting all the  6 code input fields
const submitbtn = document.querySelectorAll(".submit");

otpcodes[0].focus() //  I'm giving focus to the first otpcode element as default

otpcodes.forEach((code, idx) => { //                     // loop through  each code 
    code.addEventListener("keydown", (e) => { //listen for keydown event 
        if (e.key >= 0 && e.key <= 9) {
            otpcodes[idx].value = ""
            setTimeout(() => otpcodes[idx + 1].focus(), 10)
        } else if (e.key === "Backspace") {
            setTimeout(() => otpcodes[idx - 1].focus(), 10)
        }


    })
});