import { Data, TableA } from "./TableA"
import { Layout } from "./Layout"

const data: Data[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
]

export const ReactChildren: React.FC = () => {
  return (
    <Layout title="User List">
      <TableA data={data} />
      {/* <TableB data={data} /> 状況によって B を選択   */}
    </Layout>
  )
}
