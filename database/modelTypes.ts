export type TableName = 'surf_session' | 'surfboard' | 'wetsuit' | 'location' | 'tag' | 'session_tag';
export type SurfboardType = 'SHORT' | 'LONG' | 'FISH' | 'SOFT';
export type WetsuitType = 'LONG' | 'SHORT' | 'RASH';

/**
 * Database scheme of SurfSession Model.
 */
export type SurfSession = {
    rowid?: number;
    name: string;
    description: string;
    duration: number;
    date: number;
    location_id: number;
    surfboard_id: number;
    wetsuit_id?: number;
};

/**
 * SurfSession structure returned from DB query. Extended by Foreign table data.
 */
export type SurfSessionRaw = SurfSession & {
    surfboard_name: string;
    wetsuit_name?: string;
    location_name: string;
    tags?: string;
};

/**
 * SessionStructure formatted for use in frontend view.
 */
export type SurfSessionFormatted = SurfSessionRaw & {
    datetimeFormatted: string;
    durationFormatted: string;
    tags: string[];
};

export type SurfSessionAttr = keyof SurfSession;
export type SurfSessionAttrType = SurfSession[SurfSessionAttr];

export type Tag = {
    rowid?: number;
    label: string;
};
export type TagAttr = keyof Tag;
export type TagAttrType = Tag[TagAttr];

export type SessionTag = {
    session_id?: number;
    tag_label: string;
};

export type SessionTagAttr = keyof SessionTag;
export type SessionTagAttrType = SessionTag[SessionTagAttr];

export type Surfboard = {
    rowid?: number;
    name: string;
    description?: string;
    brand?: string;
    length: number;
    volume: number;
    type: SurfboardType;
    date: number;
};

export type SurfboardFormatted = Surfboard & {
    dateFormatted: string;
    typeFormatted: string;
};

export type SurfboardAttr = keyof Surfboard;
export type SurfboardAttrType = Surfboard[SurfboardAttr];

export type Wetsuit = {
    rowid?: number;
    name: string;
    description?: string;
    brand?: string;
    thickness: number;
    type: WetsuitType;
    date: number;
};

export type WetsuitFormatted = Wetsuit & {
    dateFormatted: string;
    typeFormatted: string;
};
export type WetsuitAttr = keyof Wetsuit;
export type WetsuitAttrType = Wetsuit[WetsuitAttr];

export type Location = {
    rowid?: number;
    name: string;
    longitude: number;
    latitude: number;
};
export type LocationAttr = keyof Location;
export type LocationAttrType = Location[LocationAttr];

export type DatabaseModel = SurfSessionRaw | Surfboard | Wetsuit | Location | Tag | SessionTag;
export type FormattedDatabaseModel =
    | SurfSessionFormatted
    | SurfboardFormatted
    | WetsuitFormatted
    | Location
    | Tag
    | SessionTag;
export type ModelAttr = SurfSessionAttr | SurfboardAttr | WetsuitAttr | LocationAttr | TagAttr | SessionTagAttr;
export type ModelAttrType =
    | SurfSessionAttrType
    | SurfboardAttrType
    | WetsuitAttrType
    | LocationAttrType
    | TagAttrType
    | SessionTagAttrType;

export type DatabaseInterface = {
    createSurfSession(data: SurfSession): void;
    createSurfboard(data: Surfboard): void;
    createWetsuit(data: Wetsuit): void;
    createLocation(data: Location): void;
    createTag(data: Tag): void;
    createSessionTag(data: SessionTag): void;
    readSurfSession(column?: SurfSessionAttr, value?: SurfSessionAttrType): Promise<SurfSessionRaw[]>;
    readSurfboard(column?: SurfboardAttr, value?: SurfboardAttrType): Promise<Surfboard[]>;
    readWetsuit(column?: WetsuitAttr, value?: WetsuitAttrType): Promise<Wetsuit[]>;
    readLocation(column?: LocationAttr, value?: LocationAttrType): Promise<Location[]>;
    readTag(column?: TagAttr, value?: TagAttrType): Promise<Tag[]>;
    readSessionTag(column?: SessionTagAttr, value?: SessionTagAttrType): Promise<SessionTag[]>;
    removeSurfSession(column: SurfSessionAttr, value: SurfSessionAttrType): void;
    removeSurfboard(column: SurfboardAttr, value: SurfboardAttrType): void;
    removeWetsuit(column: WetsuitAttr, value: WetsuitAttrType): void;
    removeLocation(column: LocationAttr, value: LocationAttrType): void;
    removeTag(column: TagAttr, value: TagAttrType): void;
    removeSessionTag(column: SessionTagAttr, value: SessionTagAttrType): void;
};
