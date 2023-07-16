import React, { ChangeEvent, useRef, useState } from "react";
import styles from "./fileupload_comp.module.scss";

interface Props {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: any;
}

export const FileuploadComp: React.FC<Props> = ({ handleChange, error }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePickFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);

    if (!e.target.files) return;
    const chosenFile = e.target.files[0];
    setThumbnail(URL.createObjectURL(chosenFile));
  };

  return (
    <div>
      <div className={styles.upload_container}>
        <input
          onChange={(e) => handleFileChange(e)}
          type="file"
          ref={fileInputRef}
        />
        <p>Drop files here to upload...</p>
        <button onClick={handlePickFile}>{thumbnail ? 'Change file': 'Browse files'}</button>
      </div>
      {thumbnail && !error && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={styles.file_preview}
          src={thumbnail ? thumbnail : ""}
          alt={"preview"}
        />
      )}

      {error && <p className={styles.error_message}>{error}</p>}
    </div>
  );
};

export default FileuploadComp;
