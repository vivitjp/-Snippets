import styled from "styled-components"
import { zooMenu } from "../../store/menuStore"
import { Circles } from "react-loader-spinner"
import { SpinnerWrapper } from "../../library/hooks/components/SpinnerWrapper"

type Props = {
  Snippets: () => JSX.Element
  isPending: boolean
}

export const PageBody = ({ Snippets, isPending }: Props) => {
  const selectedMenu = zooMenu((state) => state.selectedMenu)
  const titles = selectedMenu?.name.split(":") ?? []

  return (
    <BodySection data-testid="layout-section">
      <BodyTitleWrapper>
        <BodyTitle data-testid="layout-title">{titles[0]}</BodyTitle>
        <BodySubtitle>{titles?.[1] ?? ""}</BodySubtitle>
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

const BodySubtitle = styled.div`
  font-size: 2rem;
  font-weight: 300;
  color: var(--main-color);
`
