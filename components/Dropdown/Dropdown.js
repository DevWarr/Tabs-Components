class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = document.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent();
    })
  }


  toggleContent() {
    event.stopPropagation();
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
    if (this.button.style.background === 'white') {
      this.button.style.background = '#931D25'
      this.button.style.color = 'white'
      this.button.style.border = '3px solid white';
    }  else {
      this.button.style.background = 'white';
      this.button.style.color = 'rgb(147,29,37)';
      this.button.style.border = '3px solid rgb(147,29,37)';
    }
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));



//==========================STRETCH============================//
// Click anywhere in the window, and the dropdown menu will close.


window.addEventListener('click', dropdownHide);

function dropdownHide() {
  const button = document.querySelector('.dropdown-button');
  event.stopPropagation();
  dropdown = document.querySelector('.dropdown-content');
  if (!dropdown.classList.contains('dropdown-hidden')) {
    dropdown.classList.add('dropdown-hidden')
  }
  if (button.style.background === 'white') {
    button.style.background = '#931D25'
    button.style.color = 'white'
    button.style.border = '3px solid white';
  } 
}