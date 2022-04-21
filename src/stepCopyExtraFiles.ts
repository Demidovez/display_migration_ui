import fs from "fs-extra";

export const stepCopyExtraFiles = (
  folderOriginal: string,
  folderMigrate: string,
  screen: string
) => {
  const templateScreen = "../assets/template_screen";

  fs.readdirSync(
    folderOriginal + `\\${screen.replace(".htm", "")}_files`
  ).forEach((file) => {
    if (file.endsWith("bindings.xml") || file.endsWith(".dsd")) {
      fs.copyFileSync(
        new URL(templateScreen + "/template_files/" + file, import.meta.url),
        folderMigrate + `\\${screen.replace(".htm", "")}_files/${file}`
      );
    }
  });
};

export default stepCopyExtraFiles;
