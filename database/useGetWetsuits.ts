import { useEffect, useState } from 'react';
import { formatTimestamp } from '../utils';
import { WetsuitType, WetsuitFormatted, Wetsuit } from './modelTypes';
import useDatabaseContext from './useDatabaseContext';

const formatWetsuitType = (type_code: WetsuitType) => {
    switch (type_code) {
        case 'SHORT':
            return 'Shortsleeve';
        case 'LONG':
            return 'Longsleeve';
        case 'RASH':
            return 'Rashguard';
        default:
            return 'Unknown';
    }
};

/**
 * Reads and formats Surfboards from database.
 * Has to be used inside of DatabaseContext provider.
 */
const useGetWetsuits = () => {
    const db = useDatabaseContext();

    const [wetsuits, setWetsuits] = useState<WetsuitFormatted[]>([]);
    useEffect(() => {
        const readAndFormatSurfboards = async () => {
            const raw = await db.readWetsuit();
            const formatted = raw.map((wetsuit: Wetsuit): WetsuitFormatted => {
                return {
                    ...wetsuit,
                    dateFormatted: formatTimestamp(wetsuit.date, 'date'),
                    typeFormatted: formatWetsuitType(wetsuit.type)
                };
            });
            setWetsuits(formatted);
        };
        readAndFormatSurfboards();
    }, [setWetsuits, db]);

    return wetsuits;
};

export default useGetWetsuits;
