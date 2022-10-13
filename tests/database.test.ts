import getDatabase from '../database/model';

describe('Database connection tests', () => {
    test('Surf session test', async () => {
        const database = await getDatabase();
        const locations = await database.readLocation('name', 'board');
        expect(locations.length).toBe(1);
    });
});
