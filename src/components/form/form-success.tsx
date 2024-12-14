import { strictCheckString } from '@/utils'
interface FormSuccessProps {
  message?: string
};

const FormSuccess = ({ message }: FormSuccessProps): React.ReactElement => {
  if (strictCheckString(message)) return <></>

  return (
    <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
      <i className='fa-solid fa-check' />
      <p>{message}</p>
    </div>
  )
}

export default FormSuccess
