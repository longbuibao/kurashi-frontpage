import { FileImageIcon } from 'lucide-react'

import { useToolbarContext } from '@/components/editor/context/toolbar-context'
import { useEditorModal } from '@/components/editor/hooks/use-modal'
import { SelectItem } from '@/components/ui/select'

import { InsertInlineImageDialog } from '../../inline-image-plugin'

export function InsertInlineImage() {
  const { activeEditor } = useToolbarContext()
  const [, showModal] = useEditorModal()
  return (
    <SelectItem
      value="inline-image"
      onPointerUp={() =>
        showModal('Insert Inline Image', (onClose) => (
          <InsertInlineImageDialog
            activeEditor={activeEditor}
            onClose={onClose}
          />
        ))
      }
      className=""
    >
      <div className="flex items-center gap-1">
        <FileImageIcon className="size-4" />
        <span>Inline Image</span>
      </div>
    </SelectItem>
  )
}
