import { Header } from "./components/Header.js"
import { Post } from "./components/Post.js"
import type { PostType } from "./components/Post.js"

import styles from './App.module.css'

import './global.css';
import { Sidebar } from "./components/Sidebar.js";

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joaov-dev.png',
      name: 'Joao V Santos',
      role: 'Web Dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio! Deem uma checada lá...'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-05-02 19:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content: 'Fala Devs!'},
      { type: 'paragraph', content: 'Acabou de sair um novo video no canal da Rocketseat!'},
      { type: 'link', content: 'youtube.com/rocketseat'},
    ],
    publishedAt: new Date('2025-05-01 21:00:00'),
  }
]

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (<Post
              key={post.id}
              post={post}
            />)
          })}
        </main>

      </div>
      
    </div>
  )
}
