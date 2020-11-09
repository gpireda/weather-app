import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import styles from './Modal.module.scss'

const modalRoot = document.getElementById('modal-root')

const Modal: React.FC = ({ children }) => {
  const container: Element = document.createElement('div')

  useEffect(() => {
    setContainer()
    modalRoot!.appendChild(container)
    document.body.style.overflow = 'hidden'

    return () => {
      modalRoot!.removeChild(container!)
      document.body.style.overflow = 'unset'
    }
  }, [])

  function setContainer() {
    container.setAttribute(
      'style',
      'position: fixed; border-radius: 16px; padding: 8px 0; overflow: hidden; z-index: 2; background: #fff; width: 90vw; left: 5vw; top: 30vh',
    )
  }

  return (
    <>
      <div id={styles['modal-mask']} />
      {ReactDOM.createPortal(children, container!)}
    </>
  )
}

export default Modal
