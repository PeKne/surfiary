// import * as SQLite from  "expo-sqlite";
import connect, { sql } from '@databases/expo';
import mockData from './dataMockup';

import * as DbTypes from './modelTypes';

/**
 * Asynchronous function which performs database scheme set up.
 * @returns DatabaseInterface for database content manipulation
 */
const setUpDatabase = async () => {
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
            yield tx.query(sql`DROP TABLE IF EXISTS tag;`);
            yield tx.query(sql`DROP TABLE IF EXISTS session_tag;`);
        });
    };

    /**
     * Creates all application realated database tables if does not exist.
     */
    const initTables = async () => {
        db.query(sql`PRAGMA foreign_key = true;`); // TODO: force
        db.tx(function* Q(tx) {
            yield tx.query(sql`
        CREATE TABLE IF NOT EXISTS surfboard (
            name TEXT NOT NULL,
            description TEXT,
            brand TEXT,
            length REAL,
            volume REAL,
            type TEXT CHECK( type IN ('SHORT','FISH','LONG', 'SOFT') )   NOT NULL DEFAULT 'SHORT',
            date INTEGER
            );
        `);

            yield tx.query(sql`
        CREATE TABLE IF NOT EXISTS wetsuit (
            name TEXT NOT NULL,
            description TEXT,
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
        CREATE TABLE IF NOT EXISTS tag (
            label TEXT NOT NULL PRIMARY KEY
            );
        `);

            yield tx.query(sql`
        CREATE TABLE IF NOT EXISTS session_tag (
            session_id INTEGER NOT NULL,
            tag_label TEXT NOT NULL,
            PRIMARY KEY(session_id, tag_label),
            FOREIGN KEY (session_id) REFERENCES surf_session (rowid),
            FOREIGN KEY (tag_label) REFERENCES tag (label)
            );
        `);

            yield tx.query(sql`
        CREATE TABLE IF NOT EXISTS surf_session (
            name TEXT,
            description TEXT,
            duration INTEGER NOT NULL,
            date INTEGER,
            location_id  INTEGER NOT NULL,
            surfboard_id  INTEGER NOT NULL,
            wetsuit_id  INTEGER,
            FOREIGN KEY (location_id) REFERENCES location (rowid),
            FOREIGN KEY (surfboard_id) REFERENCES sufboard (rowid),
            FOREIGN KEY (wetsuit_id) REFERENCES wetsuit (rowid)
            );
        `);
        });
    };

    /**
     * Creates new relation in specific database table.
     * @param tableName table identifier
     * @param valueObject object holding key:value pairs of new relation
     */
    const insert = (tableName: DbTypes.TableName, valueObject: DbTypes.DatabaseModel) => {
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
    const remove = (tableName: DbTypes.TableName, columnName: DbTypes.ModelAttr, value: DbTypes.ModelAttrType) => {
        db.query(sql`DELETE FROM ${sql.ident(tableName)} WHERE ${sql.ident(columnName)} = ${sql.value(value)};`);
    };

    /**
     * Returns all existing relations from specific table with attribute equal to specific value.
     * @param tableName table identifier
     * @param columnName column identifier
     * @param value value to read by
     */
    const read = async <Model extends DbTypes.DatabaseModel, Column extends keyof Model>(
        tableName: DbTypes.TableName,
        columnName?: Column,
        value?: Model[Column],
    ) => {
        if (columnName) {
            return db.query(
                sql`SELECT rowid, *  FROM ${sql.ident(tableName)} WHERE ${sql.ident(columnName)} = ${sql.value(
                    value,
                )};`,
            );
        }

        return db.query(sql`SELECT rowid, *  FROM ${sql.ident(tableName)}`) as Promise<DbTypes.DatabaseModel[]>;
    };

    const databaseInterface: DbTypes.DatabaseInterface = {
        createSurfSession: insert.bind(null, 'surf_session'),
        createSurfboard: insert.bind(null, 'surfboard'),
        createWetsuit: insert.bind(null, 'wetsuit'),
        createLocation: insert.bind(null, 'location'),
        createTag: insert.bind(null, 'tag'),
        createSessionTag: insert.bind(null, 'session_tag'),

        readSurfboard: read.bind(null, 'surfboard'),
        readWetsuit: read.bind(null, 'wetsuit'),
        readLocation: read.bind(null, 'location'),
        readTag: read.bind(null, 'tag'),
        readSessionTag: read.bind(null, 'session_tag'),

        removeSurfSession: remove.bind(null, 'surf_session'),
        removeSurfboard: remove.bind(null, 'surfboard'),
        removeWetsuit: remove.bind(null, 'wetsuit'),
        removeLocation: remove.bind(null, 'location'),
        removeTag: remove.bind(null, 'tag'),
        removeSessionTag: remove.bind(null, 'session_tag'),

        readSurfSession: async (column, value) => {
            if (column) {
                return db.query(
                    sql`SELECT rowid, *  FROM surf_session WHERE ${sql.ident(column)} = ${sql.value(value)};`,
                );
            }

            return db.query(
                sql`SELECT sesh.rowid, sesh.name, sesh.description, sesh.date, sesh.duration, sesh.surfboard_id, sesh.wetsuit_id,
                sesh.location_id, surfboard.name as surfboard_name, wetsuit.name as wetsuit_name, location.name as location_name,
                group_concat(distinct tag_label) tags FROM surf_session as sesh LEFT JOIN surfboard LEFT JOIN wetsuit LEFT JOIN location
                LEFT JOIN session_tag as sesh_tags on sesh.rowid = sesh_tags.session_id GROUP BY sesh.rowid ORDER BY sesh.rowid;`,
            ) as Promise<DbTypes.RawSurfSession[]>;
        },
    };

    await dropTables();
    await initTables();
    await mockData(databaseInterface);

    // TODO: proper filter logic
    return Object.freeze(databaseInterface);
};

export default setUpDatabase;
