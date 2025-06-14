import styles from './Button.module.css'

interface ButtonProps {
    onClick: () => void;
    className: string;
    disabled?: boolean;
}
export const ButtonPrev: React.FC<ButtonProps> = ({onClick, disabled}) => {
  return (
    <div>
        <button onClick={onClick} className={styles.prev} disabled={disabled}>
        <svg className={styles.svg} viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
        </button>
    </div>
  )
}
