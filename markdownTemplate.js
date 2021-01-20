const templateMarkDown = (input) =>
  `# ${input.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Test](#test)
- [Questions](#questions)

## Description
${input.description}

${input.license}

## Installation
${input.install}
## Usage
${input.usage}
## Contributors
${input.contribute}
## Test
${input.test}
## Questions
If you have any further questions please contact me via

GitHub: [${input.username}](https://github.com/${input.username})

or

Email: ${input.email}.
`;

module.exports = templateMarkDown;
