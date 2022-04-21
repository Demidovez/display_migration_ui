import fs from "fs-extra";

const stepWriteNewHtml = (folder: string, screen: string, html: string) => {
  fs.writeFileSync(new URL(folder + "/" + screen).toString(), html);
};

export default stepWriteNewHtml;
