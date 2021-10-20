import styles from './Navbar.module.css'

const { container } = styles

export default function Navbar () {
  return (
    <header className={container}>
      <p><strong>Ask Phill Assignment | <a href='https://www.linkedin.com/in/guido-carucci-11049710b/'>Guido Carucci 2021</a></strong></p>
    </header>
  )
}
