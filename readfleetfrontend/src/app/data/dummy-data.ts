import { Book } from '../models/book.model';
import { Ship } from '../models/ship.model';
import { Achievement } from '../models/achievement.model';
import { Mission } from '../models/mission.model';
import { UserProfile } from '../models/user.model';
import { Battle } from '../models/battle.model';
import { StarSystem, MapRoute } from '../models/star-map.model';
 
export const DUMMY_USER: UserProfile = {
  id: 1,
  username: 'StarReader',
  rank: 'Fleet Lieutenant',
  totalPagesRead: 2847,
  totalBooksRead: 9,
  currentStreak: 5,
  longestStreak: 21,
  fleetSize: 3,
  joinDate: '2025-01-10',
  avatarInitials: 'SR'
};
 
export const DUMMY_BOOKS: Book[] = [
  {
    id: 1,
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Sci-Fi',
    totalPages: 412,
    pagesRead: 412,
    status: 'completed',
    coverColor: '#c27a2a',
    startDate: '2025-01-10',
    endDate: '2025-02-01',
    rating: 5
  },
  {
    id: 2,
    title: 'The Left Hand of Darkness',
    author: 'Ursula K. Le Guin',
    genre: 'Sci-Fi',
    totalPages: 286,
    pagesRead: 286,
    status: 'completed',
    coverColor: '#2a5fc2',
    startDate: '2025-02-03',
    endDate: '2025-02-20',
    rating: 5
  },
  {
    id: 3,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    genre: 'Sci-Fi',
    totalPages: 476,
    pagesRead: 476,
    status: 'completed',
    coverColor: '#1a7a4a',
    startDate: '2025-03-01',
    endDate: '2025-03-22',
    rating: 5
  },
  {
    id: 4,
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    genre: 'Fantasy',
    totalPages: 662,
    pagesRead: 662,
    status: 'completed',
    coverColor: '#7a2ac2',
    startDate: '2025-04-01',
    endDate: '2025-05-10',
    rating: 4
  },
  {
    id: 5,
    title: 'Ender\'s Game',
    author: 'Orson Scott Card',
    genre: 'Sci-Fi',
    totalPages: 352,
    pagesRead: 352,
    status: 'completed',
    coverColor: '#c22a2a',
    startDate: '2025-05-12',
    endDate: '2025-05-28',
    rating: 4
  },
  {
    id: 6,
    title: 'A Memory Called Empire',
    author: 'Arkady Martine',
    genre: 'Sci-Fi',
    totalPages: 464,
    pagesRead: 464,
    status: 'completed',
    coverColor: '#2ac2c2',
    startDate: '2025-06-01',
    endDate: '2025-06-25',
    rating: 5
  },
  {
    id: 7,
    title: 'Mistborn',
    author: 'Brandon Sanderson',
    genre: 'Fantasy',
    totalPages: 541,
    pagesRead: 541,
    status: 'completed',
    coverColor: '#888',
    startDate: '2025-07-01',
    endDate: '2025-08-02',
    rating: 4
  },
  {
    id: 8,
    title: 'Children of Time',
    author: 'Adrian Tchaikovsky',
    genre: 'Sci-Fi',
    totalPages: 600,
    pagesRead: 600,
    status: 'completed',
    coverColor: '#4a8a2a',
    startDate: '2025-08-05',
    endDate: '2025-09-01',
    rating: 5
  },
  {
    id: 9,
    title: 'The Long Way to a Small, Angry Planet',
    author: 'Becky Chambers',
    genre: 'Sci-Fi',
    totalPages: 404,
    pagesRead: 404,
    status: 'completed',
    coverColor: '#c2852a',
    startDate: '2025-09-05',
    endDate: '2025-09-28',
    rating: 4
  },
  {
    id: 10,
    title: 'Blindsight',
    author: 'Peter Watts',
    genre: 'Sci-Fi',
    totalPages: 384,
    pagesRead: 210,
    status: 'reading',
    coverColor: '#1a3a6a',
    startDate: '2026-07-30',
    rating: undefined
  },
  {
    id: 11,
    title: 'The Expanse: Leviathan Wakes',
    author: 'James S. A. Corey',
    genre: 'Sci-Fi',
    totalPages: 561,
    pagesRead: 0,
    status: 'want-to-read',
    coverColor: '#3a1a6a',
    rating: undefined
  },
  {
    id: 12,
    title: 'Hyperion',
    author: 'Dan Simmons',
    genre: 'Sci-Fi',
    totalPages: 482,
    pagesRead: 0,
    status: 'want-to-read',
    coverColor: '#6a1a1a',
    rating: undefined
  }
];
 
