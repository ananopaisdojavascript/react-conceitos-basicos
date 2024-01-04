import { Fragment, useState, useEffect } from 'react';

export default function Timer() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => { setValue(currentValue => currentValue + 1) }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Fragment>
      <span className="text-xl bg-red-200 p-5 mt-2">
        {value}
      </span>
    </Fragment>
  )
}