import './Focus.scss'

export function Focus(): JSX.Element {
  return (
    <div className="focus">
      Hvilket input-felt er fokusert, tro?
      <input type="text" id="focus-input1" name="focus-input1" />
      <input type="text" id="focus-input2" name="focus-input2" />
      <input type="text" id="focus-input3" name="focus-input3" />
      <input type="text" id="focus-input4" name="focus-input4" />
    </div>
  )
}
