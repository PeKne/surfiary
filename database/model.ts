// import * as SQLite from  "expo-sqlite";
import connect, { sql } from '@databases/expo';

import * as T from './modelTypes';

const getDatabase = async () => {
    const db = connect('surfiary-database');

    /**
     * Drops all application realated existing database tables.
     */
    const dropTables = async () => {
        db.tx(function* Q(tx) {
            yield tx.query(sql`DROP TABLE IF EXISTS surf_session;`);
            yield tx.query(sql`DROP TABLE IF EXISTS surfboard;`);
            yield tx.query(sql`DROP TABLE IF EXISTS wetsuit;`);
            yield tx.query(sql`DROP TABLE IF EXISTS location;`);
        });
    };

    /**
     * Creates all application realated database tables if does not exist.
     */
    const initTables = async () => {
        db.tx(function* Q(tx) {
            yield tx.query(sql`
        CREATE TABLE IF NOT EXISTS surfboard (
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            brand TEXT,
            length REAL,
            volume REAL,
            type TEXT CHECK( type IN ('SHORT','FISH','LONG', 'SOFT') )   NOT NULL DEFAULT 'PERF',
            date INTEGER
            );
        `);

            yield tx.query(sql`
        CREATE TABLE IF NOT EXISTS wetsuit (
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            brand TEXT,
            thickness REAL,
            type TEXT CHECK( type IN ('LONG', 'SHORT', 'RASH') )   NOT NULL DEFAULT 'LONG',
            date INTEGER
            );
        `);

            yield tx.query(sql`
        CREATE TABLE IF NOT EXISTS location (
            name TEXT NOT NULL,
            longitude REAL,
            latitude REAL
            );
        `);

            yield tx.query(sql`
        CREATE TABLE IF NOT EXISTS surf_session (
            name TEXT,
            description TEXT,
            duration INTEGER NOT NULL,
            date INTEGER,
            location_id  INTEGER NOT NULL,
            FOREIGN KEY (location_id) REFERENCES location (rowid)
            );
        `);
        });
    };

    /**
     * Creates new relation in specific database table.
     * @param tableName table identifier
     * @param valueObject object holding key:value pairs of new relation
     */
    const insert = (tableName: T.TableName, valueObject: T.DatabaseModel) => {
        const keyArray = Object.keys(valueObject);
        const valueArray = Object.values(valueObject);
        const escapedKeys = keyArray.map(n => sql.ident(n));
        const escapedValues = valueArray.map(n => sql.value(n));
        db.tx(function* Q(tx) {
            yield tx.query(sql`
            INSERT INTO ${sql.ident(tableName)}
            (${sql.join(escapedKeys, sql`, `)}) VALUES (${sql.join(escapedValues, sql`, `)});
            `);
        });
    };

    /**
     * Removes all relations from specific table equal to column:value constraint.
     * @param tableName table identifier
     * @param columnName column identifier
     * @param value value to delete by
     */
    const remove = (tableName: T.TableName, columnName: T.ModelRow, value: T.ModelRowType) => {
        db.query(sql`DELETE FROM ${sql.ident(tableName)} WHERE ${sql.ident(columnName)} = ${sql.value(value)};`);
    };

    /**
     * Returns all existing relations from specific table with attribute equal to specific value.
     * @param tableName table identifier
     * @param columnName column identifier
     * @param value value to read by
     * @returns
     */
    const read = async (tableName: T.TableName, columnName: T.ModelRow, value: T.ModelRowType) => {
        return db.query(
            sql`SELECT rowid, *  FROM ${sql.ident(tableName)} WHERE ${sql.ident(columnName)} = ${sql.value(value)};`,
        );
    };

    // SurfSession table manipulation functions
    const createSurfSession = (valueObject: T.SurfSessionModel) => insert('surf_session', valueObject);
    const removeSurfSession = (column: T.SurfSessionRow, value: T.SurfSessionRowType) =>
        remove('surf_session', column, value);
    const readSurfSession = (column: T.SurfSessionRow, value: T.SurfSessionRowType) =>
        read('surf_session', column, value);

    // Surfboard table manipulation functions
    const createSurfboard = (valueObject: T.SurfboardModel) => insert('surfboard', valueObject);
    const removeSurfboard = (column: T.SurfboardRow, value: T.SurfboardRowType) => remove('surfboard', column, value);
    const readSurfboard = (column: T.SurfboardRow, value: T.SurfboardRowType) => read('surfboard', column, value);

    // Wetsuit table manipulation functions
    const createWetsuit = (valueObject: T.WetsuitModel) => insert('wetsuit', valueObject);
    const removeWetsuit = (column: T.WetsuitRow, value: T.WetsuitRowType) => remove('wetsuit', column, value);
    const readWetsuit = (column: T.WetsuitRow, value: T.WetsuitRowType) => read('wetsuit', column, value);

    // Location table manipulation functions
    const createLocation = (valueObject: T.LocationModel) => insert('location', valueObject);
    const removeLocation = (column: T.LocationRow, value: T.LocationRowType) => remove('location', column, value);
    const readLocation = (column: T.LocationRow, value: T.LocationRowType): Promise<T.LocationModel[]> =>
        read('location', column, value);

    await dropTables();
    await initTables();
    createLocation({
        name: 'board',
        longitude: 15,
        latitude: 14,
    });

    return Object.freeze({
        createSurfSession,
        createSurfboard,
        createWetsuit,
        createLocation,
        readSurfSession,
        readSurfboard,
        readWetsuit,
        readLocation,
        removeSurfSession,
        removeSurfboard,
        removeWetsuit,
        removeLocation,
    });
};

export default getDatabase;
export type DatabaseInterface = Awaited<ReturnType<typeof getDatabase>>;
