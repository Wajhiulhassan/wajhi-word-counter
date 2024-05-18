import inquirer from 'inquirer';

async function main() {
    const userInput = await inquirer.prompt({
        type: 'input',
        name: 'paragraph',
        message: 'Please enter an English paragraph:',
    });

    const paragraph = userInput.paragraph.trim(); 
    const wordCount = paragraph.split(/\s+/).length; 
    const charCount = paragraph.replace(/\s+/g, '').length;

    console.log(`Number of words: ${wordCount}`);
    console.log(`Number of characters (excluding whitespaces): ${charCount}`);
}

main();
