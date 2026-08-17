export type ShipClass = 'scout' | 'frigate' | 'destroyer' | 'cruiser' | 'battleship' | 'dreadnought' | 'capital';

export interface Ship {
    id: number;
    name: string;
    customName?: string;
    shipClass: ShipClass;
    description: string;
    pagesRequired: number;
    unlocked: boolean;
    flagship: boolean;
    color: string;
    specialAbility: string;
}