export const DUMMY_SHIPS: Ship[] = [
  {
    id: 1,
    name: 'ISS Wanderer',
    shipClass: 'scout',
    description: 'A nimble scout craft — your first step into the stars. Fast, light, and always curious.',
    pagesRequired: 0,
    unlocked: true,
    flagship: false,
    color: '#00d4ff',
    specialAbility: 'Rapid Scan: Discover new worlds faster than any other vessel.'
  },
  {
    id: 2,
    name: 'ISS Resolve',
    shipClass: 'frigate',
    description: 'A battle-hardened frigate. Earned through dedication to the written word.',
    pagesRequired: 500,
    unlocked: true,
    flagship: false,
    color: '#7c3aed',
    specialAbility: 'Shields Up: Resist distractions and push through any chapter.'
  },
  {
    id: 3,
    name: 'ISS Epoch',
    shipClass: 'destroyer',
    description: 'A fearsome destroyer forged from 1500 pages of pure imagination.',
    pagesRequired: 1500,
    unlocked: true,
    flagship: true,
    color: '#059669',
    specialAbility: 'Warp Drive: Skip ahead — but only the brave.'
  },
  {
    id: 4,
    name: 'ISS Odyssey',
    shipClass: 'cruiser',
    description: 'A heavy cruiser for commanders who have crossed 3000 pages of deep space.',
    pagesRequired: 3000,
    unlocked: false,
    flagship: false,
    color: '#d97706',
    specialAbility: 'Long-Range Sensors: See missions before they appear on the map.'
  },
  {
    id: 5,
    name: 'ISS Dominion',
    shipClass: 'battleship',
    description: 'A battleship of legend. Only those who have read 6000 pages command one.',
    pagesRequired: 6000,
    unlocked: false,
    flagship: false,
    color: '#dc2626',
    specialAbility: 'Nova Cannon: Obliterate reading slumps with a single broadside.'
  },
  {
    id: 6,
    name: 'ISS Infinity',
    shipClass: 'dreadnought',
    description: 'A dreadnought that inspires fear across every galaxy. 10000 pages to earn.',
    pagesRequired: 10000,
    unlocked: false,
    flagship: false,
    color: '#db2777',
    specialAbility: 'Singularity Core: Time itself bends around your reading speed.'
  },
  {
    id: 7,
    name: 'ISS Eternity',
    shipClass: 'capital',
    description: 'The Capital Ship. The pinnacle of the fleet. 20000 pages. A legend of the cosmos.',
    pagesRequired: 20000,
    unlocked: false,
    flagship: false,
    color: '#ffd700',
    specialAbility: 'Omniscience: You have read the stars themselves.'
  }
];
 
