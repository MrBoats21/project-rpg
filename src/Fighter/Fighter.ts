import energy from '../Energy';

export default interface IFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: energy;
  attack(fighter: IFighter): void;
  special?(fighter: IFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}