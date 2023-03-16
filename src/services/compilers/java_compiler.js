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

const Compiler = require('../compiler');
const ExecuteCommand = require('../executed/compiler_executeCommand.js');

class JavaCompiler extends Compiler{

    #compile_and_execute_command = 'java';

    constructor(){
        super('java','.java');
    }

    async compileAndRead(file_path){
        const command = `${this.#compile_and_execute_command} ${file_path}`;
        const execute = new ExecuteCommand();

        return await execute.exeCommand(command, (stdout, stderr) => {
            return {stdout, stderr};
        });
    }

    async run(file_path){
        return await this.compileAndRead(file_path);
    }
}

module.exports = JavaCompiler;