export const DUMMY_ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: 'First Contact',
    description: 'Log your very first book.',
    icon: '📖',
    unlocked: true,
    unlockedDate: '2025-01-10',
    category: 'milestone',
    requirement: 'Log 1 book'
  },
  {
    id: 2,
    title: 'Scout Launch',
    description: 'Unlock your first spacecraft.',
    icon: '🛸',
    unlocked: true,
    unlockedDate: '2025-01-10',
    category: 'fleet',
    requirement: 'Start reading'
  },
  {
    id: 3,
    title: 'Page Turner',
    description: 'Read 500 pages across all books.',
    icon: '⚡',
    unlocked: true,
    unlockedDate: '2025-02-01',
    category: 'milestone',
    requirement: 'Read 500 total pages'
  },
  {
    id: 4,
    title: 'Warp Speed',
    description: 'Complete a book in under 14 days.',
    icon: '🚀',
    unlocked: true,
    unlockedDate: '2025-02-20',
    category: 'reading',
    requirement: 'Finish a book in 14 days or less'
  },
  {
    id: 5,
    title: 'Genre Explorer',
    description: 'Read books from 2 different genres.',
    icon: '🌌',
    unlocked: true,
    unlockedDate: '2025-04-01',
    category: 'genre',
    requirement: 'Read books in 2+ genres'
  },
  {
    id: 6,
    title: 'Deep Space',
    description: 'Maintain a 7-day reading streak.',
    icon: '⭐',
    unlocked: true,
    unlockedDate: '2025-05-20',
    category: 'streak',
    requirement: '7-day reading streak'
  },
  {
    id: 7,
    title: 'Destroyer Pilot',
    description: 'Unlock the Destroyer class ship.',
    icon: '💥',
    unlocked: true,
    unlockedDate: '2025-08-15',
    category: 'fleet',
    requirement: 'Read 1500 total pages'
  },
  {
    id: 8,
    title: 'Sci-Fi Veteran',
    description: 'Complete 5 sci-fi books.',
    icon: '🔭',
    unlocked: true,
    unlockedDate: '2025-09-28',
    category: 'genre',
    requirement: 'Complete 5 Sci-Fi books'
  },
  {
    id: 9,
    title: 'Cruiser Captain',
    description: 'Unlock the Cruiser class ship.',
    icon: '🌠',
    unlocked: false,
    category: 'fleet',
    requirement: 'Read 3000 total pages'
  },
  {
    id: 10,
    title: 'Iron Will',
    description: 'Maintain a 21-day reading streak.',
    icon: '🏆',
    unlocked: false,
    category: 'streak',
    requirement: '21-day reading streak'
  },
  {
    id: 11,
    title: 'Bibliophile',
    description: 'Complete 15 books.',
    icon: '📚',
    unlocked: false,
    category: 'milestone',
    requirement: 'Complete 15 books'
  },
  {
    id: 12,
    title: 'Nebula Drifter',
    description: 'Log a book longer than 600 pages.',
    icon: '☄️',
    unlocked: false,
    category: 'reading',
    requirement: 'Complete a book with 600+ pages'
  },
  {
    id: 13,
    title: 'First Blood',
    description: 'Win your first space battle.',
    icon: '⚔️',
    unlocked: true,
    unlockedDate: '2025-12-31',
    category: 'fleet',
    requirement: 'Win 1 battle'
  },
  {
    id: 14,
    title: 'Speed Reader',
    description: 'Read 100 pages in a single day.',
    icon: '💨',
    unlocked: false,
    category: 'reading',
    requirement: 'Log 100+ pages in one day'
  },
  {
    id: 15,
    title: 'Galaxy Brain',
    description: 'Complete 3 books back to back without a gap.',
    icon: '🧠',
    unlocked: false,
    category: 'reading',
    requirement: 'Finish 3 consecutive books with no gap days'
  },
  {
    id: 16,
    title: 'Void Slayer I',
    description: 'Defeat a Void Dominion ship in battle.',
    icon: '💀',
    unlocked: true,
    unlockedDate: '2026-08-18',
    category: 'fleet',
    requirement: 'Win a battle vs. the Void Dominion'
  },
  {
    id: 17,
    title: 'Blockade Breaker',
    description: 'Break an enemy blockade by hitting your reading goal.',
    icon: '🛡️',
    unlocked: true,
    unlockedDate: '2025-12-31',
    category: 'fleet',
    requirement: 'Win a battle of type "siege"'
  },
  {
    id: 18,
    title: 'Long Haul',
    description: 'Spend more than 30 days reading a single book.',
    icon: '🌠',
    unlocked: false,
    category: 'reading',
    requirement: 'Have a book open for 30+ days'
  },
  {
    id: 19,
    title: 'Fantasy Commander',
    description: 'Complete 3 Fantasy books.',
    icon: '🐉',
    unlocked: false,
    category: 'genre',
    requirement: 'Complete 3 Fantasy books'
  },
  {
    id: 20,
    title: 'Five-Star Admiral',
    description: 'Rate 5 books with 5 stars.',
    icon: '⭐',
    unlocked: false,
    category: 'milestone',
    requirement: 'Give 5-star ratings to 5 books'
  },
  {
    id: 21,
    title: 'Monthly Deployment',
    description: 'Read at least 1 book per month for 3 consecutive months.',
    icon: '📅',
    unlocked: true,
    unlockedDate: '2025-04-01',
    category: 'streak',
    requirement: 'Complete 1+ book/month for 3 months straight'
  },
  {
    id: 22,
    title: 'Thousand Page Club',
    description: 'Read 1000 total pages.',
    icon: '🔱',
    unlocked: true,
    unlockedDate: '2025-04-15',
    category: 'milestone',
    requirement: 'Read 1000 total pages'
  },
  {
    id: 23,
    title: 'War Correspondent',
    description: 'Have 3 battles active at the same time.',
    icon: '📡',
    unlocked: false,
    category: 'fleet',
    requirement: '3 simultaneous active battles'
  },
  {
    id: 24,
    title: 'The Long Dark',
    description: 'Read 200 pages without completing a book.',
    icon: '🌑',
    unlocked: false,
    category: 'reading',
    requirement: 'Read 200 pages mid-book without finishing'
  }
];
 
