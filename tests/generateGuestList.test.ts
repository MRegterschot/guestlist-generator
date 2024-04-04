import { generateGuestList } from "../src";
import fs from "fs";

test("generateGuestList", () => {
  const logins = ["player1", "player2", "player3"];
  const outputPath = "guestlist.xml";

  generateGuestList(logins, outputPath);

  const expectedXmlContent = 
`<?xml version="1.0" encoding="utf-8" ?>
<guestlist>
    <player>
        <login>player1</login>
    </player>
    <player>
        <login>player2</login>
    </player>
    <player>
        <login>player3</login>
    </player>
</guestlist>`;

  const xmlContent = fs.readFileSync(outputPath, "utf-8");

  expect(xmlContent).toBe(expectedXmlContent);
});