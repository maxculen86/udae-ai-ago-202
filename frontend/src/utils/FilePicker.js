import React from 'react';
// import sections
import { FileUpload } from 'primereact/fileupload';

const Uploader = () => {

  return (
    <>
      <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUploadAuto} auto chooseLabel="Browse" />
    </>
  );
}

export default Uploader;