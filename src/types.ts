export interface person {
    id: number;
    name: string;
    profile_path: string | null;
    biography: string;
}

export interface tv {
    title: string | undefined;
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
    overview: string;
    original_language: string;
    first_air_date: string;
    vote_average: number;
    production_companies: [{
      name: string;
    }]
    production_countries: [{
      name: string
    }]
}
export interface movie {
    id: number;
    title: string;
    poster_path: string | null;
    backdrop_path: string | null;
    overview: string | null;
    original_language: string;
    release_date: string;
    vote_average: string;
    production_companies: [{
      name: string;
      id: number;
    }];
    production_countries: [{
      name: string;
    }];
}
export interface cast {
    id: number;
    name: string;
    profile_path: string | null;
    character: string;
}
export interface similar {
    id: number;
    name: string;
    poster_path: number | string;
}