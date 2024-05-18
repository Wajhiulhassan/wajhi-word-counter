import inquirer from 'inquirer';
async function main() {
    const userInput = await inquirer.prompt({
        type: 'input',
        name: 'paragraph',
        message: 'Please enter an English paragraph:',
    });
    const paragraph = userInput.paragraph.trim(); // Remove leading/trailing whitespaces
    const wordCount = paragraph.split(/\s+/).length; // Split by whitespaces and count words
    const charCount = paragraph.replace(/\s+/g, '').length; // Remove all whitespaces and count characters
    console.log(`Number of words: ${wordCount}`);
    console.log(`Number of characters (excluding whitespaces): ${charCount}`);
}
main();
