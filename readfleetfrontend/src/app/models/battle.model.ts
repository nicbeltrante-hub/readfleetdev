import { ShipClass } from "./ship.model";

export type BattleOutcome = 'victory' | 'defeat';
export type BattleStatus = 'active' | 'completed';
export type GoalType = 'books' | 'pages' | 'streak' | 'genre';

export interface EnemyShip {
    id: number;
    name: string;
    faction: string;
    shipClass: ShipClass;
    color: string;
    description: string;
    threatLevel: 1 | 2 | 3 | 4 | 5;
    reward: string;
}

export interface Battle {
    id: number;
    title: string;
    goalDescription: string;
    goalType: GoalType;
    goalTarget: number;
    goalUnit: string;
    goalProgress: number;
    deadline: string;
    status: BattleStatus;
    outcome?: BattleOutcome;
    enemy: EnemyShip;
    deployedShipName: string;
    location: string;
    mapX: number;
    mapY: number;
}