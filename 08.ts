type RemoveNaughtyChildren<T extends Record<string, unknown>> = {[K in keyof T as K extends `naughty_${string}` ? never : K]: T[K]};
