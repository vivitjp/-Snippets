import styled, { css } from "styled-components"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0;
  min-width: 100%;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
`

export const HeaderWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: var(--main-color);
`

export const HeaderTitle = styled.section`
  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;
`

export const HeaderOptions = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  height: 100%;
  font-size: 1.8rem;
  font-weight: 300;
  color: #fff;
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  min-height: calc(100vh - 50px);
`

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  min-width: 140px; // <---- Side Menu 幅
  max-width: 140px; // <---- Side Menu 幅
  padding: 5px;
  padding-bottom: 50px;
  background-color: #f3eed5;
`

export const Group = styled.details`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
`
export const MenuGroupTitle = styled.summary`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
  width: 100%;
  color: #777;
  background-color: white;
  border: 1px solid white;
  border-left: 5px solid var(--main-color);
  border-bottom: 1px solid var(--main-color);
  cursor: pointer;
  :hover {
    border-right: 1px solid var(--main-color);
    border-top: 1px solid var(--main-color);
  }
  font-weight: 600;
`

export const GroupBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 5px;
`

type MenuItem = {
  isPending?: boolean
}
export const MenuItem = styled.div<MenuItem>`
  ${({ isPending = false }) => css`
    padding: 5px;
    text-decoration: none;
    font-size: 0.8rem;
    width: 100%;
    color: #999;
    cursor: default;
    ${
      isPending &&
      css`
      color: #555;
      :hover {
        cursor: pointer;
        color: var(--main-color);
      }
    `
    }
  `}
`

export const MenuItemGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`

export const MenuItemGroupItems = styled.div`
  text-decoration: none;
  font-size: 0.8rem;
  color: #777;
  cursor: pointer;
  :hover {
    color: var(--main-color);
  }
`

export const Playground = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding: 10px;
  margin-bottom: 100px;
  width: 100%;
  overflow: hidden;
`
