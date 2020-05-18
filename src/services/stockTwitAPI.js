// import { get } from './request';

// export const fetchSymbol = symbol => get(`/${symbol}.json`)

export const fetchSymbol = symbol => {
    return fetch(`http://localhost:7890/api/2/streams/symbol/${symbol}`)
        .then(res => res.json())
}