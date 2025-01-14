import * as React from 'react'
import {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import dynamic from 'next/dynamic'

import {
  AppState,
  BinaryFiles,
  ExcalidrawImperativeAPI,
  ExcalidrawInitialDataState,
} from '@excalidraw/excalidraw/types/types'
import { DialogTrigger } from '@radix-ui/react-dialog'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from '@/components/ui/dialog'

const Excalidraw = dynamic(() => import('./excalidraw'), { ssr: false })

export type ExcalidrawInitialElements = ExcalidrawInitialDataState['elements']

type Props = {
  closeOnClickOutside?: boolean
  /**
   * The initial set of elements to draw into the scene
   */
  initialElements: ExcalidrawInitialElements
  /**
   * The initial set of elements to draw into the scene
   */
  initialAppState: AppState
  /**
   * The initial set of elements to draw into the scene
   */
  initialFiles: BinaryFiles
  /**
   * Controls the visibility of the modal
   */
  isShown?: boolean
  /**
   * Callback when closing and discarding the new changes
   */
  onClose: () => void
  /**
   * Completely remove Excalidraw component
   */
  onDelete: () => void
  /**
   * Callback when the save button is clicked
   */
  onSave: (
    elements: ExcalidrawInitialElements,
    appState: Partial<AppState>,
    files: BinaryFiles
  ) => void
}

export const useCallbackRefState = () => {
  const [refValue, setRefValue] =
    React.useState<ExcalidrawImperativeAPI | null>(null)
  const refCallback = React.useCallback(
    (value: ExcalidrawImperativeAPI | null) => setRefValue(value),
    []
  )
  return [refValue, refCallback] as const
}

/**
 * @explorer-desc
 * A component which renders a modal with Excalidraw (a painting app)
 * which can be used to export an editable image
 */
export function ExcalidrawModal({
  closeOnClickOutside = false,
  onSave,
  initialElements,
  initialAppState,
  initialFiles,
  isShown = false,
  onDelete,
  onClose,
}: Props): ReactElement | null {
  const excaliDrawModelRef = useRef<HTMLDivElement | null>(null)
  const [excalidrawAPI, excalidrawAPIRefCallback] = useCallbackRefState()
  const [discardModalOpen, setDiscardModalOpen] = useState(false)
  const [elements, setElements] =
    useState<ExcalidrawInitialElements>(initialElements)
  const [files, setFiles] = useState<BinaryFiles>(initialFiles)

  useEffect(() => {
    if (excaliDrawModelRef.current !== null) {
      excaliDrawModelRef.current.focus()
    }
  }, [])

  useEffect(() => {
    let modalOverlayElement: HTMLElement | null = null

    const clickOutsideHandler = (event: MouseEvent) => {
      const target = event.target
      if (
        excaliDrawModelRef.current !== null &&
        !excaliDrawModelRef.current.contains(target as Node) &&
        closeOnClickOutside
      ) {
        onDelete()
      }
    }

    if (excaliDrawModelRef.current !== null) {
      modalOverlayElement = excaliDrawModelRef.current?.parentElement
      if (modalOverlayElement !== null) {
        modalOverlayElement?.addEventListener('click', clickOutsideHandler)
      }
    }

    return () => {
      if (modalOverlayElement !== null) {
        modalOverlayElement?.removeEventListener('click', clickOutsideHandler)
      }
    }
  }, [closeOnClickOutside, onDelete])

  useLayoutEffect(() => {
    const currentModalRef = excaliDrawModelRef.current

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onDelete()
      }
    }

    if (currentModalRef !== null) {
      currentModalRef.addEventListener('keydown', onKeyDown)
    }

    return () => {
      if (currentModalRef !== null) {
        currentModalRef.removeEventListener('keydown', onKeyDown)
      }
    }
  }, [elements, files, onDelete])

  const save = () => {
    if (elements && elements.filter((el) => !el.isDeleted).length > 0) {
      const appState = excalidrawAPI?.getAppState()
      // We only need a subset of the state
      const partialState: Partial<AppState> = {
        exportBackground: appState?.exportBackground,
        exportScale: appState?.exportScale,
        exportWithDarkMode: appState?.theme === 'dark',
        isBindingEnabled: appState?.isBindingEnabled,
        isLoading: appState?.isLoading,
        name: appState?.name,
        theme: appState?.theme,
        viewBackgroundColor: appState?.viewBackgroundColor,
        viewModeEnabled: appState?.viewModeEnabled,
        zenModeEnabled: appState?.zenModeEnabled,
        zoom: appState?.zoom,
      }
      onSave(elements, partialState, files)
    } else {
      // delete node if the scene is clear
      onDelete()
    }
  }

  const discard = () => {
    setDiscardModalOpen(true)
  }

  function ShowDiscardDialog(): JSX.Element {
    return (
      <Dialog open={discardModalOpen} onOpenChange={setDiscardModalOpen}>
        <DialogContent>
          Are you sure you want to discard the changes?
        </DialogContent>
        <DialogClose asChild>
          <Button
            onClick={() => {
              setDiscardModalOpen(false)
              onClose()
            }}
          >
            Discard
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button onClick={() => setDiscardModalOpen(false)}>Cancel</Button>
        </DialogClose>
      </Dialog>
    )
  }

  if (isShown === false) {
    return null
  }

  const onChange = (
    els: ExcalidrawInitialElements,
    _: AppState,
    fls: BinaryFiles
  ) => {
    setElements(els)
    setFiles(fls)
  }

  return (
    <Dialog open={isShown}>
      <DialogTrigger />
      <DialogContent className="h-4/6 max-w-4xl overflow-hidden p-0">
        <div className="relative" role="dialog">
          <div className="h-full w-full" ref={excaliDrawModelRef} tabIndex={-1}>
            <div className="h-full w-full">
              {discardModalOpen && <ShowDiscardDialog />}
              <Excalidraw
                onChange={onChange}
                excalidrawAPI={excalidrawAPIRefCallback}
                initialData={{
                  appState: initialAppState || { isLoading: false },
                  elements: initialElements,
                  files: initialFiles,
                }}
              />
              <div className="flex h-full items-center justify-center">
                Loading...
              </div>
              <div className="absolute bottom-0 bottom-5 right-1/2 z-10 flex translate-x-1/2 gap-2">
                <Button variant="outline" onClick={onClose}>
                  Discard
                </Button>
                <Button onClick={save}>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
