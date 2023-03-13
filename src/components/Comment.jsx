import {ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/joaov-dev.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João V Santos</strong>

                            <time title="13 de dezembro as 19:45" dateTime='2022-12-13 19:45'>Cerca de 2h atrás</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}