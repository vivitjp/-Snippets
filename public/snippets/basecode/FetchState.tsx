// ■ React Fetch & State

//-------------------------------
// SWR
//-------------------------------
// qw.fetch.swr
{
  //yarn add swr
  import useSWR, { Fetcher } from "swr"
  import { XxxType } from "Xxx"

  const fetcher: Fetcher<XxxType[] | undefined, string> = async (
    url: string
  ) => {
    const res = await fetch(url)
    return await res.json()
  }

  type useXxx = {
    number: number
  }

  const URL: string = "https://"

  export const useXxx = ({ number }: useXxx) => {
    const { data, error } = useSWR(`${URL}/${number}`, fetcher, {
      revalidateOnFocus: false,
    })

    return {
      people: data,
      isLoading: !error && !data,
      isError: error,
    }
  }
}

//-------------------------------
// Recoil
//-------------------------------
// qw.state.recoil.1.state
{
  import { atom } from "recoil"
  export const xxxxRecoilState = atom<TypeXxxx[]>({
    key: "xxxxRecoilStateKey", //Unique名
    default: dataXxxx, //初期データ
  })
}

// qw.state.recoil.2.root
{
  import { RecoilRoot } from "recoil"
  export const ParentCompo = () => {
    return (
      <RecoilRoot>
        <ChildCompo />
      </RecoilRoot>
    )
  }
}

// qw.state.recoil.3.use
{
  import { useRecoilState } from "recoil"
  import { xxxxRecoilState } from "./xxxxRecoilState"
  export const ChildCompo = () => {
    const [xxxx] = useRecoilState(xxxxRecoilState)

    return <Compo data={xxxx} />
  }
}
