const generateReport = require(`../lib/generateReport`)

describe("HTML report", () => {
    it("Check if any change was made in HTML file", () => {
        expect(generateReport()).toMatchSnapshot();
    }

)})