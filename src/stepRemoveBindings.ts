import fs from "fs-extra";

const stepRemoveBindings = (folderMigrate: string, screen: string) => {
  fs.readdirSync(
    folderMigrate + `\\${screen.replace(".htm", "")}_files`
  ).forEach((file) => {
    if (file.endsWith("bindings.xml") || file.endsWith(".dsd")) {
      fs.unlinkSync(
        new URL(
          folderMigrate + `\\${screen.replace(".htm", "")}_files/${file}`
        ).toString()
      );
    }
  });
};

export default stepRemoveBindings;
