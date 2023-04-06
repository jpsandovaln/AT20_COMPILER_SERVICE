import { exec, ExecException } from 'child_process';

class Compiler {
    
  constructor(...args: any[]) {}

  executeCommand(command: string, callback = (stdout: string, stderr: string) => stdout): Promise<string> {
    return new Promise((resolve, reject) => {
      exec(command, (error: ExecException | null, stdout: string, stderr: string) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(callback(stdout, stderr));
      });
    });
  }

  run(...args: any[]): Promise<any> {
    throw new Error('Abstract class you must implement this method');
  }
}

export default Compiler;
