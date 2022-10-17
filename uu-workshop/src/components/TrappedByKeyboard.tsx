import './TrappedByKeyboard.scss'

export function TrappedByKeyboard(): JSX.Element {
  return (
    <div className="trapped-by-keyboard">
      {/* https://blog.prototypr.io/common-accessibility-problems-good-and-bad-examples-in-modern-websites-a13efb7256ad */}
      '<strong>Keyboard trap</strong>': Umulig å navigere videre fra et element ved å bare bruke keyboardet.
      <br />
      <br />
    
      {/* http://aduggin.github.io/accessibility-fails/keyboardtrap.html */}
      <div>
        <a 
          href="#" 
          onKeyDown={(event) => { 
            event.preventDefault();
            window.open("https://miles.no", "_blank");
          }}
        >
          Haha!
        </a>
        <a href="#">You ain't comin' here</a>
      </div>
      <pre>
        &lt;a <br/>
        {" "}  href="#" <br/> 
        {" "}  onKeyDown=&#123;(event) =&gt; &#123; <br />
        {" "}  {" "}  event.preventDefault(); <br />
        {" "}  {" "}  window.open("https://miles.no", "_blank"); <br />
        {" "}  &#125;&#125; <br />
        &gt; <br />
        {" "}  Haha! <br />
        &lt;/a&gt;
      </pre>
      <br />
      <br />

      {/* https://codepen.io/team/universitysandbox/pen/bgBabN */}
      <div>
        <div>
          Her er det umulig å komme seg til 'Lenke 3' ved å bruke keyboardet,
          fordi <code>onKeyDown</code>-eventet er satt til å ikke gjøre noenting.
        </div>
        <br />
        <a href="#">Lenke 1</a>
        <a href="#" onKeyDown={(event) => event.preventDefault()}>Lenke 2</a>
        <a href="#">Lenke 3</a>
      </div>
      <pre>
        &lt;a href="#" onKeyDown=&#123;(event) =&gt; event.preventDefault()&#125;&gt;Lenke 2&lt;/a&gt;
      </pre>
      <br />
      <br />

      <div>
        <div>
          Her er det umulig å komme seg videre til input-feltet for 'Etternavn',
          fordi <code>onBlur</code>-eventet til feltet 'Mellomnavn' brukes til å sette fokus på seg selv. 
        </div>
        <br />
        <div>
          <label htmlFor="input1">Fornavn</label>
          <input id="input1" type="text" />
        </div>
        <div>
          <label htmlFor="input2">Mellomnavn</label>
          <input id="input2" type="text" onBlur={(event) => {
              event.preventDefault();
              event.target.focus();
          }} />
        </div>
        <div>
          <label htmlFor="input3">Etternavn</label>
          <input id="input3" type="text" />
        </div>
      </div>
      <pre>
        &lt;label htmlFor="input2"&gt;Mellomnavn&lt;/label&gt; <br />
        &lt;input <br />
        {" "} id="input2" <br />
        {" "} type="text" <br />
        {" "} onBlur=&#123;(event) =&gt; &#123; <br />
        {" "} {" "} event.preventDefault(); <br />
        {" "} {" "} event.target.focus(); <br />
        {" "} &#125;&#125; <br /> 
        /&gt;
      </pre>
      <br />
    </div>
  )
}
