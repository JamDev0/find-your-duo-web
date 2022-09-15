import * as Select from '@radix-ui/react-select';
import { CaretDown } from 'phosphor-react';

export function SelectGameInput() {
  return (
    <Select.Root>
      <Select.Trigger>
        <Select.Value placeholder='Selecione o game que deseja jogar' />
        <Select.Icon children={<CaretDown />} />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className='bg-slate-300'>
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Item value='OPs'>
              <Select.ItemText />
              <Select.ItemIndicator />
            </Select.Item>

            <Select.Group>
              <Select.Label />
              <Select.Item value='OPa'>
                <Select.ItemText />
                <Select.ItemIndicator />
              </Select.Item>
            </Select.Group>

            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}