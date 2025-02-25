import markdownStyles from './markdown-styles.module.css'

interface Props {
  content: string
}

export function PostBody ({ content }: Props): React.ReactElement {
  return (
    <div className='max-w-2xl mx-auto'>
      <div
        className={markdownStyles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
