import styles from './AppContainer.module.css'
import PropTypes, { node } from 'prop-types'

export default function AppContainer ({ children }) {
  return <div className={styles.container}>{children}</div>
}

AppContainer.propTypes = {
  children: node.isRequired
}
