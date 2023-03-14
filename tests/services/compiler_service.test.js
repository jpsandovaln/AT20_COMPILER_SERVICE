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

const compilerService = require('../../src/services');


describe('compiler_service tests', () => {

    //inicializate the compiler service before each test
    let compiler;
    beforeEach(() => {
        compiler = new compilerService();
    });


    it('should return a right response from python compiler', async () => {
        path = 'C:\Users\CAR_S\Desktop\Progra 101\Pruebas\hello.py';

        const resp = await compiler.run(path, 'python');

        const expectedResp = {
            "stdout": "Hello World from Python!",
            "stderr": "",
        };
        expect(resp).toEqual(expectedResp);
    });

    it('should return a right response from java compiler', async () => {
        path = 'C:\Users\CAR_S\Desktop\Progra 101\Pruebas\hello.java';

        const resp = await compiler.run(path, 'java');

        const expectedResp = {
            "stdout": "Hello World from Java!",
            "stderr": "",
        };
        expect(resp).toEqual(expectedResp);
    });

    it('should return a right response from c# compiler', async () => {
        path = 'C:\Users\CAR_S\Desktop\Progra 101\Pruebas\hello.cs';

        const resp = await compiler.run(path, 'c_sharp');

        const expectedResp = {
            "stdout": "Hello World from C#!",
            "stderr": "",
        };
        expect(resp).toEqual(expectedResp);
    });

});