import { SelectGameInput } from "./GameSelectInput";

export function NewAdForm() {
  return (
    <form className="flex flex-col ">
      <label htmlFor="">Qual o game?</label>

      <SelectGameInput />
    </form>
  )
}