import './DevelopingForAll.scss'

export function DevelopingForAll(): JSX.Element {
  return (
    <div className="developing-for-all">
      <a
        href="https://www.w3.org/WAI/tips/developing/"
        rel="noreferrer"
        target="_blank"
      >
        Developing for Web Accessibility
      </a>

      <div>
        <div>Associate a label with every form control</div>
        <div>Include alternative text for images</div>
        <div>Identify page language and language changes</div>
        <div>Use mark-up to convey meaning and structure</div>
        <div>Help users avoid and correct mistakes</div>
        <div>Reflect the reading order in the code order</div>
        <div>Write code that adapts to the user’s technology</div>
        <div>Provide meaning for non-standard interactive elements</div>
        <div>
          Ensure that all interactive elements are keyboard accessible Avoid
          CAPTCHA where possible
        </div>
      </div>
    </div>
  )
}
