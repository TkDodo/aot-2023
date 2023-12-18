type Count<TItems extends Array<any>, TSearch extends string, TAcc extends Array<string> = []> =
  TItems extends [infer Head, ...infer Tail]
    ? Head extends TSearch
      ? Count<Tail, TSearch, [...TAcc, TSearch]>
      : Count<Tail, TSearch, TAcc>
    : TAcc['length']
