import styles from "@/styles/StepTitle.module.css";

export default function StepTitle({label, number}){
    return (
      <div className={styles.container}>
        <p className={styles.number}>#{number}</p>
        <p className={styles.label}>{label}</p>
      </div>
    );
}