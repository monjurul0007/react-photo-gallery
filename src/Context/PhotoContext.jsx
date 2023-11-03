import { createContext, useCallback, useMemo, useState } from "react";

export const PhotoContext = createContext({
  photoIds: [],
});

export const PhotoContextProvider = ({ children }) => {
  const [photoIds, setPhotoIds] = useState([]);

  const handlePhotoIds = useCallback((ids) => {
    setPhotoIds(ids);
  }, []);

  const value = useMemo(() => ({ photoIds, handlePhotoIds }), [photoIds]);

  return (
    <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>
  );
};
