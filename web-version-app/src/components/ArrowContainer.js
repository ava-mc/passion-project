import styles from '@/styles/ArrowContainer.module.css';

export default function ArrowContainer({children}) {
    return (
        <div className={styles.arrowContainer}>
            {children}
        </div>
    )
} 
