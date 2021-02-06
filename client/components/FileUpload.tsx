import React, {useRef} from 'react';

interface FileUploadProps {
    setFile: Function;
    accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files[0])
    }

    return (
        <div onClick={() => ref.current.click()}>
            <input
                type="file"
                accept={accept}
                style={{display: "none"}}
                ref={ref}
                onChange={onChange}
            />
            {children}
        </div>
    );
};

export default FileUpload;
