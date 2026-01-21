import { Data, TableA } from "./TableA"
import { Layout } from "./Layout"

const data: Data[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
]

export const ReactChildrenWith = Layout.with(() => <TableA data={data} />)
