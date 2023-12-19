import { $, Numbers, Strings, Tuples, Call, Fn, Pipe } from 'hotscript'

declare global {
  type Order = ['🛹', '🚲', '🛴', '🏄']

  interface Identity extends Fn {
    return: this["arg0"];
  }

  type Flatten<TList extends Array<Array<number>>> = Call<
    Tuples.FlatMap<Identity, TList>
  >

  type DuplicateTimes<Item extends string, Amount extends number> = Pipe<
    `${Item}.`,
    [
      Strings.Repeat<Amount>,
      Strings.Split<'.'>
    ]
  >

  type Build<TList extends Array<number>, Acc extends Array<Array<string>> = []> =
    TList extends [infer Head extends number, ...infer Tail extends Array<number>]
      ? Build<Tail, [...Acc, DuplicateTimes<Order[$<Numbers.Mod<Acc['length'], Order['length']>>], Head>]>
      : Acc

  type Rebuild<TList extends Array<number>> = Flatten<Build<TList>>
}
