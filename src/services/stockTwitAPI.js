import { get } from './request';

export const fetchSymbol = symbol => get(`/${symbol}.json`)
