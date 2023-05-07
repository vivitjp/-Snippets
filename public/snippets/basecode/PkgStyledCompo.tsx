//-------------------------------
// Styled Component
//-------------------------------
// qw.pkg.styled.component
{
  import React, { useEffect, useState, useCallback } from "react"
  import styled from "styled-components"
  import { Layout } from "../layout/Layout"

  export const $TM_FILENAME_BASE = () => {
    const [state, setState] = useState(0)

    return (
      <Layout>
        <Section>
          <Row>
            <Div>{state}</Div>
          </Row>
        </Section>
      </Layout>
    )
  }

  const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  `
  const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2px;
    padding: 0;
  `
  const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2px;
    padding: 0;
  `
}

// qw.pkg.styled.div
{
  const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    width: 100%;
  `
  const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0.2rem;
    gap: 0.4rem;
    width: 100%;
  `
  const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center; //stretch;
    width: 100%;
    padding: 0.2rem;
    border-bottom: 1px solid #aaa;
    gap: 0.4rem;
  `
  const Cell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
  `
}
// qw.pkg.styled.inputs
{
  const Button = styled.button`
    width: 60px;
    height: 25px;
    padding: 3px 10px;
    border: 1px solid #aaa;
  `
  const Input = styled.input`
    padding: 0.2rem;
    width: 160px;
    height: 30px;
    color: #555;
    ::placeholder {
      color: grey;
    }
  `
  const Checkbox = styled.input.attrs({ type: "checkbox" })`
    padding: 0.2rem;
    width: 50px;
  `
}
// qw.pkg.styled.attrsWithProps
{
  type StyledTextInput = {
    width?: string
    height?: string
  }

  const StyledTextInput = styled.input.attrs<StyledTextInput>(
    ({ width, height }) => ({
      type: "text",
    })
  )<StyledTextInput>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "50px"};
    padding: 8px;
    ::placeholder {
      color: grey;
    }
  `
}
