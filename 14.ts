type DecipherNaughtyList<T extends string, Acc extends Array<string> = []> =
  T extends `${infer Name}/${infer Rest}`
		? DecipherNaughtyList<Rest, [...Acc, Name]>
		: [...Acc, T][number]
