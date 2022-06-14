const listSection = document.getElementById("listSection");
const unorderedList = document.createElement("ul");
const childrenList = unorderedList.children;
listSection.appendChild(unorderedList);
//unorderedList.style = "list-style: none"


//textbar and button
const textBar = document.getElementById("textBar");
const submitButton = document.getElementById("submitButton");
const clearButton = document.getElementById("clearButton");




clearButton.addEventListener("click", function () {
    unorderedList.innerHTML = '';   
    console.log(unorderedList.children);
})

submitButton.addEventListener("click", function () {
    if (textBar.value === "") {

    } else {
        //list items
    const newListItem = document.createElement("li");
    newListItem.innerText = textBar.value;
    unorderedList.appendChild(newListItem);
        //mouse enter
    newListItem.addEventListener("click", function () {      
        this.appendChild(editButton);
        this.appendChild(deleteButton);
        
    });
                  
    newListItem.onmouseleave = function () {
        editButton.remove();
        deleteButton.remove();
    }
          

    //deleteButton
    const deleteButton = document.createElement("button");
    deleteButton.className = "listButton"
    deleteButton.innerText = "delete";
    //deleteButton listener
    deleteButton.addEventListener("click", function () {
        this.parentNode.remove();
        console.log(this);
     //////////
    })
    //edit Button and cancel button
    const editButton = document.createElement("button");
    editButton.className = "listButton";
    const cancelButton = document.createElement("button");
    cancelButton.className = "listButton";
    cancelButton.innerText = "cancel"
    editButton.innerText = "edit";
    //editButton Listener
    editButton.addEventListener("click", function (e) {
        //new edit bar and submit button
        e.stopPropagation();
        editButton.remove();
        deleteButton.remove();
        submitButton.addEventListener("click", function () {
            editButton.remove();
            deleteButton.remove();
        })
        editButton.remove();
        deleteButton.remove();
        const  editBar = document.createElement("input");
        editBar.className = "listButton";
        editBar.type = "text";
        editBar.placeholder = "Change your task"
        editBar.addEventListener("click", function (e) {
            e.stopPropagation();
        })
        const newSubmitButton = document.createElement("button");
        newSubmitButton.className = "listButton";
        newSubmitButton.innerText = "o"
        newListItem.append(editBar);
        newListItem.append(newSubmitButton);
        //appending cancell button
        newListItem.append(cancelButton);
        cancelButton.addEventListener("click", function (e) {
            e.stopPropagation();
            newListItem.appendChild(editButton);
            newListItem.appendChild(deleteButton);
            editBar.remove();
            newSubmitButton.remove();
            cancelButton.remove();
        })
        //creating new list item in place of an old one
            newSubmitButton.addEventListener("click", function () {
            this.parentNode.innerText = editBar.value;
            //newListItem.appendChild(editButton);
            //newListItem.appendChild(deleteButton);
        })

        
    })
    
    }
    textBar.value = "";
    console.log(unorderedList.children);
})
