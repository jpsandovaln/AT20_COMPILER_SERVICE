/**
@javascript_compiler.js Copyright(c) 2023 Jalasoft
2643 Av Melchor Perez de Olguin, Colquiri Sud, Cochabamba, Bolivia.
Av.General Inofuentes esquina Calle 20, Edificio Union No1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft,ConfidentialInformation"). You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft
*/
import Compiler from '../Compiler';
import { exec } from 'child_process';

class JavaCompiler extends Compiler {
  #compile_and_execute_command = 'java';

  constructor() {
    super('java', '.java');
  }

  public async compileAndRead(file_path: string): Promise<{ stdout: string; stderr: string }> {
    const command = `${this.#compile_and_execute_command} ${file_path}`;

    const result = await this.executeCommand(command, (stdout, stderr) => {
      // Do something with stdout and stderr here
      return stdout;
    });

    return { stdout: result, stderr: '' };
  }

  public async run(file_path: string): Promise<{ stdout: string; stderr: string }> {
    return await this.compileAndRead(file_path);
  }
}

export default JavaCompiler;
