interface Props {
  children?: React.ReactNode
}

const Container = ({ children }: Props): React.ReactElement => {
  return <div className='container mx-auto px-5'>{children}</div>
}

export default Container
