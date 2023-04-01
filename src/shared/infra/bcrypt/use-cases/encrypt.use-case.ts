import * as bcrypt from 'bcrypt'
import { Encrypt } from '../interfaces/encrypt-use-case.interface';

export class EncryptUseCase implements Encrypt {
  async encrypt(value: string): Promise<string> {
    const salt = await bcrypt.genSalt()
    const encryptValue = await bcrypt.hash(value, salt)
    return encryptValue
  }
}