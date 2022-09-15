import { Trigger } from '@radix-ui/react-dialog'

import { MagnifyingGlassPlus } from 'phosphor-react'



export function PublishNewAdBtn() {
  return (
    <Trigger className="flex items-center gap-x-3  py-3 px-4 rounded-md bg-violet-500 text-white transition-colors duration-200 hover:bg-violet-700">
      <MagnifyingGlassPlus weight="regular" className="w-6 h-6" />
      <span className="font-medium text-base">Publicar anúncio</span>
    </Trigger>
  )
}
