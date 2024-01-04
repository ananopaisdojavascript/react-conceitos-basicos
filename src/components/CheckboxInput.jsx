import { Fragment } from 'react';

export default function CheckboxInput({
  labelDescription = "Descrição",
  inputValue = "Valor padrão",
  onCheckboxChange = null,
  id,
  labelName,
  autoFocus = false
}) {
  function handleCheckboxChange() {
    if(onCheckboxChange) {
      onCheckboxChange()
    }
  }

  return (
    <Fragment>
      <div>
        <input id={id} className="p-1" type="checkbox" value={inputValue} onChange={handleCheckboxChange} autoFocus={autoFocus} />
        <label className="mb-2" htmlFor={labelName}>{labelDescription}</label>
      </div>
    </Fragment>
  )
}