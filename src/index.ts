import fs from 'fs';

export function generateGuestList(logins: string[], outputPath: string) {
  let xmlContent = '<?xml version="1.0" encoding="utf-8" ?>\n<guestlist>\n';

  logins.forEach((login: string) => {
    xmlContent += `    <player>\n        <login>${login}</login>\n    </player>\n`;
  });

  xmlContent += '</guestlist>';

  fs.writeFileSync(outputPath, xmlContent);
}