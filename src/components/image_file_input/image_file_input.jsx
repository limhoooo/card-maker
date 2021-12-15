import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
    const inputRef = useRef();
    const onButtonClick = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }
    const onChange = async (e) => {
        const uploaded = await imageUploader.upload(e.target.files[0])
        onFileChange({
            name: uploaded.orihinal_filename,
            url: uploaded.url
        })
    }
    return (
        <div className={styles.container}>
            <input
                onChange={onChange}
                ref={inputRef}
                className={styles.input}
                type="file" accept='image/*'
                name="file"
            />
            <button className={styles.button} onClick={onButtonClick}>
                {name || 'No File'}
            </button>
        </div>
    )
};

export default ImageFileInput;