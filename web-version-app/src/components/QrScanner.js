import QrReader from "modern-react-qr-reader";
import styles from '@/styles/Receiver.module.css';

const QrScanner = ({handleScan, handleError}) => {
    return (
      <QrReader
        facingMode={"environment"}
        className={styles.camera}
        onError={handleError}
        onScan={handleScan}
      />
    );
};

export default QrScanner;