export const DUMMY_MISSIONS: Mission[] = [
  // ── WEEKLY FLEET ORDERS ───────────────────────────────────────────────────
  {
    id: 1,
    title: 'Weekly Patrol',
    flavorText: 'All hands: minimum 100 pages logged before end of week.',
    description: 'Read at least 100 pages this week.',
    type: 'pages',
    target: 100,
    progress: 80,
    reward: '+75 XP',
    xp: 75,
    status: 'active',
    recurrence: 'weekly',
    icon: '📄',
    resetsOn: 'Monday'
  },
  {
    id: 2,
    title: 'Reading Sortie',
    flavorText: 'Fleet Command requires active reading sessions across at least 3 days.',
    description: 'Log a reading session on 3 separate days this week.',
    type: 'session',
    target: 3,
    progress: 2,
    reward: '+50 XP',
    xp: 50,
    status: 'active',
    recurrence: 'weekly',
    icon: '📅',
    resetsOn: 'Monday'
  },
  {
    id: 3,
    title: 'Intel Dispatch',
    flavorText: 'Command requests genre reconnaissance. Read from any non-dominant genre.',
    description: 'Read at least 30 pages from a genre you haven\'t read this month.',
    type: 'genre',
    target: 30,
    progress: 30,
    reward: '+60 XP',
    xp: 60,
    status: 'completed',
    recurrence: 'weekly',
    icon: '🎭',
    resetsOn: 'Monday'
  },
 
  // ── MONTHLY FLEET ORDERS ──────────────────────────────────────────────────
  {
    id: 4,
    title: 'Monthly Deployment',
    flavorText: 'Every officer is expected to complete at least one full mission per cycle.',
    description: 'Finish at least 1 book this month.',
    type: 'books',
    target: 1,
    progress: 0,
    reward: '+200 XP · Fleet rank progress',
    xp: 200,
    status: 'active',
    recurrence: 'monthly',
    icon: '📚',
    resetsOn: '1st of month'
  },
  {
    id: 5,
    title: 'Deep Range Survey',
    flavorText: 'Command needs 500 pages of field data before end of cycle.',
    description: 'Read 500 pages across all books this month.',
    type: 'pages',
    target: 500,
    progress: 347,
    reward: '+300 XP · Ship module upgrade',
    xp: 300,
    status: 'active',
    recurrence: 'monthly',
    icon: '🔭',
    resetsOn: '1st of month'
  },
  {
    id: 6,
    title: 'Sector Sweep',
    flavorText: 'Diversify your reading vectors. Two genres logged this cycle.',
    description: 'Read books from at least 2 different genres this month.',
    type: 'genre',
    target: 2,
    progress: 1,
    reward: '+150 XP',
    xp: 150,
    status: 'active',
    recurrence: 'monthly',
    icon: '🌌',
    resetsOn: '1st of month'
  },
  {
    id: 7,
    title: 'Endurance Drill',
    flavorText: 'Maintain reading discipline. Seven consecutive days logged.',
    description: 'Keep a 7-day reading streak at any point this month.',
    type: 'streak',
    target: 7,
    progress: 5,
    reward: '+175 XP',
    xp: 175,
    status: 'active',
    recurrence: 'monthly',
    icon: '🔥',
    resetsOn: '1st of month'
  }
];
 
