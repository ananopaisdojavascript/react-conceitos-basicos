import { Fragment } from 'react';

export default function DateInput({
  labelDescription = "Descrição",
  inputValue = "2021-04-30",
  onInputChange = null,
  id,
  labelName,
  autoFocus = false
}) {
  function handleInputChange({currentTarget}) {
    if(onInputChange) {
      const newValue = currentTarget.value
      onInputChange(newValue)
    }
  }

  return (
    <Fragment>
      <div className="flex flex-col my-4">
        <label className="mb-2" htmlFor={labelName}>{labelDescription}</label>
        <input id={id} className="p-1" type="date" value={inputValue} onChange={handleInputChange} autoFocus={autoFocus} />
      </div>
    </Fragment>
  )
}