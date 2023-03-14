/*
@node_command.js
Copyright ( 2021 Jalasoft 2643 Av Melchor Perez de Olguin Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20,Edificio Union № 1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft, Confidential Information You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft
*/

const Compiler = require('../compiler.js');
const ExecuteCommandWindows = require('../executed/executeComandWindows.js');

class CSharpCompiler extends Compiler {

    #compiler_command = 'csc';
    #execute_and_read_command = 'mono';

    constructor() {
        super('c_sharp','.cs');
    }

    async compile(file_path) {
        const out_file_path = './src/services/compilers/compiled_files/prueba.exe';
        const command_to_compile = `${this.#compiler_command} -out:${out_file_path} ${file_path}`
        const exeCommandWin = new ExecuteCommandWindows();

        await exeCommandWin.executeCommand(command_to_compile);

        return out_file_path;
    }

    async executeAndRead(file_path) {
        const command_to_run = `${this.#execute_and_read_command} ${file_path}`;
        const exeCommandWin = new ExecuteCommandWindows();

        return await exeCommandWin.executeCommand(command_to_run, (stdout, stderr) => {
            return {stdout, stderr};
        });
    }

     async run(file_path) {
        const new_file_path = await this.compile(file_path);

        return await this.executeAndRead(new_file_path);
    }
}

module.exports = CSharpCompiler;