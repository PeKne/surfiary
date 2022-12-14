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
        date: datetimeToUnix(new Date(2022, 5, 8)),
        surfboard_id: 1,
        wetsuit_id: 1,
    },
    {
        name: 'Morning Session',
        description: 'I was stoked even more!',
        duration: 86,
        location_id: 1,
        date: datetimeToUnix(new Date(2021, 3, 29)),
        surfboard_id: 1,
    },
];

const FAKE_SURFBOARDS: DbTypes.Surfboard[] = [
    {
        name: 'Crusher',
        brand: 'JS Industries',
        description:
            'This board is so amazing! I dont even know how I could live without it. It can catch any wave you think of.',
        date: datetimeToUnix(new Date(2022, 5, 8)),
        length: 6.6,
        volume: 35,
        type: 'SHORT',
    },
    {
        name: 'Beast Board',
        brand: 'All Merick',
        description:
            'Kelly Slaters Wave catching machine. It is the board you wanna have on smaller day. Have you ever rode tube on white water?',
        date: datetimeToUnix(new Date(2021, 3, 29)),
        length: 7.12,
        volume: 64,
        type: 'FISH',
    },
    {
        name: 'Sharkie',
        description:
            'Molestie at elementum eu facilisis sed odio morbi quis commodo. Euismod lacinia at quis risus sed vulputate odio. Ut tristique et egestas quis ipsum suspendisse ultrices. Suscipit tellus mauris a diam. Sed adipiscing diam donec adipiscing tristique risus nec. Mattis rhoncus urna neque viverra justo.',
        date: datetimeToUnix(new Date(2022, 6, 3)),
        length: 5.11,
        volume: 25.6,
        type: 'LONG',
    },
    {
        name: 'Catcher One',
        description:
            'In dictum non consectetur a erat nam at. Viverra justo nec ultrices dui sapien eget mi. Adipiscing at in tellus integer. Nascetur ridiculus mus mauris vitae ultricies. Risus viverra adipiscing at in. Porttitor lacus luctus accumsan tortor posuere ac ut.',
        date: datetimeToUnix(new Date(2022, 11, 4)),
        length: 4.11,
        volume: 32.6,
        type: 'FISH',
    },
    {
        name: 'Fatty',
        description:
            'In dictum non consectetur a erat nam at. Viverra justo nec ultrices dui sapien eget mi. Adipiscing at in tellus integer. Nascetur ridiculus mus mauris vitae ultricies. Risus viverra adipiscing at in. Porttitor lacus luctus accumsan tortor posuere ac ut.',
        date: datetimeToUnix(new Date(2021, 11, 4)),
        length: 8.11,
        volume: 52.6,
        type: 'SOFT',
    },
];

const FAKE_LOCATIONS: DbTypes.Location[] = [{ name: 'Balangan', latitude: 12, longitude: 11 }];
const FAKE_WETSUITS: DbTypes.Wetsuit[] = [
    {
        name: 'Duckdiver Eddy',
        description:
            'Sit amet commodo nulla facilisi nullam. Eu sem integer vitae justo eget magna fermentum. Ornare arcu odio ut sem nulla pharetra diam.  Viverra justo nec ultrices dui sapien eget mi. Adipiscing at in tellus integer. Nascetur ridiculus mus mauris vitae ultricies. Risus viverra adipiscing at in. Porttitor lacus luctus accumsan tortor posuere ac.',
        brand: "O'neil",
        thickness: 4.3,
        type: 'LONG',
        date: 12,
    },
    {
        name: 'Quicksilver 2022',
        description:
            'Sit amet commodo nulla facilisi nullam. Eu sem integer vitae justo eget magna fermentum. Ornare arcu odio ut sem nulla pharetra diam. ',
        brand: 'Quicksilver Eco',
        thickness: 3.2,
        type: 'LONG',
        date: 12,
    },
    {
        name: 'Sunny Shirt',
        description:
            'Ornare arcu odio ut sem nulla pharetra diam. ',
        brand: 'Billa Bong',
        thickness: 2.2,
        type: 'SHORT',
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