export const DUMMY_BATTLES: Battle[] = [
  // ── ACTIVE ───────────────────────────────────────────────────────────────
  {
    id: 1,
    title: '5 Books in August',
    goalDescription: 'I want to read 5 books before the end of August.',
    goalType: 'books',
    goalTarget: 5,
    goalUnit: 'books',
    goalProgress: 2,
    deadline: '2026-08-31',
    status: 'active',
    deployedShipName: 'ISS Epoch',
    location: 'Morrow Station',
    mapX: 33,
    mapY: 55,
    enemy: {
      id: 102,
      name: 'EFS Iron Resolve',
      faction: 'Entropy Fleet',
      shipClass: 'cruiser',
      color: '#f97316',
      description: 'A heavy cruiser dispatched to crush ambitious monthly reading goals. It knows slumps find you.',
      threatLevel: 3,
      reward: 'Unlock "August Champion" badge · +350 XP · Cruiser hull skin'
    }
  },
  {
    id: 2,
    title: '200 Pages This Week',
    goalDescription: 'Read at least 200 pages before Sunday.',
    goalType: 'pages',
    goalTarget: 200,
    goalUnit: 'pages',
    goalProgress: 130,
    deadline: '2026-08-17',
    status: 'active',
    deployedShipName: 'ISS Wanderer',
    location: 'Vael Prime',
    mapX: 62,
    mapY: 38,
    enemy: {
      id: 101,
      name: 'VDS Razor',
      faction: 'Void Dominion',
      shipClass: 'frigate',
      color: '#ef4444',
      description: 'A fast frigate that preys on readers who let a week slip by unread.',
      threatLevel: 2,
      reward: 'Unlock "Week Warrior" badge · +150 XP'
    }
  },
  {
    id: 3,
    title: '10-Day Reading Streak',
    goalDescription: 'Read every single day for 10 days straight.',
    goalType: 'streak',
    goalTarget: 10,
    goalUnit: 'day streak',
    goalProgress: 5,
    deadline: '2026-08-21',
    status: 'active',
    deployedShipName: 'ISS Resolve',
    location: 'Sector 7',
    mapX: 20,
    mapY: 28,
    enemy: {
      id: 103,
      name: 'VDS Persistence',
      faction: 'Void Dominion',
      shipClass: 'destroyer',
      color: '#a855f7',
      description: 'A destroyer that appears whenever your streak falters. It feeds on missed days.',
      threatLevel: 3,
      reward: 'Unlock "Unbroken" badge · +200 XP · Streak shield emblem'
    }
  },
  // ── ACTIVE (converted from upcoming — all declared battles start immediately) ──
  {
    id: 4,
    title: '3 Sci-Fi Books in September',
    goalDescription: 'Focus on sci-fi — finish 3 books in the genre this month.',
    goalType: 'genre',
    goalTarget: 3,
    goalUnit: 'sci-fi books',
    goalProgress: 0,
    deadline: '2026-09-30',
    status: 'active',
    deployedShipName: 'ISS Epoch',
    location: 'Keth Nebula',
    mapX: 75,
    mapY: 68,
    enemy: {
      id: 104,
      name: 'NAS Genre Spectre',
      faction: 'Null Armada',
      shipClass: 'destroyer',
      color: '#06b6d4',
      description: 'Haunts readers who abandon a genre mid-streak. Science fiction is its domain.',
      threatLevel: 3,
      reward: '3-Genre Conqueror badge · +300 XP'
    }
  },
  {
    id: 5,
    title: 'Finish Blindsight',
    goalDescription: 'Complete Blindsight (174 pages left) before end of August.',
    goalType: 'pages',
    goalTarget: 174,
    goalUnit: 'pages',
    goalProgress: 0,
    deadline: '2026-08-31',
    status: 'active',
    deployedShipName: 'ISS Wanderer',
    location: 'Outer Fringe',
    mapX: 88,
    mapY: 82,
    enemy: {
      id: 105,
      name: 'VDS Half-Finished',
      faction: 'Void Dominion',
      shipClass: 'scout',
      color: '#fbbf24',
      description: 'A raider that spawns from books left unfinished. Small but relentless.',
      threatLevel: 1,
      reward: '174-Page Closer badge · +100 XP'
    }
  },
  // ── COMPLETED ────────────────────────────────────────────────────────────
  {
    id: 6,
    title: '4 Books in July',
    goalDescription: 'Read 4 books during July.',
    goalType: 'books',
    goalTarget: 4,
    goalUnit: 'books',
    goalProgress: 4,
    deadline: '2026-07-31',
    status: 'completed',
    outcome: 'victory',
    deployedShipName: 'ISS Resolve',
    location: 'Iron Gate Station',
    mapX: 48,
    mapY: 20,
    enemy: {
      id: 106,
      name: 'EFS Ironclad',
      faction: 'Entropy Fleet',
      shipClass: 'cruiser',
      color: '#f97316',
      description: 'Defeated. Its wreck drifts near Iron Gate as a monument to your July.',
      threatLevel: 3,
      reward: 'Earned: "July Champion" badge · +350 XP'
    }
  },
  {
    id: 7,
    title: '21-Day Streak',
    goalDescription: 'Read every day for 21 days.',
    goalType: 'streak',
    goalTarget: 21,
    goalUnit: 'day streak',
    goalProgress: 21,
    deadline: '2025-06-21',
    status: 'completed',
    outcome: 'victory',
    deployedShipName: 'ISS Epoch',
    location: 'Relay Sigma',
    mapX: 72,
    mapY: 18,
    enemy: {
      id: 107,
      name: 'VDS Iron Will',
      faction: 'Void Dominion',
      shipClass: 'battleship',
      color: '#ef4444',
      description: 'The most feared fleet hunter. Destroyed by 21 consecutive days of reading.',
      threatLevel: 4,
      reward: 'Earned: "Iron Will" achievement · +500 XP'
    }
  }
];
 
