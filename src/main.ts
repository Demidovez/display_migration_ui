import fs from "fs-extra";
import stepCopyExtraFiles from "./stepCopyExtraFiles.js";
import stepCopyShapes from "./stepCopyShapes.js";
import stepCopyTempate from "./stepCopyTemplate.js";
import stepReadHtmlScreen from "./stepReadHtmlScreen.js";
import stepRemoveBindings from "./stepRemoveBindings.js";
import stepReplaceVersion from "./stepReplaceVersion.js";
import stepWriteNewHtml from "./stepWriteNewHtml.js";

const folderOriginalScreensPath = "D:\\Fiberline";
const folderMigrateScreensPath = "D:\\Fiberline_migrate";

// Шаг 1 - Определение списка экранов
let screens: string[] = [];

fs.readdirSync(folderOriginalScreensPath).forEach((file) => {
  if (file.endsWith(".htm")) {
    screens.push(file);
  }
});

[screens[15]].forEach(async (screen) => {
  // Шаг 2 - Копируем шаблон (пустой файл экрана)
  stepCopyTempate(folderMigrateScreensPath, screen);

  // Шаг 3 - Читаем html с оригинального экрана
  const htmlScreen = await stepReadHtmlScreen(
    folderOriginalScreensPath,
    screen
  );

  // Шаг 4 - Меняем старую версию на новую
  let newHtml = stepReplaceVersion(htmlScreen);

  // Шаг 5 - Записываем html в шаблон
  stepWriteNewHtml(folderMigrateScreensPath, screen, newHtml);

  // Шаг 6 - Переносим содержимое папки (шейпы)
  stepCopyShapes(folderOriginalScreensPath, folderMigrateScreensPath, screen);

  // Шаг 7 - Удаляем лишние файлы (bindings.xml, *.dsd)
  stepRemoveBindings(folderMigrateScreensPath, screen);

  // Шаг 8 - Закидываем дополнительные шаблонные файлы (bindings.xml, *.dsd)
  stepCopyExtraFiles(
    folderOriginalScreensPath,
    folderMigrateScreensPath,
    screen
  );
});
