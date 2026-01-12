import React from "react"

type CompoProps = {
  data: { name: string; age: number }[]
  children: (data: { name: string; age: number }[]) => React.ReactNode
}

// ComponentWithChildren
const Table: React.FC<CompoProps> = ({ data, children }) => {
  return (
    <div>
      <h1>TABLE</h1>
      {children(data)}
    </div>
  )
}

type Props = {
  title: string;
}

export const LabeledWithCallback: React.FC<Props> = ({ title }) => {
  const data: { name: string; age: number }[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ]

  return (
    <div>
      <h1>{title}</h1>
      <Table data={data}>
        {(data) => {
          return data.map(d => (
            <div key={d.name}>
              <span>{d.name}</span><span>{d.age}</span>
            </div>)
          )
        }}
      </Table>
    </div>
  )
}