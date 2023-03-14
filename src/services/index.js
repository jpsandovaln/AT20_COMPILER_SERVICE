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

const COMPILERS = require('./compilers/list.js');

class CompilationService{
    #compilers;

    constructor(){
        this.#compilers = COMPILERS;
    }

    async run(file_path, language){
        const compiler = this.#compilers.find(compiler => compiler.language === language);
        if(!compiler){
            throw new Error('Compiler not found');
        }
        return await compiler.run(file_path);
    }
}

module.exports = CompilationService;