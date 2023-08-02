import './Post.css'

import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'components/PostModelo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import NaoEncontrada from 'pages/NaoEncontrada'
import PaginaPadrao from 'components/PaginaPadrao'

export default function Post() {
  const { id } = useParams()

  const post = posts.find(post => post.id === Number(id))

  if (!post) {
    return <NaoEncontrada />
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  )
}
