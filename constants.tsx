
import { Player, Squad, Competition, Match } from './types';

// Updated to the official shield logo URL
export const CLUB_LOGO_URL = 'https://i.ibb.co/LzqXzS5/ac-balonpie-logo.png';

export const MOCK_SQUADS: Squad[] = [
  { id: '1-div', name: '1° División', icon: 'groups' },
  { id: 'sub-21', name: 'Sub-21', icon: 'emoji_events' },
  { id: '5-div', name: '5° División', icon: 'military_tech' },
  { id: '6-div', name: '6° División', icon: 'military_tech' },
  { id: '7-div', name: '7° División', icon: 'military_tech' },
  { id: '8-div', name: '8° División', icon: 'military_tech' },
  { id: '9-div', name: '9° División', icon: 'military_tech' },
  { id: 'sub-13', name: 'Sub-13', icon: 'star_outline' },
  { id: 'sub-15', name: 'Sub-15', icon: 'star_half' },
  { id: 'sub-17', name: 'Sub-17', icon: 'star' },
];

export const MOCK_COMPETITIONS: Competition[] = [
  { id: 'interligas', name: 'TORNEO INTERLIGAS', season: '1° Y Sub-21', icon: '' },
  { id: 'liga-bolivar-inf', name: 'LIGA DE BOLÍVAR', season: 'Inferiores', icon: '' },
  { id: 'federal-juv', name: 'TORNEO FEDERAL JUVENIL', season: 'Sub-13, Sub-15, Sub-17', icon: '' },
  { id: 'liga-bolivar-pro', name: 'LIGA DE BOLÍVAR', season: '1° Y Sub-21', icon: '' },
];

export const MOCK_PLAYERS: Player[] = [];

export const MOCK_MATCHES: Match[] = [
  {
    id: 'm1',
    fecha: 5,
    date: 'SÁBADO 15 NOVIEMBRE',
    time: '16:30',
    homeTeam: 'AC Balonpié Bolívar',
    awayTeam: 'CD Real Cartagena',
    location: 'Predio San José, Cancha 2'
  },
  {
    id: 'm2',
    fecha: 6,
    date: 'SÁBADO 22 NOVIEMBRE',
    time: '08:00',
    homeTeam: 'Expreso Rojo',
    awayTeam: 'AC Balonpié Bolívar',
    location: 'Estadio Julia Turbay'
  }
];
