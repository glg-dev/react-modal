import React, { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types'
import styles from './Modal.module.css'

export const Modal = ({title, content, visible, hideModal}) => {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(visible)
  }, [visible])
  
  return isVisible && (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.close} onClick={hideModal}>x</div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  )
};

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired
}