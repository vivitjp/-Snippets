const defaultURL: string = "https://vercel-express-ts-01.vercel.app"

import { useState } from "react"

type Props = {
  URL?: string
  numbers?: number
}

export const useFetchData = () => {
  const [isError, setIsError] = useState<boolean>(false)
  const [pending, setPending] = useState<boolean>(false)
  const [value, setValue] = useState<any>(null)

  //キャッシュ機能がないので、２度読み込まれる

  const fetchData = ({ URL = defaultURL, numbers = 10 }: Props) => {
    try {
      if (numbers <= 0) throw Error("Numberは1以上")
      fetch(`${URL}/${numbers}`)
        .then((res) => res.json())
        .then((json) => {
          setValue(json)
          setPending(false)
        })
        .catch((err) => {
          throw Error(err)
        })
    } catch (error) {
      console.log(error)
      setIsError(true)
    }
  }

  return { fetchData, value, isError, pending }
}
