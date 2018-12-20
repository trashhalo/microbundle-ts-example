import get from "lodash/get";
const obj = {a:'c'};

export const hello = () => get(obj, 'a');