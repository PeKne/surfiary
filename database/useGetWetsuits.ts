import { useEffect, useState } from 'react';
import { Wetsuit } from './modelTypes';
import useDatabaseContext from './useDatabaseContext';

/**
 * Reads Wetsuit from database.
 * Has to be used inside of DatabaseContext provider.
 */
const useGetWetsuits = () => {
    const db = useDatabaseContext();

    const [wetsuits, setWetsuits] = useState<Wetsuit[]>([]);
    useEffect(() => {
        db.readWetsuit().then(result => setWetsuits(result));
    }, [setWetsuits, db]);

    return wetsuits;
};

export default useGetWetsuits;
