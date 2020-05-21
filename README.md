### Installation Instructions
Github Front-end: https://github.com/kgali21/orbis-systems-FE  
Github Back-end: https://github.com/kgali21/orbis-systems-be  
Npm i will install everything you need for both sides!  

Deployed Front-end:  
Deployed Back-end:  

### Technologies Used

React for front-end framework  
Redux for global state management  
useInterval library for automatic fetch calls for auto updates  

### Requirements

● Allow the user to input a US stock symbol or several symbols (eg: AAPL, BABA, BAC,etc...)  
    The user can input any symbol up to 5 characters, which is the max length of a given stock symbol, which returns a card with the Symbol, Tweets, and the amount of Tweet.  

● Pull tweets from StockTwits that mention this symbol (stock symbols usually have a $before them, like: $AAPL, $BABA, etc...)  
    Created a backend that uses a GET route to fetch the data and filter it through cors, so the front-end can use the data.  

● Display the latest matching tweets. How you display them is up to you.  
    Displayed a matching tweets in a scroll-able container so that the amount of tweets wont affect the page itself.  

● When a new tweet comes in, it should automatically be added without having to refresh the page.  
    Once every 2 minutes a fetch is called through, an update action which then returns a new fetch of the data that exists in Redux state using a selector and then sending through a reducer. Used useInterval to set the timer, which allows me to re-render the page or entire component. I went with 2 minutes auto refresh because it allows me to not get rated limited per hour, and makes 150 calls per hour.  

● The user should be able to later add/remove symbols as well. If a user deletes a symbol,the matching tweets should also disappear.  
    The user can add and remove a symbol by typing the symbol into a form text box. I decided to remove the entire card, mainly because if they want to delete a symbol and the associated messages, they probably wont need either separately.  

● The page has to be responsive.  
    The page is responsive both in the browser and in a mobile view. Used Media Queries to setup mobile responsiveness at 600px or less.  

● The number of tweets for a given symbol needs to be represented.  
    Displayed the number of tweets based on the length of the array of Tweets/Messages sent from the api from the back-end.  

● Pay attention to details and make the user-interface and user-experience the best you possibly can, considering time constraints.  
    I really wanted the user to feel like they were on a page of the actual Orbis Systems website, so i changed the favicon icon as well as the title. I used the actual Orbis logo for my header. Decided to have 2 forms so the user can easily see what each for is doing, as well, as having the ability to use those forms elsewhere if needed.  

● Treat it like a real project, so things like code structure, readability, reusability... should be taken into consideration.  
    Refactored code to not include comments, console.logs, or whitespace

### Stretch Goals
    Attempted:
        - Not allow duplicate Symbols; I couldn't get it to work because the various array methods would not initially remove that duplicated Symbol for the state of the array in the redux store. I could get it to remove all the symbols in the array but not a single one based on the symbol name
        - Dynamically set the delay on useInterval based on the number of cards; tried to do this with a conditional, but because of UseInterval, I had trouble not going against the Rules of Hooks.
    Non-attempted:
        - handle 404s on the front-end

