import { Observable } from 'rxjs/Rx';
import * as SerialPort from 'serialport';

export class Inclination {
  x: number;
  y: number;
}

export class Protractor {
  result: Observable<Inclination>;
  private serialPort: SerialPort;
  private parser = new SerialPort.parsers.ByteLength({ length: 12 });

  constructor(public path: string) {
    this.serialPort = new SerialPort(path, { baudRate: 9600 });
    this.serialPort.pipe(this.parser);

    this.result = Observable.fromEvent(this.parser, 'data').map((data: Buffer) => {
      const str = data.toString();
      const x = parseInt(str.slice(1, 6), 10) / 100;
      const y = parseInt(str.slice(7), 10) / 100;
      return { x: x, y: y };
    });
  }
}
