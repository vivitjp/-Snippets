import styled from "styled-components"
import { zooMenu } from "../../store/menuStore"
import { Circles } from "react-loader-spinner"
import { SpinnerWrapper } from "../../library/hooks/components/SpinnerWrapper"
import { useState, useEffect, useRef } from "react"
import { Button } from "../../common/styleInput"
import { useOCButton } from "../../store/storeOC"

type Props = {
  Snippets: () => JSX.Element
  isPending: boolean
  isInitialOpened?: boolean
}

export const PageBody = ({ Snippets, isPending, isInitialOpened }: Props) => {
  const [initState, setInitState] = useState(isInitialOpened)
  const refButton = useRef<HTMLButtonElement>(null)
  const selectedMenu = zooMenu((state) => state.selectedMenu)
  const titles = selectedMenu?.name.split(":") ?? []

  const [elements, setElements] = useState<NodeListOf<Element> | undefined>()

  const isOpened = useOCButton((state) => state.isOpened)
  const toggleClose = useOCButton((state) => state.toggleClose)
  const toggleOpenClose = useOCButton((state) => state.toggleOpenClose)

  const setAttribute = () => {
    if (!elements?.length) return
    //console.log("setAttribute", isOpened)
    elements.forEach((el) => {
      isOpened ? el.removeAttribute("open") : el.setAttribute("open", "")
    })
    toggleOpenClose()
  }

  useEffect(() => {
    if (isPending) return
    //console.log("detailClass", isOpened)
    const els = document.querySelectorAll(".detailClass")
    setElements(els)
    toggleClose()
  }, [isPending, toggleClose])

  useEffect(() => {
    //console.log("isInitialOpened", elements?.length, initState)
    if (!elements?.length || !initState) return

    //console.log("isInitialOpened", isInitialOpened)
    elements.forEach((el) => {
      el.setAttribute("open", "")
    })
    setInitState(false)
  }, [elements, initState])

  const handleOpenClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setAttribute()
  }

  return (
    <BodySection data-testid="layout-section">
      <BodyTitleWrapper>
        <BodyTitle data-testid="layout-title">{titles[0]}</BodyTitle>
        <Button onClick={handleOpenClose} width="100px" ref={refButton}>
          {isOpened ? "Close All" : "Open All"}
        </Button>
      </BodyTitleWrapper>
      <BodySection>
        {isPending ? (
          <SpinnerWrapper>
            <Circles
              height="160"
              width="160"
              color="Firebrick"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </SpinnerWrapper>
        ) : (
          <Snippets />
        )}
      </BodySection>
    </BodySection>
  )
}

const BodySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`
const BodyTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid var(--main-color);
  padding: 0 1rem;
`

const BodyTitle = styled.div`
  font-size: 2rem;
  font-weight: 300;
  color: var(--main-color);
`
