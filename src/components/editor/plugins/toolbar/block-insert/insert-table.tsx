import { TableIcon } from 'lucide-react'

import { useToolbarContext } from '@/components/editor/context/toolbar-context'
import { useEditorModal } from '@/components/editor/hooks/use-modal'
import { SelectItem } from '@/components/ui/select'

import { InsertTableDialog } from '../../table-plugin'

export function InsertTable() {
  const { activeEditor } = useToolbarContext()
  const [, showModal] = useEditorModal()

  return (
    <SelectItem
      value="table"
      onPointerUp={() =>
        showModal('Insert Table', (onClose) => (
          <InsertTableDialog activeEditor={activeEditor} onClose={onClose} />
        ))
      }
      className=""
    >
      <div className="flex items-center gap-1">
        <TableIcon className="size-4" />
        <span>Table</span>
      </div>
    </SelectItem>
  )
}
