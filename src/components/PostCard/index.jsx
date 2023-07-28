import { Link } from 'react-router-dom'
import styles from './PostCard.module.css'

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          alt="Imagem de capa do post"
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>

        <button className={styles.botaoLer}>Ler</button>
      </div>
    </Link>
  )
}
