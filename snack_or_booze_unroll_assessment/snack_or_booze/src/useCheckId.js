import React from 'react';

// custom hook to see if there's already an ID with the given name; don't want user to submit a duplicate

const useIsIdValid = (id, type, snacks, drinks) => {
    let res;
    if (type === 'snack') {
        res = snacks.filter(s => s.id === id);
    }
    if (type === 'drink') {
        res = drinks.filter(s => s.id === id);
    }
    
    if (res.length > 0) {
        return false
    }
    return true;
}

export default useIsIdValid;