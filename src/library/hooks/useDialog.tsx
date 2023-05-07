import { CSSProperties, useCallback, useRef } from "react"
import styled from "styled-components"

type ModalProps = {
  children: React.ReactNode
  style?: CSSProperties
}

export const useDialog = () => {
  const modalRef: React.MutableRefObject<HTMLDialogElement | null> =
    useRef(null)

  const openModal = useCallback(() => {
    modalRef?.current?.showModal()
  }, [])

  const closeModal = useCallback(() => {
    modalRef?.current?.close()
  }, [])

  const stopPropagation = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation()
    },
    []
  )

  const Modal: React.FC<ModalProps> = ({ children, ...extra }) => {
    return (
      <Dialog ref={modalRef} onClick={closeModal} {...extra}>
        <StopPropagation onClick={stopPropagation}>{children}</StopPropagation>
      </Dialog>
    )
  }

  return { Modal, openModal, closeModal }
}

const Dialog = styled.dialog`
  width: 200px;
  height: 160px;
  background-color: #fff;
  border: none;
  box-shadow: 0 0 10px #aaa;

  ::backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`
const StopPropagation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
