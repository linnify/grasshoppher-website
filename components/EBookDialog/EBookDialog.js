import Dialog from "@material-ui/core/Dialog";
import styles from "./EBookDialog.module.scss";
import CloseIcon from "@material-ui/icons/Close";
import { EBook } from "../EBook/EBook";
import { useDeviceSize } from "../../hooks/use-device-size.hook";

export const EBookDialog = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const { isMobile } = useDeviceSize();

  return (
    <Dialog
      fullScreen={isMobile}
      onClose={handleClose}
      open={open}
      maxWidth={"md"}
      classes={{
        paper: styles["ebook-dialog__paper"],
      }}
    >
      <div className={styles["ebook-dialog__close-button"]}>
        <CloseIcon onClick={handleClose} fontSize={"large"} />
      </div>
      <div className={styles["ebook-dialog"]}>
        <div>
          <div className={styles["ebook-dialog__wrapper"]}>
            <EBook disableAnimation={true} />
          </div>
        </div>
      </div>
    </Dialog>
  );
};
