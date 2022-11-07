import { useEffect, useState } from 'react';
import { Location } from './modelTypes';
import useDatabaseContext from './useDatabaseContext';

/**
 * Reads Locations from database.
 * Has to be used inside of DatabaseContext provider.
 */
const useGetLocations = () => {
    const db = useDatabaseContext();

    const [locations, setLocations] = useState<Location[]>([]);
    useEffect(() => {
        db.readLocation().then(result => setLocations(result));
    }, [setLocations, db]);

    return locations;
};

export default useGetLocations;
