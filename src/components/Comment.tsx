import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface ComentProps {
	content: string;
	onDeleteComment: (coment: string) => void;
}

export function Comment({content, onDeleteComment}: ComentProps) {
	const [likeCount, setLikeCount] = useState(0);

	function handleDeleteComment(){
		onDeleteComment(content);
	}

	function handleLikeComment(){
		setLikeCount((state => {
			return state + 1;
		}));
	}

	return (
		<div className={styles.comment}>
			<Avatar 
				hasBorder={false} 
				src="https://github.com/diego3g.png"
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Diego Fernandes</strong>
							<time title='30 de abril as 09:04' dateTime="2025-04-30 09:04:07">Cerca de 1h atrás</time>
						</div>

						<button onClick={handleDeleteComment} title='Deletar comentario'>
							<Trash size={24}/>
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp size={20} />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	)
}