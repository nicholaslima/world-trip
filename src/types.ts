export interface continentType {
  continent: string;
  countries_count: number;
  cities_count: number;
  languages_count: number;
  image_url: string;
  slug: string;
  descPrev: string;
  description: string;
  cities: citiestype[];
}

export interface citiestype {
  name: string;
  country: string;
  flag_url: string;
  image_url: string;
}

export interface continentsPrev {
  name: string;
  desc: string;
  slug: string;
}
