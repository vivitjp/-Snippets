import styled from "styled-components"
import { zooMenu } from "../../store/menuStore"
import { Circles } from "react-loader-spinner"
import { SpinnerWrapper } from "../../library/hooks/components/SpinnerWrapper"
import { useState, useEffect } from "react"
import { Button } from "../../common/styleInput"
import { useOCButton } from "../../store/storeOC"

type Props = {
  Snippets: () => JSX.Element
  isPending: boolean
}

export const PageBody = ({ Snippets, isPending }: Props) => {
  const selectedMenu = zooMenu((state) => state.selectedMenu)
  const titles = selectedMenu?.name.split(":") ?? []

  const [elements, setElements] = useState<NodeListOf<Element> | undefined>()

  const isOpened = useOCButton((state) => state.isOpened)
  const toggleClose = useOCButton((state) => state.toggleClose)
  const toggleOpenClose = useOCButton((state) => state.toggleOpenClose)

  useEffect(() => {
    if (isPending) return
    const els = document.querySelectorAll(".detailClass")
    setElements(els)
    toggleClose()
  }, [isPending, toggleClose])

  const handleOpenClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    if (!elements?.length) return
    elements.forEach((el) => {
      isOpened ? el.removeAttribute("open") : el.setAttribute("open", "")
    })
    toggleOpenClose()
  }

  return (
    <BodySection data-testid="layout-section">
      <BodyTitleWrapper>
        <BodyTitle data-testid="layout-title">{titles[0]}</BodyTitle>
        <Button onClick={handleOpenClose} width="100px">
          {isOpened ? "Close All" : "Open All"}
        </Button>
      </BodyTitleWrapper>
      <BodySection>
        {isPending ? (
          <SpinnerWrapper>
            <Circles
              height="160"
              width="160"
              color="#eee8aa"
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
  gap: 20px;
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
