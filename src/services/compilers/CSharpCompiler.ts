import { exec, ExecException } from 'child_process';
import Compiler from '../Compiler';

class CSharpCompiler extends Compiler {
    #compiler_command = 'csc';
    #execute_and_read_command = 'mono';
    
    constructor() {
        super('c_sharp','.cs');
    }
    
    async compile(file_path: string): Promise<string> {
        const out_file_path = './src/services/compilers/compiled_files/prueba.exe';
        const command_to_compile = `${this.#compiler_command} -out:${out_file_path} ${file_path}`
    
        await this.executeCommand(command_to_compile);
    
        return out_file_path;
    }
    
    async executeAndRead(file_path: string): Promise<{stdout: string, stderr: string}> {
        const command_to_run = `${this.#execute_and_read_command} ${file_path}`;
    
        return await this.executeCommand(command_to_run).then((result: string) => {
            return { stdout: result, stderr: '' };
        }).catch((error: ExecException) => {
            return { stdout: '', stderr: error.message };
        });
        
    }
    
     async run(file_path: string): Promise<{stdout: string, stderr: string}> {
        const new_file_path = await this.compile(file_path);
    
        return await this.executeAndRead(new_file_path);
    }
    
    executeCommand(command: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
          exec(command, (error: ExecException | null, stdout: string, stderr: string) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(stdout);
          });
        });
    }
}

export default CSharpCompiler;