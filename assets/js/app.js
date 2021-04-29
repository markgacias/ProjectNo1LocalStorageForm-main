//Variables



//Evnt Listeners

eventListeners();

function eventListeners()
    //form submission
{
    document.querySelector('#form').addEventListener('submit', newTweet);
}

//Functions

function newTweet (e)
{
    e.preventDefault();

    console.log('Form Submitted');
}