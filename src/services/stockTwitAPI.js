
export const fetchSymbol = symbol => {
    return fetch(`http://localhost:7890/api/2/streams/symbol/${symbol}`)
        .then(res => res.json());
};