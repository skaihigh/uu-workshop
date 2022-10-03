import { useState } from 'react'

export function UserNotification(): JSX.Element {
  const [notification, setNotification] = useState('')
  const [busy, setBusy] = useState(false)
  const buttonHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    setNotification(
      'Du har bedt om varsling. Venligst vent mens vi behandler din forespørsel.'
    )
    setBusy(true)
    setTimeout(() => {
      setNotification('Du har fått en ny melding; "Hei, hvordan går det?"')
      setBusy(false)
    }, 10000)
  }

  return (
    <>
      <button type="button" id="alertconfirm" onClick={buttonHandler}>
        Send varsling
      </button>
      <div role="alert" aria-live="assertive" aria-busy={busy}>
        {notification}
      </div>
    </>
  )
}
