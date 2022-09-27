import './Input.scss'

export function Input(): JSX.Element {
  return (
    <div className="input">
      Dette er en input som mangler label
      <input type="text" id="label-input" name="label-input" />
    </div>
  )
}
