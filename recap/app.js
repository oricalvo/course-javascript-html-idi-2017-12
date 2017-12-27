console.log("hello");

main();

var isVisible = false;

function main() {
    var button = document.querySelector("button.toggle");
    if (!button) {
        console.log("Toggle button not found");
        return;
    }

    var ul = document.querySelector("ul.contacts");
    if (!ul) {
        console.log("Contacts list was not found");
        return;
    }

    button.addEventListener("click", function() {
        console.log("click");

        if(!isVisible) {
            isVisible = true;
        }
        else {
            isVisible = false;
        }
        
        ul.style.display = (isVisible ? "block" : "none");
    });
}
