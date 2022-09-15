interface GameCartProps {
  name: string
  adsNumber: number
  image: string
}

export function GameCard({ name, adsNumber, image }: GameCartProps) {
  return (
    <a className="w-44 h-60 relative flex flex-col justify-end rounded-lg overflow-hidden">
      <img
        src={image}
        alt={`Imagem representando o jogo ${name}`}
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      <div className="bg-game-card-text-container-background-gradient relative z-10 px-4 pb-4">
        <h2 className="capitalize mt-16 font-bold text-base text-white">
          {name}
        </h2>

        <span className="font-regular text-sm text-zinc-300">
          {adsNumber} anúncios
        </span>
      </div>
    </a>
  )
}
