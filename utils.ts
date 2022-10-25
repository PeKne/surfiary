/**
 * Transforms unix timestamp to human readable string.
 * */
export const formatTimestamp = (ts: number) => {
    const dt = new Date(ts * 1000); // s => ms
    return `${dt.toLocaleDateString()} ${dt.getHours()}:${dt.getMinutes()}`;
};

/**
 * Converts JavaSript Date object to unix time integer.
 */
export const datetimeToUnix = (dt: Date) => {
    return dt.getTime() / 1000;
};
