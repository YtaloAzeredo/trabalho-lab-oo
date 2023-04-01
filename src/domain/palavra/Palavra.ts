import { ObjetoDominioImpl } from '../ObjetoDominioImpl'
import { Tema } from '../tema/Tema'
import { Letra } from '../letra/Letra'

export class Palavra extends ObjetoDominioImpl {
  private letra: Letra

  private constructor (protected id: number, private palavra: string, private tema: Tema) {
    super(id)
  }

  static criar (id: number, palavra: string, tema: Tema): Palavra {
    return new Palavra(id, palavra, tema)
  }

  static reconstituir (id: number, palavra: string, tema: Tema): Palavra {
    return this.criar(id, palavra, tema)
  }
}
