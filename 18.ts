type Count<TItems extends Array<any>, TSearch extends string, TAcc extends Array<string> = []> =
  TItems extends [infer Head, ...infer Tail]
    ? Head extends TSearch
      ? Count<Tail, TSearch, [...TAcc, TSearch]>
      : Count<Tail, TSearch, TAcc>
    : TAcc['length']

// alternative without Accumulator

type Filter<TItems extends Array<any>, TSearch extends string> =
  TItems extends [infer Head, ...infer Tail]
    ? Head extends TSearch
      ? [Head, ...Filter<Tail, TSearch>]
      : Filter<Tail, TSearch>
    : []

type Count<TItems extends Array<any>, TSearch extends string> =
  Filter<TItems, TSearch>['length']
