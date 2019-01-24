import { Observable } from 'rxjs/Rx';
export declare class Inclination {
    x: number;
    y: number;
}
export declare class Protractor {
    path: string;
    result: Observable<Inclination>;
    private serialPort;
    private parser;
    constructor(path: string);
}
