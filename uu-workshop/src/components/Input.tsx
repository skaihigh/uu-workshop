import './Input.scss'

export function Input(): JSX.Element {
  return (
    <div className="input">
      <div>Dette er en input som mangler label <input type="text" id="label-input1" name="label-input1" /></div>
      <div>Hva skal stå i denne, tro? <input type="text" id="label-input2" name="label-input2" /></div>
      <div>For en skjermleser er det ingen sammenheng mellom denne teksten og input-feltet <input type="text" id="label-input3" name="label-input3" /></div>
    </div>
  )
}
