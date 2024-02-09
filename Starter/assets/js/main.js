// Grab elements
const selectElement = selector => {

    const elements = document.querySelector(selector)
    if (elements) return elements;
    throw new Error('something went ,make sure that ${selector} exists or is typed correctly.');
};


//Nav styles on scroll
const scrollHeader = () =>{
    const headerElement = selectElement('#header');
    if(this.scrolly >= 15){
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    }
};
// Open menu & search pop-up

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper