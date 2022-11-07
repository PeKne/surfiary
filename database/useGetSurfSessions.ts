import { useEffect, useState } from 'react';
import { FormattedSurfSession, RawSurfSession } from './modelTypes';
import { formatDuration, formatTimestamp } from '../utils';
import useDatabaseContext from './useDatabaseContext';

/**
 * Reads Surf Session from database and formats them for user interface.
 * Has to be used inside of DatabaseContext provider.
 */
const useGetSurfSessions = () => {
    const db = useDatabaseContext();

    const [sessions, setSessions] = useState<FormattedSurfSession[]>([]);

    useEffect(() => {
        const readAndFormatSessions = async () => {
            const rawSessions = await db.readSurfSession();
            const formatedSession = rawSessions.map((sesh: RawSurfSession) => {
                return {
                    ...sesh,
                    datetimeFormatted: formatTimestamp(sesh.date),
                    durationFormatted: formatDuration(sesh.duration),
                    tags: sesh.tags ? sesh.tags.split(',') : [],
                } as FormattedSurfSession;
            });
            setSessions(formatedSession);
        };
        readAndFormatSessions();
    }, [setSessions, db]);

    return sessions;
};

export default useGetSurfSessions;
