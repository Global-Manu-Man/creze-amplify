import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import '../assets/styles/styles.css';

const UploadFragmentation = ({ files }) => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUpload = () => {
    // Lógica para fragmentar los archivos y subirlos a AWS S3
    // Ejemplo de fragmentación de archivos
    const fragmentSize = 1024 * 1024; // 1MB
    files.forEach(file => {
      const totalFragments = Math.ceil(file.size / fragmentSize);
      for (let i = 0; i < totalFragments; i++) {
        const fragment = file.slice(i * fragmentSize, (i + 1) * fragmentSize);
        uploadFragment(fragment, i, totalFragments);
      }
    });
  };

  const uploadFragment = (fragment, index, totalFragments) => {
    // Simulación de subida de fragmento y actualización de progreso
    setTimeout(() => {
      setUploadProgress(prev => prev + (100 / totalFragments));
    }, 500);
  };

  return (
    <div className="upload-fragmentation">
      <button onClick={handleUpload}>Subir Documentos</button>
      <ProgressBar progress={uploadProgress} />
    </div>
  );
};

export default UploadFragmentation;
