import { strictCheckString } from '@/utils'
interface FormErrorProps {
  message?: string
};

const FormError = ({ message }: FormErrorProps): React.ReactElement => {
  if (strictCheckString(message)) return <></>

  return (
    <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
      <i className='fa-solid fa-exclamation' />
      <p>{message}</p>
    </div>
  )
}

export default FormError
