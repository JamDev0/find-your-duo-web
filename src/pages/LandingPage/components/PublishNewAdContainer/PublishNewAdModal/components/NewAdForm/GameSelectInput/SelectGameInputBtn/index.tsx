import { Icon, Trigger, Value } from "@radix-ui/react-select";
import { CaretDown } from "phosphor-react";

export function SelectGameInputBtn() {
  return (
    <Trigger>
      <Value className="text-zinc-500 font-roboto font-regular text-sm" placeholder='selecione jogo'/>
      <Icon>
        <CaretDown className="text-zinc-400 w-6 h-6" />
      </Icon>
    </Trigger>
  )
}