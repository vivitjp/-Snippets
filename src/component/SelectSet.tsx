import styled from "styled-components"

//-------------------
type Options = {
  title: string
  value: string
}
type SelectSet = {
  options: Options[]
  widthEmpty?: boolean
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const emptyOption = {
  title: "",
  value: "",
}

export const SelectSet = ({
  options,
  onChange,
  widthEmpty = false,
}: SelectSet) => {
  const optionsWithEmpty: Options[] = widthEmpty
    ? [{ ...emptyOption }, ...options]
    : [...options]

  return (
    <Select onChange={onChange}>
      {!!options.length &&
        optionsWithEmpty.map((n, index) => (
          <option key={index} value={n.value}>
            {n.title}
          </option>
        ))}
    </Select>
  )
}

export const Select = styled.select`
  padding: 0.2rem;
  width: 160px;
  height: 40px;
  color: #555;
  border: 1px solid #aaa;
  border-radius: 3px;
`
