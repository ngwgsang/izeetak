document.querySelectorAll('.card-with-contact').forEach((e) =>{
    e.addEventListener('mouseover', (child)=>{
        child.querySelector('.box').style.display = "flex"
    })
})