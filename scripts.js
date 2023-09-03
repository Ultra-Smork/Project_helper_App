const Body = document.querySelector("body");
const nameList = document.querySelector("#nameList");
const DeleteAll = document.querySelector("#DeleteAll");
const ButtonToAddList = document.querySelector(".addListButton");

Body.addEventListener("change", (event) => {
    if (event.target.classList.contains("checkBox")) {
        const parentLi = event.target.parentElement;
        if (event.target.checked) {
            parentLi.style.textDecoration = "line-through";
            parentLi.style.textDecorationColor = "rgb(159, 147, 131)";
            parentLi.style.textDecorationThickness = "2px";
        } else {
            parentLi.style.textDecoration = "none";
        }

    }
});

// Event listener for button clicks
Body.addEventListener("click", (event) => {
    if (event.target.classList.contains("buttonToAdd")) { // Change to "buttonToAdd"
        const parentDiv = event.target.parentElement;
        const ol = parentDiv.querySelector(".toDoList");
        const whatToAdd = parentDiv.querySelector(".whatToAdd");

        if (whatToAdd.value) {
            const li = document.createElement("li");
            const CheckBox = document.createElement("input");

            CheckBox.setAttribute("type", "checkbox");
            CheckBox.setAttribute("class", "checkBox");
            li.appendChild(document.createTextNode(whatToAdd.value));
            li.classList.add("Things");
            ol.appendChild(li);
            li.appendChild(CheckBox);
            whatToAdd.value = "";
        }
    }
});


let divCounter = 0;

//▼ ▲

