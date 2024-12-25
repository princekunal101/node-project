# Random Password Generator 
A simple and customizable random password generator built with Node.js. This tool generates secure passwords based on user-defined criteria such as length, inclusion of uppercase letters, lowercase letters, numbers, and special characters.

## Features

- Generates secure random passwords.
- Customizable password length.
- Option to include uppercase letters, lowercase letters, numbers, and special characters.
- Easy to use CLI interface.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 10 or higher)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/princekunal101/node-project.git
   ```
2. Navigate to the project directory:
   ```sh
   cd random-password-generator
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

To generate a random password, run the following command:
```sh
node index.mjs
```

You can customize the password generation by providing additional options:

- **Length**: Specify the length of the password.
- **Include Uppercase**: Include uppercase letters in the password.
- **Include Lowercase**: Include lowercase letters in the password.
- **Include Numbers**: Include numbers in the password.
- **Include Special Characters**: Include special characters in the password.

### Example

```bash
node index.mjs --length 12 --uppercase --lowercase --numbers --special
```

```bash
node index.mjs -l 12 -u -l -n -s
```

This command generates a 12-character password that includes uppercase letters, lowercase letters, numbers, and special characters.

## Options

- `--length` or `-l`: Length of the password (default is 8).
- `--uppercase` or `-u`: Include uppercase letters.
- `--numbers` or `-n`: Include numbers.
- `--special` or `-s`: Include special characters.

## Example Output

```
Generated Password: &OvLrZc1af:sGQHsX;
```
