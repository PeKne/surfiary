/**
 * Transforms integer minutes into formated hours and minutes string.
 */
export const formatDuration = (minutesTotal: number) => {
    const hours = (minutesTotal - (minutesTotal % 60)) / 60;
    const minutes = minutesTotal % 60;

    const hoursString = `${hours} hour${hours > 1 ? 's' : ''}`;
    const minutesString = `${minutes} minute${minutes > 1 ? 's' : ''}`;

    if (hours > 0 && minutes > 0) {
        return `${hoursString} and ${minutesString}`;
    }
    if (hours > 0) {
        return hoursString;
    }
    if (minutes > 0) {
        return minutesString;
    }
    return 'not meassured';
};

/**
 * Transforms unix timestamp to human readable string.
 * @param timestamp unix time
 * @param format of returned string, one of 'datetime' | 'date' | 'time'.
 * */
export const formatTimestamp = (timestamp: number, format: 'datetime' | 'date' | 'time' = 'datetime') => {
    const dt = new Date(timestamp * 1000); // s => ms
    switch (format) {
        case 'date':
            return dt.toLocaleString('en-US', {
                day: 'numeric',
                year: 'numeric',
                month: 'short',
            });

        case 'time':
            return dt.toLocaleString('en-US', {
                hour: '2-digit',
                minute: 'numeric',
                hour12: false,
            });

        case 'datetime':
        default:
            return dt.toLocaleString('en-US', {
                day: 'numeric',
                year: 'numeric',
                month: 'long',
                hour: '2-digit',
                minute: 'numeric',
                hour12: false,
            });
    }
};

/**
 * Transforms unix seconds timestamp to human readable string.
 * */
export const formatTimestampShort = (ts: number) => {
    const dt = new Date(ts * 1000); // s => ms

    const minutes = dt.getMinutes();
    return `${dt.toLocaleDateString()} ${dt.getHours()}:${minutes < 9 ? '0' : ''}${minutes}`;
};

/**
 * Converts JavaSript Date object to unix time integer.
 */
export const datetimeToUnix = (dt: Date) => {
    return dt.getTime() / 1000;
};
