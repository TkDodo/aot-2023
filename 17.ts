type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽';

type Game = {
	'👊🏻👊🏻': 'draw',
	'✌🏽✌🏽': 'draw',
	'🖐🏾🖐🏾': 'draw',
	'👊🏻✌🏽': 'win',
	'✌🏽🖐🏾': 'win'
	'🖐🏾👊🏻': 'win',
	'👊🏻🖐🏾': 'lose'
	'✌🏽👊🏻': 'lose'
	'🖐🏾✌🏽': 'lose'
}

type WhoWins<TOpponent extends RockPaperScissors, TYou extends RockPaperScissors> =
  Game[`${TYou}${TOpponent}`]
