import { useEffect, useState } from 'react';
import { Surfboard } from './modelTypes';
import useDatabaseContext from './useDatabaseContext';

/**
 * Reads Surfboards from database.
 * Has to be used inside of DatabaseContext provider.
 */
const useGetSurfboards = () => {
    const db = useDatabaseContext();

    const [boards, setBoards] = useState<Surfboard[]>([]);
    useEffect(() => {
        db.readSurfboard().then(result => setBoards(result));
    }, [setBoards, db]);

    return boards;
};

export default useGetSurfboards;
