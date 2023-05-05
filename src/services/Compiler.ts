import { execSync } from 'child_process';
import CompilerException from '../common/compilerException';

class Compiler {
    
  constructor(...args: any[]) {}

  executeCommand(command: string, callback = (stdout: string, stderr: string) => stdout): string {
    if (command.trim().length === 0) {
      throw new CompilerException('Command error', 405, 'AT20-ExecuteCommand()');
    }
    try {
      const stdout = execSync(command, { encoding: 'utf8' });
      return callback(stdout, '');
    } catch (error) {
      if (error instanceof Error && 'stderr' in error) {
        const stderr = typeof error.stderr === 'string' ? error.stderr : 'An unknown error occurred.';
        return callback('', stderr);
      } else {
        return callback('', 'An unknown error occurred.');
      }
    }
  }

  run(...args: any[]): { stdout: string; stderr: string } {
    throw new CompilerException('Abstract class you must implement this method', 402, 'AT20-Compiler.run()');
  }
}

export default Compiler;