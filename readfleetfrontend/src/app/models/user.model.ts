export interface UserProfile {
  id: number;
  username: string;
  rank: string;
  totalPagesRead: number;
  totalBooksRead: number;
  currentStreak: number;
  longestStreak: number;
  fleetSize: number;
  joinDate: string;
  avatarInitials: string;
}
 
export interface RankTier {
  minPages: number;
  rank: string;
  description: string;
}
 
export const RANK_TIERS: RankTier[] = [
  { minPages: 0,     rank: 'Cadet',           description: 'Just enlisted in the fleet.' },
  { minPages: 500,   rank: 'Ensign',           description: 'First pages logged. The voyage begins.' },
  { minPages: 1000,   rank: 'Junior Officer',   description: 'Showing promise on the bridge.' },
  { minPages: 1500,   rank: 'Lieutenant',       description: 'A reliable reader in the ranks.' },
  { minPages: 2000,  rank: 'Fleet Lieutenant', description: 'Trusted to hold the helm.' },
  { minPages: 2500,  rank: 'Commander',        description: 'Commands respect across the fleet.' },
  { minPages: 3000,  rank: 'Fleet Commander',  description: 'Leads operations across multiple sectors.' },
  { minPages: 3500,  rank: 'Captain',          description: 'Master of a ship and its crew.' },
  { minPages: 4000,  rank: 'Fleet Captain',    description: 'Commands entire battle groups.' },
  { minPages: 5000,  rank: 'Commodore',        description: 'A strategic mind known across star systems.' },
  { minPages: 6000, rank: 'Admiral',          description: 'Oversees the full theatre of operations.' },
  { minPages: 7000, rank: 'Fleet Admiral',    description: 'The fleet answers to you.' },
  { minPages: 8000, rank: 'Grand Admiral',    description: 'A living legend. The stars themselves watch.' },
];
 
export function getRank(totalPages: number): string {
  return getRankTier(totalPages).rank;
}
 
export function getRankTier(totalPages: number): RankTier {
  let current = RANK_TIERS[0];
  for (const tier of RANK_TIERS) {
    if (totalPages >= tier.minPages) current = tier;
    else break;
  }
  return current;
}
 
export function getRankProgress(totalPages: number): number {
  let currentIdx = 0;
  for (let i = 0; i < RANK_TIERS.length; i++) {
    if (totalPages >= RANK_TIERS[i].minPages) currentIdx = i;
    else break;
  }
  if (currentIdx >= RANK_TIERS.length - 1) return 100;
  const from = RANK_TIERS[currentIdx].minPages;
  const to   = RANK_TIERS[currentIdx + 1].minPages;
  return Math.round(((totalPages - from) / (to - from)) * 100);
}
 
export function getPagesUntilNextRank(totalPages: number): number {
  for (const tier of RANK_TIERS) {
    if (tier.minPages > totalPages) return tier.minPages - totalPages;
  }
  return 0; // max rank
}
 
 