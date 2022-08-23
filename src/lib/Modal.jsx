import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './Modal.module.scss'

const Modal = ({title, content, visible, hideModal}) => {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(visible)
  }, [visible])
  
  return isVisible && (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.close} onClick={hideModal}>x</div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.content}>{content}</p>
        </div>
      </div>
    </>
  )
};

export default Modal;