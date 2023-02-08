document.addEventListener('click', (e) =>
{
    let elemId = e;
    if(elemId.srcElement.className != '')
    {
        console.log(elemId.srcElement.className);
        console.log(e)
        
        var property = document.getElementById(elemId.target.id);
        property.style.left = "50px";
    }
})