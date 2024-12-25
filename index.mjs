import { Command } from 'commander';
import chalk from 'chalk';

const generatePassword = (length, options) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = lowercase;
    // Corrected typo in 'characters'
    if (options.uppercase) characters += uppercase;
    if (options.numbers) characters += numbers;
    if (options.symbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

const program = new Command();
program
    .version('1.0.0')
    .description('Random Password Generator')
    .option('-l, --length <number>', 'length of the password', '12')
    .option('-n, --numbers', 'include numbers', false)
    .option('-s, --symbols', 'include symbols', false)
    .option('-u, --uppercase', 'include uppercase letters', false)
    .parse(process.argv);

const options = program.opts();
const length = parseInt(options.length);
// Added check for NaN
if (isNaN(length) || length <= 0) {
    console.error(chalk.red.bold('Error: Length must be a positive number.'));
    process.exit(1);
}
const password = generatePassword(length, options);

console.log(chalk.green.bold('Generated Password: ') + chalk.yellow.bold(password));