import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyTipe: EnergyType;
  private static instances = 0;

  constructor(name: string) {
    super(name);
    Mage.instances += 1;
    this._energyTipe = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyTipe;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}