import styles from './Post.module.css'

export default function Post({ post }) {
  return (
    <div className={styles.post}>
      <img
        alt="Imagem de capa do post"
        className={styles.capa}
        src={`/assets/posts/${post.id}/capa.png`}
      />

      <h2 className={styles.titulo}>{post.titulo}</h2>

      <button className={styles.botaoLer}>Ler</button>
    </div>
  )
}
