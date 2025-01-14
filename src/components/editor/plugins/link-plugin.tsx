import * as React from 'react'

import { LinkPlugin as LexicalLinkPlugin } from '@lexical/react/LexicalLinkPlugin'

import { validateUrl } from '../utils/url'

export function LinkPlugin(): JSX.Element {
  return <LexicalLinkPlugin validateUrl={validateUrl} />
}
