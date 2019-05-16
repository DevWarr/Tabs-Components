
class Tabs {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    console.log(this.data);
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    console.log(this.itemElement);
    
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem = new TabItem(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select())
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    const container = document.querySelector('.tabs-items');
    const items = document.querySelectorAll('.tabs-item');
    let open = this.element.classList.contains('tabs-link-selected')

    // Using a loop or the forEach method remove the 'selected' class from all of the tabs
    links.forEach(link => {
      link.classList.remove('tabs-link-selected');
    });
    items.forEach(item => {
      item.classList.remove('tabs-item-selected');
    });

    // If the tab is already open, close the tab. 
    // If the tab is not currently open, switch to that tab
    container.style.transition = "height 1s";
    if (!open) {
      this.element.classList.add('tabs-link-selected');
      this.itemElement.classList.add('tabs-item-selected');
      container.style.height = '300px';
    } else {container.style.height = '10px';}
    // Call the select method on the item associated with this link
    // NOW NULL

  }
}

//====================NOW NULL====================//
// class TabItem {
//   constructor(element) {
//     // Assign this.element to the passed in element
//     this.element = element;
//   }

//   select() {
//   }
// }
//====================NOW NULL====================//

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link').forEach(link => new Tabs(link));