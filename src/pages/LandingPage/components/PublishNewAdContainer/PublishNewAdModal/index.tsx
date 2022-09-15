import * as Dialog from "@radix-ui/react-dialog";

import { MagnifyingGlassPlus } from "phosphor-react";
import { NewAdForm } from "./components/NewAdForm";
import { PublishNewAdBtn } from "./components/PublishNewAdBtn";

export function PublishNewAdModal() {
  return (
    <Dialog.Root>
      <PublishNewAdBtn />

      <Dialog.Portal>

        <Dialog.Overlay className='fixed bg-black/60 inset-0 z-20' />

        <Dialog.Content className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-surfaces-shape py-8 px-10 text-white rounded-lg'>
          
          <Dialog.Title className='font-black text-3xl mb-8'>
            Publique um anúncio
          </Dialog.Title>

          <NewAdForm />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}