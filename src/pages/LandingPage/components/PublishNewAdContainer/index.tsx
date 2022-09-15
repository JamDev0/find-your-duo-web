import { PublishNewAdBtn } from './PublishNewAdBtn'

export function PublishNewAdContainer() {
  return (
    <div className="w-full bg-purple-cyan-yellow-gradient pt-1 rounded-lg overflow-hidden">
      <section className="flex justify-between items-center py-6 px-8 w-full bg-surfaces-shape rounded-md">
        <div>
          <h2 className="text-white text-2xl font-black">
            Não encontrou seu duo?
          </h2>

          <span className="text-zinc-400 font-regular">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <PublishNewAdBtn />
      </section>
    </div>
  )
}
