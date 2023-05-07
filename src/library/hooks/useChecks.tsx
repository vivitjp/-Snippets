import { useRef, useState } from "react"
import { Checks } from "../../component/Checks"

//----------------------
// Render Hooks Sample
//----------------------

type UseChecks = [boolean, () => JSX.Element]

export const useChecks = (labels: readonly string[]): UseChecks => {
  const [checkList, setCheckList] = useState(() => labels.map(() => false))

  const handleCheck = (index: number) => {
    setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)))
  }

  const isAllChecked = checkList.every((x) => x)

  const renderChecks = () => (
    <Checks checkList={checkList} labels={labels} handler={handleCheck} />
  )

  return [isAllChecked, renderChecks]
}
