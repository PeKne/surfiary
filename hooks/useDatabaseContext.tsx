import { useContext } from 'react';
import { DatabaseInterface } from '../database/model';
import DatabaseContext from '../database/DatabaseContext';

const useDatabaseContext = () => {
    return useContext(DatabaseContext) as DatabaseInterface;
};

export default useDatabaseContext;
