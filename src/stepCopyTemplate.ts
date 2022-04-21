import fs from "fs-extra";

const stepCopyTempate = (folder: string, screen: string) => {
  const templateScreen = "../assets/template_screen";

  fs.copyFileSync(
    new URL(templateScreen + "/template.htm", import.meta.url),
    folder + `\\${screen}`
  );
};

export default stepCopyTempate;
