/*
An image gallery is a set of images with corresponding remove buttons.
This is the HTML code for a galley with two images:

<div class="image">
  <img src="https://bit.ly/3lmYVna" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://bit.ly/3flyaMj" alt="Second">
  <button class="remove">X</button>
</div>

Implement the setup function that registers a click event handler and implementes the following logic: When
the button of class remove is clicked, its parent <div> element should be removed from the gallery.

For example, after the first image has been removed from the gallery above, it´s HTML code should look like this:

<div class="image">
  <img src="https://bit.ly/3flyaMj" alt="Second">
  <button class="remove">X</button>
</div>


 */



function setup() {
    let buttons = document.getElementsByClassName("remove");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            this.parentNode.parentNode.removeChild(this.parentNode)
        });
    }
}

// Example case.
document.body.innerHTML = `
<div class="image">
  <img src="https://bit.ly/3lmYVna" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://bit.ly/3flyaMj" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);
