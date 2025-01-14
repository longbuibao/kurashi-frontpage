import { ImageIcon } from 'lucide-react'

import { useToolbarContext } from '@/components/editor/context/toolbar-context'
import { useEditorModal } from '@/components/editor/hooks/use-modal'
import { SelectItem } from '@/components/ui/select'

import { InsertImageDialog } from '../../images-plugin'

export function InsertImage() {
  const { activeEditor } = useToolbarContext()
  const [, showModal] = useEditorModal()

  return (
    <SelectItem
      value="image"
      onPointerUp={(e) => {
        showModal('Insert Image', (onClose) => (
          <InsertImageDialog activeEditor={activeEditor} onClose={onClose} />
        ))
      }}
      className=""
    >
      <div className="flex items-center gap-1">
        <ImageIcon className="size-4" />
        <span>Image</span>
      </div>
    </SelectItem>
  )
}
