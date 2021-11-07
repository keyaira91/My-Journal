const journal = document.getElementById('journal');

document.querySelector("button").addEventListener("click", function(e) {
    e.preventDefault();
    addEntry()
    newNote.value = "";
});

function addEntry() { 
    if (newNote.value.length === 0) {
        alert("Please make an entry!")
    } else {
        let notes = document.createElement("p");
        notes.setAttribute("class", "col-3 mr-3 text-break");
        notes.setAttribute("id", "notes");
        notes.textContent = newNote.value;
        journal.appendChild(notes);
    }
}

