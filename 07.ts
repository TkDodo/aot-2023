type AppendGood<T extends Record<string, unknown>> = {[ K in keyof T as `good_${string & K}`]: T[K]};
