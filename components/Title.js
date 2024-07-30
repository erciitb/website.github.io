// import Navbar from './Navbar.js'
import styles from "./Title.module.scss"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

function Title(props) {
	return (
		<div className={styles.container}>
			<img className={styles.title} src={prefix + "/static/images/title_image.png"} />
			<img className={styles.ERC_logo} src={prefix + "/static/images/ERC_white.png"} />
		</div>

	);
}

export default Title