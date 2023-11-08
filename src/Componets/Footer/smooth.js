document.querySelector('a[href^="#home"]').forEach(anchor =>{
    anchor.addEventListener('click',function(e){
       e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        })
    })
}
    )