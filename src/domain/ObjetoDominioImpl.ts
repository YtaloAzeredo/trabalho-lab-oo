import { ObjetoDominio } from './ObjetoDominio'

export abstract class ObjetoDominioImpl implements ObjetoDominio {
  constructor (protected id: number) {}

  getId (): number {
    return this.id
  }
}
