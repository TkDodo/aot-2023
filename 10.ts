type StreetSuffixTester<TAddress extends string, TSuffix extends string> = TAddress extends `${string}${TSuffix}` ? true : false;
