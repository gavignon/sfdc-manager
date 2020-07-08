import { SfdcAuth } from './sfdcAuth';
import { SfdcConfig } from './SfdcConfig';
const world = '';

SfdcAuth.hello();

export class SfdcManager {
    public static sayHi() : string {
      return 'coucou from sfdc manager';
    }
}  