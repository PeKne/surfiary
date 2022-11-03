/**
 *  This file contains code that fills database with fake data.
 *  CREATED FOR DEVELOPMENT AND TESTING PURPOSES ONLY!
 */
import { datetimeToUnix } from '../utils';
import * as DbTypes from './modelTypes';

const FAKE_SURF_SESSIONS: DbTypes.SurfSession[] = [
    {
        name: 'Evening Session',
        description:
            'In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means its possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.',
        duration: 80,
        location_id: 1,
        date: datetimeToUnix(new Date()),
        surfboard_id: 1,
        wetsuit_id: 1,
    },
    {
        name: 'Morning Session',
        description: 'I was stoked even more!',
        duration: 120,
        location_id: 1,
        date: datetimeToUnix(new Date()),
        surfboard_id: 1,
    },
];

const FAKE_SURFBOARDS: DbTypes.Surfboard[] = [
    {
        name: 'crusher',
        brand: 'XX',
        description: 'dfsdfd',
        date: 12,
        length: 12,
        volume: 15,
        type: 'FISH',
    },
];

const FAKE_LOCATIONS: DbTypes.Location[] = [{ name: 'Balangan', latitude: 12, longitude: 11 }];
const FAKE_WETSUITS: DbTypes.Wetsuit[] = [
    {
        name: 'Duckdiver 5000',
        description: "It's a beast.",
        brand: "O'neil",
        thickness: 4.3,
        type: 'LONG',
        date: 12,
    },
];
const FAKE_TAGS: DbTypes.Tag[] = [{ label: 'Tagged' }, { label: 'taggedAgain' }];
const FAKE_SESSION_TAGS: DbTypes.SessionTag[] = [
    { session_id: 1, tag_label: 'Tagged' },
    { session_id: 1, tag_label: 'TaggedAgain' },
];

const mockData = async (db: DbTypes.DatabaseInterface) => {
    FAKE_SURFBOARDS.forEach(data => db.createSurfboard(data));
    FAKE_WETSUITS.forEach(data => db.createWetsuit(data));
    FAKE_LOCATIONS.forEach(data => db.createLocation(data));
    FAKE_TAGS.forEach(data => db.createTag(data));
    FAKE_SURF_SESSIONS.forEach(async data => {
        await db.createSurfSession(data);
    });
    FAKE_SESSION_TAGS.forEach(data => db.createSessionTag(data));
};

export default mockData;
