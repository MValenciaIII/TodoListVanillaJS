//* Step 1: Get Input box working. 
//? Do I get anything back for typing in the box? 
//* Step 2: Grab the value of whatever is in the input box when I click "Add Task"
//? Can I get the eventLIstner to work and interact with my inputbox?
//* Step 3: Create the function Task Item Template
//
//*  STEP 4: How to differ from each row? 
//? If I select one input (Either CHeck box or remove) how can I tell them apart?
//TODO If I Click the checkbox give me a response. 


//* THIS IS GOING TO GRAB AND SAVE my inputbox NODE (ELEMENT)
let taskTextBox = document.querySelector("#inputTask");
//* GRABBING AND SAVING "add Task" NODE (ELEMENT)
let addButton = document.querySelector(".submitButton input");
//* I'm going to reference this NODE alot. SO I'll make a global variable. 
let mainContent = document.querySelector(".mainToDoList")


addButton.addEventListener("click", createTaskItem)




function createTaskItem() {
    
    //* TASK ROW AND CLASS NAMES BEING ADDED
    let taskRow = document.createElement("div");
    taskRow.classList.add("row");
    taskRow.classList.add("todoItem");
    taskRow.classList.add("d-flex");
    taskRow.classList.add("justify-content-center");
    taskRow.classList.add("mt-3");
    //! adding to mainToDoList div LINE 13
    mainContent.append(taskRow);

    //* CREATING CHECKBOX COLUMN
    let checkBoxColumn = document.createElement("div");
    checkBoxColumn.classList.add("col-1");
    //! APPENDING checkBoxColumn to created LINE 26 from earlier
    taskRow.append(checkBoxColumn);
    


    //* CREATING CHECKBOX
    let checkBoxInput = document.createElement("input");
    checkBoxInput.type = "checkbox"
    //! Appending input Checkbox to created column from LINE 36
    checkBoxColumn.append(checkBoxInput);

    //* ADDING EVENTLISTENER TO CHECKBOX
    checkBoxInput.addEventListener("input", () => {
        if(checkBoxInput.checked == true) {
            titleParagraph.classList.add("strikeThrough");
        } else {
            titleParagraph.classList.remove("strikeThrough");
        }
    })

    //* CREATING TASK TITLE COLUMN
    let titleColumn = document.createElement("div")
    titleColumn.classList.add("col-5")
    //! APPENDING titleColumn to LINE 26
    taskRow.append(titleColumn);

    //* CREATING Task paragraph Tag
    let titleParagraph = document.createElement("p");
    titleParagraph.innerHTML = taskTextBox.value
    titleColumn.append(titleParagraph);

    //*CREATING remove button COLUMN
    let buttonColumn = document.createElement("div")
    buttonColumn.classList.add("col-4");
    taskRow.append(buttonColumn);

    //*CREATING remove button
    let removeButton = document.createElement("button")
    removeButton.innerHTML = "X"
    buttonColumn.append(removeButton);

    //* CREATE EventListener REMOVE
    removeButton.addEventListener("click", () => {
        taskRow.remove();
        //titleParagraph.remove();
    })

    //! CLEARING THE TEXT BOX
    taskTextBox.value = "";
}


