export const fetchSymbol = symbol => {
    return fetch(`${process.env.API_URL}/${symbol}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(symbol)
    })
    .then(res => res.json())
    .then(({ data }) => ({
        symbol: data.symbol.symbol,
        tweet: data.messages[0].body,
        tweetCount: data.messages.length
    }))
};