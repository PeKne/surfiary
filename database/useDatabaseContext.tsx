import { useContext } from 'react';
import { DatabaseInterface } from './modelTypes';
import DatabaseContext from './DatabaseContext';

const useDatabaseContext = () => {
    return useContext(DatabaseContext) as DatabaseInterface;
};

export default useDatabaseContext;
