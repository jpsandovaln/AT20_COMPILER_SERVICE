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

class JavaScriptCompiler extends Compiler {
  private readonly compileAndExecuteCommand = 'node';

  constructor() {
    super('node', '.js');
  }

  public async compileAndRead(file_path: string): Promise<{ stdout: string; stderr: string }> {
    const command = `${this.compileAndExecuteCommand} ${file_path}`;
    const result = await this.executeCommand(command);
    return { stdout: result, stderr: '' };
  }

  public async run(file_path: string): Promise<{ stdout: string; stderr: string }> {
    return await this.compileAndRead(file_path);
  }

  public executeCommand(command: string, callback = (stdout: string, stderr: string) => stdout): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(callback(stdout, stderr));
      });
    });
  }
}

export default JavaScriptCompiler;
