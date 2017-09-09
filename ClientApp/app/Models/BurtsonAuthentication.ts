import { crypto } from './../ExternalModules/crypto';

export class BurtsonAuthentication {
    
    private username: string;
    get userName() { return this.username; };
    private passwordHash: string;
    public authorized = false;
    private submissionTime: Date;
    private authorizationTime: Date;
    private clientAddress: string
    
    constructor(username: string, password: string) { 
        this.username = username;
        this.passwordHash = this.encryptPassword(password);
        this.submissionTime = new Date();
    }

    private encryptPassword(password: string): string {
        const hash = crypto.createHash('sha256'); 
        hash.update(password);
        return hash.digest('hex');
    }
}