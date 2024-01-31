import { useField } from 'formik';
import React from 'react'

const FileUpload = ({ fileRef, ...props }:any) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor="files">Choose files</label>{" "}
        <input ref={fileRef} multiple={true} type="file" {...field} />
        {meta.touched && meta.error ? (
          <div style={{ color: "red" }}>{meta.error}</div>
        ) : null}
      </div>
    );
  };
export default FileUpload