ButtonToAddList.addEventListener("click", () => {
    if (nameList.value) {
        const newDiv = document.createElement("div");
        newDiv.className = "Frames";
        newDiv.style.position = "relative";
        newDiv.appendChild(document.createTextNode(nameList.value));
        nameList.value = "";
        
        const Space = document.createElement("br");

        const newButtonToExpand = document.createElement("button");
        newButtonToExpand.classList.add("collapseButton");
        newButtonToExpand.classList.add("buttons");
        newButtonToExpand.textContent = "▲";

        const newSpan = document.createElement("span");
        newSpan.classList.add("Names");
        newSpan.textContent = nameList.value;

        const newOl = document.createElement("ol");
        newOl.className = "toDoList";
        newDiv.appendChild(newOl);

        const newInputLine = document.createElement("input");
        newInputLine.className = "Names whatToAdd"; // Combine class names
        newDiv.appendChild(newInputLine);

        const newButtonToAdd = document.createElement("button");
        newButtonToAdd.className = "buttons buttonToAdd"; // Combine class names
        newButtonToAdd.appendChild(document.createTextNode("Add In This List"));

        const newButtonToDel = document.createElement("button");
        newButtonToDel.className = "buttons buttonToDel"; // Combine class names
        newButtonToDel.appendChild(document.createTextNode("Delete This Window"));

        // Color menu elements
        const newColorChangeMenu = document.createElement("div");
        newColorChangeMenu.classList.add("Frames");
        newColorChangeMenu.classList.add("SubColormenu");
        newDiv.appendChild(newColorChangeMenu);

        const newHolderLabel = document.createElement("label");
        newHolderLabel.classList.add("colorHolderText");
        newHolderLabel.textContent = "Holder:";
        newColorChangeMenu.appendChild(newHolderLabel);

        const newHolderInput = document.createElement("select");
        newHolderInput.setAttribute("id", "newHolderInput");
        const Residents = document.querySelector("#Residents");
        const listOfResidents = Residents.querySelectorAll("label");
        const selectPlaceHolder = document.createElement("option");
        selectPlaceHolder.setAttribute("value", "")
        selectPlaceHolder.textContent = "Select";
        newHolderInput.appendChild(selectPlaceHolder);
        let counter = 1;
        listOfResidents.forEach((element) => {
            const newSelectHolder = document.createElement("option");
            newSelectHolder.setAttribute("value", `${counter}`)
            newSelectHolder.textContent = element.innerHTML;
            newHolderInput.appendChild(newSelectHolder);
            counter++;
        }) 
        newColorChangeMenu.appendChild(newHolderInput);
        
        const newRedColorLabel = document.createElement("label");
        newRedColorLabel.classList.add("colorMenuText");
        newRedColorLabel.classList.add("Things")
        newRedColorLabel.textContent = "LightRed";
        newColorChangeMenu.appendChild(newRedColorLabel);

        const newYellowColorLabel = document.createElement("label");
        newYellowColorLabel.classList.add("colorMenuText");
        newYellowColorLabel.classList.add("Things")
        newYellowColorLabel.textContent = "LightGreen";
        newColorChangeMenu.appendChild(newYellowColorLabel);

        const newPinkColorLabel = document.createElement("label");
        newPinkColorLabel.classList.add("colorMenuText");
        newPinkColorLabel.classList.add("Things")
        newPinkColorLabel.textContent = "Purple";
        newColorChangeMenu.appendChild(newPinkColorLabel);

        const newBlackColorLabel = document.createElement("label");
        newBlackColorLabel.classList.add("colorMenuText");
        newBlackColorLabel.classList.add("Things")
        newBlackColorLabel.textContent = "Cyan";
        newColorChangeMenu.appendChild(newBlackColorLabel);

        const applyCurrentColor = document.createElement("button");
        applyCurrentColor.classList.add("buttons");
        applyCurrentColor.textContent = "Apply";
        applyCurrentColor.setAttribute("id", "colorApplyButton");
        newColorChangeMenu.appendChild(applyCurrentColor);

        const ChooseButtonRed = document.createElement("input");
        ChooseButtonRed.setAttribute("type", "radio");
        ChooseButtonRed.setAttribute("name", "Color");
        ChooseButtonRed.setAttribute("id", "redButton");
        ChooseButtonRed.setAttribute("data-color-value", "1");
        newColorChangeMenu.appendChild(ChooseButtonRed)

        const ChooseButtonYellow = document.createElement("input");
        ChooseButtonYellow.setAttribute("type", "radio");
        ChooseButtonYellow.setAttribute("name", "Color");
        ChooseButtonYellow.setAttribute("id", "yellowButton");
        ChooseButtonYellow.setAttribute("data-color-value", "2");
        newColorChangeMenu.appendChild(ChooseButtonYellow)

        const ChooseButtonPink = document.createElement("input");
        ChooseButtonPink.setAttribute("type", "radio");
        ChooseButtonPink.setAttribute("name", "Color");
        ChooseButtonPink.setAttribute("id", "pinkButton");
        ChooseButtonPink.setAttribute("data-color-value", "3");
        newColorChangeMenu.appendChild(ChooseButtonPink)

        const ChooseButtonBlack = document.createElement("input");
        ChooseButtonBlack.setAttribute("type", "radio");
        ChooseButtonBlack.setAttribute("name", "Color");
        ChooseButtonBlack.setAttribute("id", "blackButton");
        ChooseButtonBlack.setAttribute("data-color-value", "4");
        newColorChangeMenu.appendChild(ChooseButtonBlack)

        const submitTaskHolder = document.createElement("button");
        submitTaskHolder.setAttribute("class", "buttons");
        submitTaskHolder.setAttribute("id", "submitTaskHolderButton");
        submitTaskHolder.textContent = "Submit";
        newColorChangeMenu.appendChild(submitTaskHolder);

        const changeTaskHolder = document.createElement("button");
        changeTaskHolder.setAttribute("class", "buttons hidden");
        changeTaskHolder.setAttribute("id", "changeTaskHolderButton");
        changeTaskHolder.textContent = "Change";
        newColorChangeMenu.appendChild(changeTaskHolder);

        submitTaskHolder.addEventListener("click", () => {
            const selectElement = newColorChangeMenu.querySelector("select");
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            
            if (selectedOption.value != "") {
                const selectedText = selectedOption.textContent;
                newHolderLabel.textContent = `Holder: ${selectedText}`;
                
                submitTaskHolder.classList.add("hidden");
                selectElement.classList.add("hidden");
                changeTaskHolder.classList.remove("hidden");
            }
        });
        
        changeTaskHolder.addEventListener("click", () => {
            newHolderLabel.textContent = "Holder:";
            submitTaskHolder.classList.remove("hidden");
            newColorChangeMenu.querySelector("select").classList.remove("hidden");
            changeTaskHolder.classList.add("hidden");
        });
        
        applyCurrentColor.addEventListener("click", () =>{
            const selectedRadio = newColorChangeMenu.querySelector("input[name='Color']:checked")
            if(selectedRadio){
                const selectedColorValue = selectedRadio.getAttribute("data-color-value");
            
                switch(selectedColorValue){
                case "1":
                    newDiv.style.color = "#b3344b";
                    newColorChangeMenu.style.color ="#b3344b";
                    newDiv.setAttribute("data-color-value", "1")
                    break;
                case "2":
                    newDiv.style.color = "#728c31";
                    newColorChangeMenu.style.color = "#728c31";
                    newDiv.setAttribute("data-color-value", "2")
                    break;
                case "3":
                    newDiv.style.color = "#855696";
                    newColorChangeMenu.style.color = "#855696";
                    newDiv.setAttribute("data-color-value", "3")
                    break;
                case "4":
                    newDiv.style.color = "#025559";
                    newColorChangeMenu.style.color = "#025559";
                    newDiv.setAttribute("data-color-value", "4")
                    break;
                }
            }
        })


        // Div childs
        newDiv.appendChild(newButtonToExpand);
        newDiv.appendChild(newSpan);
        newDiv.appendChild(newButtonToDel);
        newDiv.appendChild(newButtonToAdd);


        newDiv.appendChild(Space);

        Body.appendChild(Space);
        Body.appendChild(newDiv);

        newButtonToDel.setAttribute("id", divCounter);
        divCounter++;

        newButtonToDel.addEventListener("click", () => {
            Body.removeChild(newDiv);
            Body.removeChild(Space);
        });

    }
    DeleteAll.addEventListener("click", () => {
        const elementsToRemove = Array.from(Body.children); // Create a copy of children
        elementsToRemove.shift();
        elementsToRemove.shift();
        elementsToRemove.shift();
        elementsToRemove.forEach(element => {
            Body.removeChild(element);
        });
    });
    
});
//var siblings = getSiblings(elem);

