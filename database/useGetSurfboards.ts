import { useEffect, useState } from 'react';
import { formatTimestamp } from '../utils';
import { Surfboard, SurfboardFormatted, SurfboardType } from './modelTypes';
import useDatabaseContext from './useDatabaseContext';

const formatSurfboardType = (type_code: SurfboardType) => {
    switch (type_code) {
        case 'SHORT':
            return 'Shortboard';
        case 'FISH':
            return 'Fish';
        case 'LONG':
            return 'Longboard';
        case 'SOFT':
            return 'Softboard';
        default:
            return 'Unknown';
    }
};

/**
 * Reads and formats Surfboards from database.
 * Has to be used inside of DatabaseContext provider.
 */
const useGetSurfboards = () => {
    const db = useDatabaseContext();

    const [surfboards, setSurfboards] = useState<SurfboardFormatted[]>([]);
    useEffect(() => {
        const readAndFormatSurfboards = async () => {
            const rawSurfboards = await db.readSurfboard();
            const formatedSurfboard = rawSurfboards.map((board: Surfboard) => {
                return {
                    ...board,
                    dateFormatted: formatTimestamp(board.date, 'date'),
                    typeFormatted: formatSurfboardType(board.type),
                } as SurfboardFormatted;
            });
            setSurfboards(formatedSurfboard);
        };
        readAndFormatSurfboards();
    }, [setSurfboards, db]);

    return surfboards;
};

export default useGetSurfboards;
