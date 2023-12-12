type FindSanta<TForest extends Array<any>, Acc extends Array<any> = []> =
  TForest extends [infer Head, ...infer Tail]
	  ? Head extends '🎅🏼'
	    ? Acc['length']
		  : FindSanta<Tail,[...Acc, Head]>
	  : never
