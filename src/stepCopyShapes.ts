import fs from "fs-extra";

const stepCopyShapes = (
  folderOriginal: string,
  folderMigrate: string,
  screen: string
) => {
  if (!fs.existsSync(folderMigrate + `\\${screen.replace(".htm", "")}_files`)) {
    fs.mkdirSync(folderMigrate + `\\${screen.replace(".htm", "")}_files`);
  }

  fs.copySync(
    new URL(
      folderOriginal + `/${screen.replace(".htm", "")}_files`,
      import.meta.url
    )
      .toString()
      .replace("file:///", ""),
    folderMigrate + `\\${screen.replace(".htm", "")}_files`
  );
};

export default stepCopyShapes;
