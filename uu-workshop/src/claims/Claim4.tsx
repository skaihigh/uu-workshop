export function Claim4(): JSX.Element {
  return (
    <div className="claims">
      <h3>
        Argumenter <i>for</i>:
      </h3>
      <details>
        <summary>?</summary>
        <ul className="disc-list">
          <li>
            Vi kjenner alle som skal bruke systemet, og er sikre på at det ikke
            er noen som har nedsatt funksjonsevne
          </li>
          <li> Blabla</li>
        </ul>
      </details>
      <h3>
        Argumenter <i>mot</i>:
      </h3>
      <details>
        <summary>?</summary>
        <ul className="disc-list">
          <li>
            Igjen: man kan ikke alltid se en funksjonsnedsettelse, og kanskje er
            ikke den eller de det gjelder så lystne på å ‘avsløre’ at de har en
            heller
          </li>
          <li>
            Hva hvis man skal ansette en ny person? Så blir man nødt til å
            diskriminere hvis denne personen har en funksjonsnedsettelse, fordi
            hen da ikke kan bruke systemet - og det er ikke lovlig! - eller så
            må man uansett endre på systemet
          </li>
          <li>Blabla</li>
        </ul>
      </details>
    </div>
  )
}
