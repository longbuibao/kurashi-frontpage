import { parseISO, format } from 'date-fns'

interface Props {
  dateString: string
}

const DateFormatter = ({ dateString }: Props): React.ReactElement => {
  if (typeof (dateString) === 'string') {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  }

  return <div>{dateString}</div>
}

export default DateFormatter
