import { useEffect, useState } from 'react';
import { DatabaseModel, FormattedDatabaseModel, TableName } from './modelTypes';
import useDatabaseContext from './useDatabaseContext';

/**
 * Reads Surf Session from database and formats them for user interface.
 * Has to be used inside of DatabaseContext provider.
 */
const useReadDatabaseTable = <RawT extends DatabaseModel, FormattedT extends FormattedDatabaseModel>(
    table_name: TableName,
    formatingFunction?: (instance: RawT) => FormattedT,
) => {
    const db = useDatabaseContext();
    const [data, setData] = useState<FormattedT[]>();

    const getReadFunction = () => {
        switch (table_name) {
            case 'surf_session':
                return db.readSurfSession;
            case 'surfboard':
                return db.readSurfboard;
            case 'wetsuit':
                return db.readWetsuit;
            case 'location':
                return db.readLocation;
            case 'tag':
                return db.readTag;
            case 'session_tag':
                return db.readSessionTag;
            default:
                throw Error('Unsuported Database Table.');
        }
    };

    const readFunction = getReadFunction();

    useEffect(() => {
        const readAndFormatData = async () => {
            let formattedData;
            if (formatingFunction) {
                const rawData = (await readFunction()) as RawT[];
                formattedData = rawData.map(formatingFunction);
                setData(formattedData);
            } else {
                formattedData = (await readFunction()) as FormattedT[];
                setData(formattedData);
            }
        };
        readAndFormatData();
    }, [db, readFunction, formatingFunction]);

    return data;
};

export default useReadDatabaseTable;
