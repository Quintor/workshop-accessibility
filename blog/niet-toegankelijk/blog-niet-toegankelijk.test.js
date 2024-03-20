/**
 * @jest-environment jsdom
 */
const { axe, toHaveNoViolations } = require("jest-axe");

expect.extend(toHaveNoViolations);

const fs = require("fs");
const path = require("path");

it("should ensure index.html has accessibility violations and to fail", async () => {
  // Read the HTML file
  const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");

  // Pass the HTML to axe
  const results = await axe(html);

  // Assert that there are no accessibility violations
  expect(results).toHaveNoViolations();
});
