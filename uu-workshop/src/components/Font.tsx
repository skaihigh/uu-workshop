import './Font.scss'

export function Font(): JSX.Element {
  return (
    <div className="font">
      Her er det noe med veldig liten skrift og ikke-dynamisk størrelse (men som
      kanskje ikke feiler?)

      <div className='font__underline'>Er dette et link mon tro?</div>
    </div>
  )
}
