
export const fetchSymbol = symbol => {
    return fetch(`https://orbis-backend-challenge.herokuapp.com/api/2/streams/symbol/${symbol}`)
        .then(res => res.json());
};