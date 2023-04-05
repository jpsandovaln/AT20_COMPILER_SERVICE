import Compiler from '../../Compiler';
import VERSIONES from './python_versionMap';

class PythonCompiler extends Compiler {
    #interpreter_command!: string; // Propiedad privada sin valor inicial


    constructor() {
        super('python', '.py');
    }

    async interpret(file_path: string, version: string): Promise<{ stdout: string; stderr: string }> {
        this.#interpreter_command = VERSIONES[version];
        if (!this.#interpreter_command) {
            throw new Error('Version not found');
        }
        const command = `${this.#interpreter_command} ${file_path}`;

        const result = await this.executeCommand(command);
        return { stdout: result, stderr: '' };
    }

    async run(file_path: string, version: string): Promise<{ stdout: string; stderr: string }> {
        return await this.interpret(file_path, version);
    }
}

export default PythonCompiler;

