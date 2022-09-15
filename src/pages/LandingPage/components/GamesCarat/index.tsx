import { GameCard } from './GameCard'

import GameImage1 from '../../../../assets/game-image-1.jpg'

import GameImage2 from '../../../../assets/game-image-2.jpg'

import GameImage3 from '../../../../assets/game-image-3.jpg'

import GameImage4 from '../../../../assets/game-image-4.jpg'

import GameImage5 from '../../../../assets/game-image-5.jpg'

import GameImage6 from '../../../../assets/game-image-6.jpg'

export function GamesCarat() {
  return (
    <div className="grid grid-cols-6 gap-x-6 mb-8">
      <GameCard image={GameImage1} name="league of legends" adsNumber={4} />

      <GameCard image={GameImage2} name="dota 2" adsNumber={6} />

      <GameCard image={GameImage3} name="counter strike" adsNumber={8} />

      <GameCard image={GameImage4} name="apex legends" adsNumber={3} />

      <GameCard image={GameImage5} name="fortnite" adsNumber={5} />

      <GameCard image={GameImage6} name="world of warcraft" adsNumber={2} />
    </div>
  )
}
