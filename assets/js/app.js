//Variables

const tweetList = document.getElementById('tweet-list');

//Event Listeners

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

    //read the textarea value
    const tweet = document.getElementById('tweet').value;

    //Create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //Create an <li> element
    const li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);

    //Add the remove button to each tweet
    li.appendChild(removeBtn);

    //Add to the list
    tweetList.appendChild(li);
}