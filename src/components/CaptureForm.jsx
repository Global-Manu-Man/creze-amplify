import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigation from "../pages/HomeBanner/Navigation";
import '../components/SuccessPage/SuccessPage.css';


const CaptureForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files); // Convertimos FileList a Array
    setSelectedFiles(files);
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = error => reject(error);
    });
  };

  const handleUpload = async () => {
    try {
      const fileNames = selectedFiles.map(file => file.webkitRelativePath || file.name);
      const base64Promises = selectedFiles.map(file => toBase64(file));
      const fileContents = await Promise.all(base64Promises);

      const body = {
        fileNames,
        fileContents
      };

      const response = await axios.post('https://toi0zw5wu9.execute-api.us-east-2.amazonaws.com/dev/upload', body, {
        headers: {
          'Content-Type': 'application/json'
        },
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          setUploadProgress(progress);
        }
      });

      if (response.status === 200) {
        console.log('Upload successful:', response.data);
        setUploadProgress(100); // Establecer el progreso a 100% al completar la carga
        navigate('/success'); // Redirige a la página de éxito
      } else {
        throw new Error('Failed to upload files');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      setUploadProgress(0); // Reiniciar el progreso en caso de error
    }
  };

  return (
  <div>
    <Navigation/>
    <div id="capture-form" className="capture-form-container">
      <div className="capture-form card">
        <h2>Formulario de Captura</h2>
        <form>
          <label htmlFor="files" className="file-label">
            Seleccione los documentos necesarios para un préstamo:
          </label>
          <input 
            type="file" 
            id="files" 
            className="file-input" 
            multiple 
            onChange={handleFileChange} 
          />
        </form>
        {selectedFiles.length > 0 && (
          <div className="button-container">
            <button type="button" className="btn primary" onClick={handleUpload}>Subir Documentos</button>
            <div className="progress-bar">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
              <span>{uploadProgress.toFixed(2)}%</span>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default CaptureForm;
