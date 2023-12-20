type Letters = {
  A: [
    '█▀█ ',
    '█▀█ ',
    '▀ ▀ ',
  ],
  B: [
    '█▀▄ ',
    '█▀▄ ',
    '▀▀  '
  ],
  C: [
    '█▀▀ ',
    '█ ░░',
    '▀▀▀ '
  ],
  E: [
    '█▀▀ ',
    '█▀▀ ',
    '▀▀▀ '
  ],
  H: [
    '█ █ ',
    '█▀█ ',
    '▀ ▀ '
  ],
  I: [
    '█ ',
    '█ ',
    '▀ '
  ],
  M: [
    '█▄░▄█ ',
    '█ ▀ █ ',
    '▀ ░░▀ '
  ],
  N: [
    '█▄░█ ',
    '█ ▀█ ',
    '▀ ░▀ '
  ],
  P: [
    '█▀█ ',
    '█▀▀ ',
    '▀ ░░'
  ],
  R: [
    '█▀█ ',
    '██▀ ',
    '▀ ▀ '
  ],
  S: [
    '█▀▀ ',
    '▀▀█ ',
    '▀▀▀ '
  ],
  T: [
    '▀█▀ ',
    '░█ ░',
    '░▀ ░'
  ],
  Y: [
    '█ █ ',
    '▀█▀ ',
    '░▀ ░'
  ],
  W: [
    '█ ░░█ ',
    '█▄▀▄█ ',
    '▀ ░ ▀ '
  ],
  ' ': [
    '░',
    '░',
    '░'
  ],
  ':': [
    '#',
    '░',
    '#'
  ],
  '*': [
    '░',
    '#',
    '░'
  ],
};

type GetValue<T, K extends keyof T> = T[K]

type ToString<T extends Array<string>, Result extends string = ''> =
  T extends [infer Head extends string, ...infer Tail extends Array<string>]
    ? ToString<Tail, `${Result}${Head}`>
    : Result

type CharToArray<TInput extends string, TIndex extends number, TResult extends Array<any> = []> =
  TInput extends `${infer Char}${infer Rest}`
    ? Char extends keyof Letters
      ? CharToArray<Rest, TIndex, [...TResult, GetValue<Letters, Char>[TIndex]]>
      : CharToArray<Rest, TIndex, TResult>
    : ToString<TResult>

type Split<TInput extends string, TResult extends Array<string> = []> =
  TInput extends `${infer Line}\n${infer Rest}`
    ? Split<Rest, [...TResult, Line]>
    : [...TResult, TInput]

type ToAsciiArray<TInputArray extends Array<string>, TResult extends Array<string> = []> =
  TInputArray extends [infer FirstRow extends string, ...infer RestRows extends Array<string>]
    ? ToAsciiArray<RestRows, [
        ...TResult,
        CharToArray<FirstRow, 0>, CharToArray<FirstRow, 1>, CharToArray<FirstRow, 2>
      ]>
    : TResult

type ToAsciiArt<TInput extends string> = ToAsciiArray<Split<Uppercase<TInput>>>
