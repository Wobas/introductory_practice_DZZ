let header = document.querySelector('.header');

window.addEventListener('scroll', () =>
{
    console.log("plus");
    if(window.scrollY)
    {
        header.classList.add('moving');
    }
    else
    {
        header.classList.remove('moving');
    }
    
});