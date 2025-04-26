import './dropdown-item.css'

const DropdownItem = ({ children }: any): React.ReactElement => {
  return (
    <div className='dropdown-item'>
      {children}
    </div>
  )
}

export default DropdownItem
