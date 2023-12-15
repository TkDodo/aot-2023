type Fill<TEntry extends string, TLength extends number, TAcc extends Array<string> = []> =
  TLength extends TAcc["length"]
    ? TAcc
    : Fill<TEntry, TLength, [...TAcc, TEntry]>;

type BoxToys<TName extends string, TNumber extends number> = Fill<TName, TNumber>;
