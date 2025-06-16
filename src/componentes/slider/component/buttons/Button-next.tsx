import styles from './Button.module.css';

interface ButtonProps {
    onClick: () => void;
    className: string;
    disabled?: boolean;
}

const ButtonNext: React.FC<ButtonProps> = ({onClick, disabled})=> {
  return (
    <div className={styles.container}>
        <button onClick={onClick} className={styles.next} disabled={disabled}>
        <svg className={styles.svg} viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </button>
    </div>
  )
}

export default ButtonNext

