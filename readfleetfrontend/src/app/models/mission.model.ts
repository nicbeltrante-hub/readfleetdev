export type MissionStatus = 'active' | 'completed' | 'locked';
export type MissionRecurrence = 'weekly' | 'monthly';

export interface Mission {
    id: number;
    title: string;
    flavorText: string;
    description: string;
    type: 'pages' | 'books' | 'streak' | 'genre' | 'session';
    target: number;
    progress: number;
    reward: string;
    xp: number;
    status: MissionStatus;
    recurrence: MissionRecurrence;
    icon: string;
    resetsOn: string;
}