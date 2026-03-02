import { createContext, useState, useEffect } from 'react';

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
    const [myList, setMyList] = useState([]);

    useEffect(() => {
        const storedList = localStorage.getItem('netflix_mylist');
        if (storedList) {
            setMyList(JSON.parse(storedList));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('netflix_mylist', JSON.stringify(myList));
    }, [myList]);

    const addToList = (movie) => {
        setMyList((prev) => {
            if (!prev.find((item) => item.id === movie.id)) {
                return [...prev, movie];
            }
            return prev;
        });
    };

    const removeFromList = (id) => {
        setMyList((prev) => prev.filter((item) => item.id !== id));
    };

    const isInList = (id) => {
        return myList.some((item) => item.id === id);
    };

    return (
        <ListContext.Provider value={{ myList, addToList, removeFromList, isInList }}>
            {children}
        </ListContext.Provider>
    );
};
