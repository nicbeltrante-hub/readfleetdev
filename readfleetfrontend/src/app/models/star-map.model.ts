export interface StarSystem {
    id: number;
    name: string;
    type: 'hub' | 'contested' | 'enemy' | 'unknown' | 'safe';
    x: number;
    y: number;
    description: string;
}

export interface MapRoute {
    fromSystemId: number;
    toSystemId: number;
    label?: string;
}