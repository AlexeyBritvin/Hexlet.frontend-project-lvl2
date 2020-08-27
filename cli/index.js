import {Command} from '../wrapper/wrapper.mjs';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')

export default program;