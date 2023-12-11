type Reverse<T extends string> = T extends `${infer First}${infer Rest}` ? `${Reverse<Rest>}${First}` : '';
