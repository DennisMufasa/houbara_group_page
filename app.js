//select the navbar items using their class
const links = document.querySelectorAll('.link');

//select the sections using the element name
const sections = document.querySelectorAll('section');

//an integer to represent the active link
let activeLink = 0;

//loop through the links and change sections according to the selected link
links.forEach((link, i) => {
    link.addEventListener('click', ()=>{
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    });
});

/* 
---explanation for the code above---
1. select the links and sections on the html document
2. loop through all navbar links and set an on click listener
3. check if the active link is the same as the index of the navbar item - 
    if the active link is the same as the navbar index with the click event
    do nothing. if the active link is not the same as the index
    of the navbar with the click event, perform the following events
    a) remove the 'active' class from the current navbar item
    b) set the 'active' class to the navbar item with the click event
    c) remove the 'active' class from the current section
    d) set the 'active' class to the section represented by the navbar item

*/