Body.addEventListener("click", (event) =>{
    if(event.target.classList.contains("collapseButton")){
        const div = event.target.parentElement;
        const ol = div.querySelector(".toDoList");
        const inputField = div.querySelector(".whatToAdd");
        const addButton = div.querySelector(".buttonToAdd");
        const deleteButton = div.querySelector(".buttonToDel");
        const collapseButton = div.querySelector(".collapseButton");
        const ColorMenu = div.querySelector("div")

        ol.classList.toggle("hidden");
        inputField.classList.toggle("hidden");
        addButton.classList.toggle("hidden");
        deleteButton.classList.toggle("hidden");
        ColorMenu.classList.toggle("hidden");


        const isCollapsed = collapseButton.textContent == "▲";
        collapseButton.textContent = isCollapsed ? "▼" : "▲";
    }
});


const deadLineSubmit = document.querySelector("#deadLineSubmit");
const deadLineReset = document.querySelector("#deadLineReset");


// 00:00:00:00
deadLineSubmit.addEventListener("click", () => {
    const Timer = document.querySelector("#Timer");
    const Timer1 = document.querySelector("#Timer1");
    const deadLineReset = document.querySelector("#deadLineReset");
    let listDeadLine = Timer.value.split("/");
    let deadLineDate = "";

    for (let i = 2; i >= 0; i--) {
        deadLineDate += listDeadLine[i];
        if (i > 0) {
            deadLineDate += '-';
        }
    }
    deadLineDate += `T00:00:00`;

    const timeFuture = new Date(deadLineDate);

    function updateCountdown() {
        const timeNow = Date.now();
        const deltaTime = timeFuture - timeNow;

        const millisecondsInADay = 1000 * 60 * 60 * 24;
        const millisecondsInAnHour = 1000 * 60 * 60;
        const millisecondsInAMinute = 1000 * 60;
        const millisecondsInASecond = 1000;

        const daysLeft = Math.floor(deltaTime / millisecondsInADay);
        const hoursLeft = addZero(Math.floor((deltaTime % millisecondsInADay) / millisecondsInAnHour));
        const minutesLeft = addZero(Math.floor((deltaTime % millisecondsInAnHour) / millisecondsInAMinute));
        const secondsLeft = addZero(Math.floor((deltaTime % millisecondsInAMinute) / millisecondsInASecond));

        // Display the calculated remaining time only if it has changed
        const newContent = `${daysLeft} days, ${hoursLeft}:${minutesLeft}:${secondsLeft}`;
        if (Timer1.textContent !== newContent) {
            Timer1.textContent = newContent;
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    Timer.classList.add("hidden");
    Timer1.classList.remove("hidden");
    deadLineSubmit.classList.add("hidden");
    deadLineReset.classList.remove("hidden");

    updateCountdown();
    
    deadLineReset.addEventListener("click", () => {
        clearInterval(countdownInterval); // Clear the interval properly
        Timer1.textContent = ''; // Clear the displayed time
        deadLineSubmit.classList.remove("hidden");
        Timer1.classList.add("hidden");
        Timer.classList.remove("hidden");
        deadLineReset.classList.add("hidden");
    });

    function addZero(element) {
        return (element < 10 ? '0' : '') + element;
    }
});

const changeAmount = document.querySelector("#changeAmount");
const submitAmount = document.querySelector("#submitAmount");
const acceptAll = document.querySelector("#acceptAll");
submitAmount.addEventListener("click", () => {
    const amountResidents = parseInt(document.querySelector("#amountResidents").value); // Parse as integer
    const ThisDiv = submitAmount.parentElement;
    for (let i = 0; i <= amountResidents; i++) {
        const inputElement = document.createElement("input");
        inputElement.setAttribute("placeholder", "Name - Role")
        inputElement.classList.add("whatToAdd"); // Add class separately
        ThisDiv.appendChild(inputElement);
    }
    submitAmount.classList.add("hidden");
    changeAmount.classList.remove("hidden");
    acceptAll.classList.remove("hidden");
});

changeAmount.addEventListener("click", () => {
    const ThisDiv = submitAmount.parentElement;
    const amountResidents = document.querySelector("#amountResidents").value;
    const Residents = ThisDiv.querySelectorAll("input");
    const labeled = ThisDiv.querySelectorAll("label");
    Residents.forEach((element) =>{
        ThisDiv.removeChild(element);
    });
    labeled.forEach((element) =>{
        ThisDiv.removeChild(element);
    });
    changeAmount.classList.add("hidden");
    acceptAll.classList.add("hidden")
    submitAmount.classList.remove("hidden");
})

acceptAll.addEventListener("click", () => {
    const ThisDiv = submitAmount.parentElement;
    const Residents = ThisDiv.querySelectorAll("input");

    for(let resident of Residents){
        const labeled = document.createElement("label");
        labeled.classList.add("labeled");
        labeled.textContent = resident.value;
        ThisDiv.appendChild(labeled);
        ThisDiv.removeChild(resident);
    }
    acceptAll.classList.add("hidden");
})


const SearchButton = document.querySelector("#searchButton");
const searchByOwner = document.querySelector("#searchByOwner");
const colorFilter = document.querySelector("#colorFilter");
const updateButton = document.querySelector("#updateButton");
const deleteButton = document.querySelector("#deleteButton");
updateButton.addEventListener("click", () =>{
    const Residents = document.querySelector("#Residents");
    const listOfResidents = Residents.querySelectorAll("label");
    let counter = 1;
    listOfResidents.forEach((element) => {
        const newSelectHolder = document.createElement("option");
        newSelectHolder.setAttribute("value", `${counter}`)
        newSelectHolder.textContent = element.innerHTML;
        if(!searchByOwner.children.item(counter)){
            searchByOwner.appendChild(newSelectHolder);
        }
        counter++;
    })
    deleteButton.addEventListener("click", () => {
        for (let i = searchByOwner.options.length - 1; i >= 0; i--) {
            if (searchByOwner.options[i].value !== "") {
                searchByOwner.remove(i);
            }
        }
    })
})

SearchButton.addEventListener("click", () => {
    const colorToSearchValue = parseInt(colorFilter.options[colorFilter.selectedIndex].value);
    console.log(`Selected color value: ${colorToSearchValue}`);
    
    const elementsToSearch = Array.from(Body.children);
    elementsToSearch.shift();
    elementsToSearch.shift();
    elementsToSearch.shift();
    
    elementsToSearch.forEach((element) => {
        const elementColorValue = parseInt(element.getAttribute("data-color-value"));
        console.log(`Element color value: ${elementColorValue}`);
        
        if (colorToSearchValue === 0 || elementColorValue === colorToSearchValue) {
            element.classList.remove("hidden");
            console.log(`Element match: ${elementColorValue}`);
        } else {
            element.classList.add("hidden");
            console.log(`Element does not match: ${elementColorValue}`);
        }
    });
    
    // If "All colors" is selected, remove hidden from all elements
    if (isNaN(colorToSearchValue)) {
        elementsToSearch.forEach((element) => {
            element.classList.remove("hidden");
        });
        console.log(`Removing hidden from all elements`);
    }
});




 //       4.Окно с поиском (по цветам и холдерам)
