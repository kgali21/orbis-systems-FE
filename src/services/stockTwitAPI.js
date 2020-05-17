// import { get } from './request';

// export const fetchSymbol = symbol => get(`/${symbol}.json`)

export const fetchSymbol = symbol => {
    return fetch(`${process.env.API_URL}/api/2/streams/symbol/${symbol}.json`)
        .then(res => res)
}
