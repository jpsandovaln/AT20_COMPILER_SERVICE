import COMPILERS from './compilers/list';
import Compiler from './Compiler';
import CompilerException from '../common/compilerException';

class CompilationService {
  // #compilers: Record<string, Compiler>;
  #compilers;

  constructor() {
    this.#compilers = COMPILERS;
  }

  async run(file_path: string, language: string, version?: string): Promise<{ stdout: string, stderr: string }> {
    const compiler = this.#compilers[language];
    if (!compiler) {
      throw new CompilerException('Compiler not found :(', 404, 'AT20-CompilationService.run()');      
    }

    return await compiler.run(file_path, version);
  }
}

export default CompilationService;