export const DUMMY_STAR_SYSTEMS: StarSystem[] = [
  { id: 1, name: 'Literacee',    type: 'hub',       x: 48,  y: 50,  description: 'Fleet headquarters. Your home base.' },
  { id: 2, name: 'Manu-Scrippt',       type: 'contested', x: 62,  y: 38,  description: 'Contested mining world. Active battle zone.' },
  { id: 3, name: 'Letur',   type: 'contested', x: 33,  y: 55,  description: 'Trade hub under enemy blockade.' },
  { id: 4, name: 'Novell',      type: 'enemy',     x: 75,  y: 68,  description: 'Null Armada stronghold inside a dense nebula.' },
  { id: 5, name: 'Sector 7',         type: 'enemy',     x: 20,  y: 28,  description: 'Dark space patrolled by Void Dominion raiders.' },
  { id: 6, name: 'Iron Gate Station',type: 'safe',      x: 48,  y: 20,  description: 'Liberated. Your fleet patrols these lanes.' },
  { id: 7, name: 'Relay Sigma',      type: 'safe',      x: 72,  y: 18,  description: 'Communication relay — secured last cycle.' },
  { id: 8, name: 'Outer Fringe',     type: 'unknown',   x: 88,  y: 82,  description: 'Uncharted space. Unknown threats lurk here.' },
  { id: 9, name: 'The Rift',         type: 'unknown',   x: 10,  y: 72,  description: 'A spatial anomaly. No ship has returned.' },
  { id: 10, name: 'Cygnus Deep',     type: 'safe',      x: 25,  y: 80,  description: 'A quiet system used as a resupply point.' }
];
 
export const DUMMY_MAP_ROUTES: MapRoute[] = [
  { fromSystemId: 1, toSystemId: 2, label: 'Transit Lane Alpha' },
  { fromSystemId: 1, toSystemId: 3 },
  { fromSystemId: 1, toSystemId: 6, label: 'Patrol Route 7' },
  { fromSystemId: 6, toSystemId: 7 },
  { fromSystemId: 2, toSystemId: 4 },
  { fromSystemId: 3, toSystemId: 5 },
  { fromSystemId: 1, toSystemId: 10 },
  { fromSystemId: 10, toSystemId: 9 }
];
 
 
 