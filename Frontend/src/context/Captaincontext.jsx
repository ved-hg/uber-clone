import { useState, useContext, createContext } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = async (captainData) => {
        setCaptain(captainData);
    };
    const value={
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
    };
    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>);
    }

    export default CaptainContext;