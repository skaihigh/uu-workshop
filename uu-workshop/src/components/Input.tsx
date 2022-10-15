import './Input.scss'

export function Input(): JSX.Element {
  return (
    <div className="input">
      <div>
        Dette er en input som mangler label
        <input type="text" id="label-input1" name="label-input1" />
      </div>
      <div>
        Hva skal stå i denne, tro?
        <input type="text" id="label-input2" name="label-input2" />
      </div>
      <div>
        For en skjermleser er det ingen sammenheng mellom denne teksten og
        input-feltet
        <input type="text" id="label-input3" name="label-input3" />
      </div>
      <div style={{ marginBottom: '20rem' }}>
        Input-feltet kunne like så godt ha stått
      </div>
      <div style={{ marginBottom: '4rem' }}>
        her <input type="text" id="label-input4" name="label-input4" />
      </div>
      <div>
        (bilde med tekst &quot;Send inn skjema&quot; og onClick-event som lizm
        sender inn/åpner popup med forklaring om at skjermleser ikke vet at
        dette bildet sender inn skjema, fordi det er et bilde og ikke en
        submit-knapp)
      </div>
    </div>
  )
}
