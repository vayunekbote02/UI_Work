import React, { useState, useRef } from "react";
import PhotoCard from "./PhotoCard";
import PhotoForm from "./PhotoForm";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [newPhoto, setNewPhoto] = useState({ file: null, description: "" });
  const [editingIndex, setEditingIndex] = useState(null);
  const [fileName, setFileName] = useState("");
  const [editingDescription, setEditingDescription] = useState("");

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewPhoto({ ...newPhoto, file });
    setFileName(file ? file.name : "");
  };

  const handleDescriptionChange = (e) => {
    if (editingIndex !== null) {
      setEditingDescription(e.target.value);
    } else {
      setNewPhoto({ ...newPhoto, description: e.target.value });
    }
  };

  const handleAddPhoto = () => {
    if (newPhoto.file && newPhoto.description) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos([...photos, { ...newPhoto, url: reader.result }]);
        setNewPhoto({ file: null, description: "" });
        setFileName("");
      };
      reader.readAsDataURL(newPhoto.file);
    }
  };

  const handleRemovePhoto = (url) => {
    setPhotos(photos.filter((photo) => photo.url !== url));
  };

  const handleEditPhoto = (index) => {
    setEditingIndex(index);
    setEditingDescription(photos[index].description);
    fileInputRef.current.click();
  };

  const handleEditDescription = (index, newDescription) => {
    const updatedPhotos = photos.map((photo, i) =>
      i === index ? { ...photo, description: newDescription } : photo
    );
    setPhotos(updatedPhotos);
  };

  const handleFileSelect = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedPhotos = photos.map((photo, index) =>
          index === editingIndex
            ? { ...photo, url: reader.result, description: editingDescription }
            : photo
        );
        setPhotos(updatedPhotos);
        setEditingIndex(null);
        setEditingDescription("");
        setFileName("");
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="container mt-4">
      <PhotoForm
        fileName={fileName}
        newPhoto={newPhoto}
        editingIndex={editingIndex}
        editingDescription={editingDescription}
        handleFileChange={handleFileChange}
        handleDescriptionChange={handleDescriptionChange}
        handleAddPhoto={handleAddPhoto}
        handleFileSelect={handleFileSelect}
        fileInputRef={fileInputRef}
      />
      <hr />
      <h2>Photo Gallery</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {photos.map((photo, index) => (
          <PhotoCard
            photo={photo}
            key={photo.url}
            handleRemovePhoto={handleRemovePhoto}
            handleEditPhoto={() => handleEditPhoto(index)}
            handleEditDescription={(newDescription) =>
              handleEditDescription(index, newDescription)
            }
          />
        ))}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileSelect}
      />
    </div>
  );
};

export default PhotoGallery;
