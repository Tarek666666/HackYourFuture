
const menuBtn = document.querySelector('.left-hamburger');

let menuOpen = false;
const itemBtn = document.querySelector('.menu-items-box');

menuBtn.addEventListener('click' , () => {

    if (!menuOpen){

        menuBtn.classList.add('opened');
        itemBtn.classList.add('listopend')
        menuOpen = true;
    } else { menuBtn.classList.remove('opened') 
            itemBtn.classList.remove('listopend')
             menuOpen = false;   

}

});


const  searchBtn = document.querySelector('.search-btn');
const  searchBox = document.querySelector('.search-closed')
let openSearch = false;

searchBtn.addEventListener('click' , () => {

if (!openSearch) {
    
    searchBtn.classList.add('search-opened-icon');
    searchBox.classList.add('search-opened');
    openSearch = true;

} else { 

    searchBtn.classList.remove('search-opened-icon');
    searchBox.classList.remove('search-opened');
    openSearch = false;
}






});

