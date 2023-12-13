// based on https://twitter.com/jwdunne_dev/status/1734855278229705063

type Fill<T extends number, Acc extends Array<number> = []> = T extends Acc["length"]
  ? Acc[number]
  : Fill<T, [...Acc, Acc["length"]]>;

type DayCounter<TFrom extends number, TTo extends number> = Exclude<Fill<TTo>, Fill<TFrom>> | TTo
