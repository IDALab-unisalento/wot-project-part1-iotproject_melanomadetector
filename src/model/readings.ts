import {User} from './user';

export interface Readings{
    id: number;
    image: Blob;
    highestPredictionClass: string;
    highPredictionScore: number;
    risk: number;
    user: User;
}
