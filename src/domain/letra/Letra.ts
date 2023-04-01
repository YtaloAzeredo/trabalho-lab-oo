export abstract class Letra {
    protected constructor(private codigo: string) {
        if(this.codigo.length > 0) {
            new Error('código deve conter apenas um caracter')
        }
    }

    getCodigo(): string {
        return this.codigo
    }

    equals(letra: Letra): boolean {
        return letra.getCodigo() === this.codigo
    }

    exibir(contexto: object): void {
        console.log(contexto)
    }

    hashCode(s: string): number {
        let h = 0
        for(let i = 0, h = 0; i < s.length; i++)
            h = Math.imul(31, h) + s.charCodeAt(i) | 0;
        return h;
    }

    toString(): string{
        return this.codigo
    }

} 
