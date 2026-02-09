
export interface Player {
  id: string;
  name: string;
  number: number;
  position: string;
  photo: string;
  isCaptain?: boolean;
}

export interface Match {
  id: string;
  fecha: number;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  location: string;
}

export interface Competition {
  id: string;
  name: string;
  season: string;
  icon: string;
}

export interface Squad {
  id: string;
  name: string;
  icon: string;
}
