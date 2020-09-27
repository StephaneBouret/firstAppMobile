export class Lieu {
    title: string;
    country?: string;
    city?: string;
    creatingDate?: number;
    keywords?: string;
    location?: {
        latitude: number,
        longitude: number
    };
    photo?: string[];
}
