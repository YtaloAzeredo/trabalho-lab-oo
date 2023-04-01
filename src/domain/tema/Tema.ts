import {ObjetoDominioImpl} from '../ObjetoDominioImpl'

export class Tema extends ObjetoDominioImpl {

    private constructor(protected id: number, public nome: string) {
        super(id)
    }

    static criar(id: number, nome: string): Tema {
        return new Tema(id, nome)
    }

    static reconstituir(id: number, nome: string): Tema {
        return this.criar(id, nome)
    }

} 