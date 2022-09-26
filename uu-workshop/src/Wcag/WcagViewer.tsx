import React, { useEffect, useState } from 'react'
import styles from './WcagViewer.module.scss'

interface ResultIssue {
  code: string
  context: string
  message: string
  selector: string
  type: string
  typeCode: number
}

interface Results {
  documentTitle: string
  pageUrl: string
  issues: ResultIssue[]
}

function WcagIssues(props: { issue: ResultIssue }): JSX.Element {
  const { issue } = props
  return (
    <ul className={styles.issue}>
      <li>
        <span>Code:</span>
        <span> {issue.code}</span>
      </li>
      <li>
        <span>Message:</span>
        <span>{issue.message}</span>
      </li>
      <li>
        <span>Context:</span>
        <span>{issue.context}</span>
      </li>
      <li>
        <span>Selector:</span>
        <span> {issue.selector}</span>
      </li>
      <li>
        <span>Type:</span>
        <span>{issue.type}</span>
      </li>
      <li>
        <span>TypeCode:</span>
        <span>{issue.typeCode}</span>
      </li>
    </ul>
  )
}

function WcagViewer(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [pa11yResult, setPa11yResult] = useState({} as Results)

  useEffect(() => {
    if (import.meta.hot != null) {
      import.meta.hot.on('pa11y:updated', (data: Results) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setPa11yResult(data)
      })
    }
  }, [])

  return (
    <section className="wcag-issues">
      <h2>Wcag issues</h2>
      {pa11yResult.issues?.map((issue, index) => {
        return (
          <div key={index}>
            <WcagIssues issue={issue} />
          </div>
        )
      })}
    </section>
  )
}

export default WcagViewer
