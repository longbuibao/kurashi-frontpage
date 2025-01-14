import { Columns3Icon } from 'lucide-react'

import { useToolbarContext } from '@/components/editor/context/toolbar-context'
import { useEditorModal } from '@/components/editor/hooks/use-modal'
import { SelectItem } from '@/components/ui/select'

import { InsertLayoutDialog } from '../../layout-plugin'

export function InsertColumnsLayout() {
  const { activeEditor } = useToolbarContext()
  const [, showModal] = useEditorModal()

  return (
    <SelectItem
      value="columns"
      onPointerUp={() =>
        showModal('Insert Columns Layout', (onClose) => (
          <InsertLayoutDialog activeEditor={activeEditor} onClose={onClose} />
        ))
      }
      className=""
    >
      <div className="flex items-center gap-1">
        <Columns3Icon className="size-4" />
        <span>Columns Layout</span>
      </div>
    </SelectItem>
  )
}
