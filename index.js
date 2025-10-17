 var newcontent = document.getElementById("newcontent");
    var overlaypopup = document.querySelector(".overlaypopup");
    var newpopup = document.querySelector(".newpopup");

    newcontent.addEventListener("click", () => {
        overlaypopup.style.display = "block"
        newpopup.style.display = "block"
    })

    var cancelcontent = document.getElementById("cancelcontent")
    cancelcontent.addEventListener("click", () => {
        overlaypopup.style.display = "none"
        newpopup.style.display = "none"
    })


    var addnewcontent = document.getElementById("addnewcontent");
    var book = document.getElementById("book");
    var author = document.getElementById("author");
    var description = document.getElementById("description")
    var overlay = document.querySelector(".overlay")

    addnewcontent.addEventListener("click", (e) => {
        e.preventDefault();

        var div = document.createElement("div")
        div.setAttribute("class", "popup");
        div.innerHTML = `
            <h1>${book.value}</h1>
            <h4>${author.value}</h4>
            <p>${description.value}</p>
            <button onclick="de(event)">Delete</button>
`
        overlay.append(div)
        book.value=""
        author.value=""
        description.value=""
        overlaypopup.style.display = "none"
        newpopup.style.display = "none"


    })

    function de(event) {
        event.target.parentElement.remove();
    }