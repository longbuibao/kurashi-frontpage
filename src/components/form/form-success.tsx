import { strictCheckString } from '@/utils'

interface FormSuccessProps {
  message?: string
  redirectTo?: string
};

const FormSuccess = ({ message, redirectTo = '' }: FormSuccessProps): React.ReactElement => {
  if (strictCheckString(message)) return <></>
  if (!strictCheckString(redirectTo)) {
    window.location.href = redirectTo
  }

  return (
    <div className='bg-destructive/15 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
      <i className='fa-solid fa-check' />
      <p>{message}</p>
    </div>
  )
}

export default FormSuccess
