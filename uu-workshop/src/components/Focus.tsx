import './Focus.scss'

export function Focus(): JSX.Element {
  return (
    <div className="focus">
      Her kommer det noe hvor focus er usynlig (men feiler ikke?)
      <input type="text" id="focus-input" name="focus-input" />
    </div>
  )
}
