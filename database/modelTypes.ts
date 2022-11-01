type SurfboardType = 'SHORT' | 'LONG' | 'FISH' | 'SOFT';
type WetsuitType = 'LONG' | 'SHORT' | 'RASH';

export type TableName = 'surf_session' | 'surfboard' | 'wetsuit' | 'location';

export type SurfSessionModel = {
    rowid?: number;
    name: string;
    description: string;
    duration: number;
    date: number;
    location_id: number;
    // TODO: MSW
};
export type SurfSessionRow = keyof SurfSessionModel;
export type SurfSessionRowType = SurfSessionModel[SurfSessionRow];

export type SurfboardModel = {
    rowid?: number;
    name: string;
    description: string;
    brand: string;
    length: number;
    volume: number;
    type: SurfboardType;
    date: number;
};
export type SurfboardRow = keyof SurfboardModel;
export type SurfboardRowType = SurfboardModel[SurfboardRow];

export type WetsuitModel = {
    rowid?: number;
    name: string;
    description: string;
    brand: string;
    thickness: number;
    type: WetsuitType;
    date: number;
};
export type WetsuitRow = keyof WetsuitModel;
export type WetsuitRowType = WetsuitModel[WetsuitRow];

export type LocationModel = {
    rowid?: number;
    name: string;
    longitude: number;
    latitude: number;
};

export type LocationRow = keyof LocationModel;
export type LocationRowType = LocationModel[LocationRow];

export type DatabaseModel = SurfSessionModel | SurfboardModel | WetsuitModel | LocationModel;
export type ModelRow = SurfSessionRow | SurfboardRow | WetsuitRow | LocationRow;
export type ModelRowType = SurfSessionRowType | SurfboardRowType | WetsuitRowType | LocationRowType;
