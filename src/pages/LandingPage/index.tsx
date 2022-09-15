import Logo from '../../assets/logo.svg'
import { PublishNewAdContainer } from './components/PublishNewAdContainer'

import { GamesCarat } from './components/GamesCarat'

export function LandingPage() {
  return (
    <div className="flex flex-col items-center w-full py-20 px-10">
      <img src={Logo} alt="" className="w-72 h-auto mb-20" />

      <h1 className="font-black text-6xl text-white mb-16">
        Seu{' '}
        <span className="text-transparent bg-purple-cyan-yellow-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="flex flex-col w-fit">
        <GamesCarat />

        <PublishNewAdContainer />
      </div>
    </div>
  )
}
