import fs from "fs-extra";

const stepReadHtmlScreen = async (
  folder: string,
  screen: string
): Promise<string> => {
  return await fs.readFile(new URL(folder + "/" + screen).toString(), "utf8");
};

export default stepReadHtmlScreen;
