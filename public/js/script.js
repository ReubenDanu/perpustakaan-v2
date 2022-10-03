const links = document.querySelectorAll("links")

for(let i = 0; i < links.length; i++){
    if(links[i].href === window.location.href){
        links[i].setAttribute("aria-current",  "page")
    }
}

