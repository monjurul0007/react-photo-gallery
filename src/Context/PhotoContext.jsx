import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const PhotoContext = createContext({
  photoIds: [],
  selectedPhotoIds: [],
});

export const PhotoContextProvider = ({ children }) => {
  const [photoIds, setPhotoIds] = useState([]);
  const [selectedPhotoIds, setselectedPhotoIds] = useState([]);

  const handlePhotoIds = useCallback((ids) => {
    setPhotoIds(ids);

    localStorage.setItem("photoIds", JSON.stringify(ids));
  }, []);

  const handleSelectedPhotoIds = useCallback((ids) => {
    setselectedPhotoIds(ids);
  }, []);

  useEffect(() => {
    const localStoragePhotoIds = JSON.parse(localStorage.getItem("photoIds"));

    setPhotoIds(localStoragePhotoIds || []);
  }, []);

  const value = useMemo(
    () => ({
      photoIds,
      handlePhotoIds,
      selectedPhotoIds,
      handleSelectedPhotoIds,
    }),
    [photoIds, selectedPhotoIds]
  );

  return (
    <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>
  );
};
