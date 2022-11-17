import * as api from "./libs/api.mjs";
import { Tag, removeAllChildren } from "./libs/markup.mjs";
import { FileInfoView } from "./components/FileInfoView.mjs";

export async function updateFileList() {
  const fileInfos = await api.getFiles();

  const fileListView = document.querySelector(".file-list");
  removeAllChildren(fileListView);

  fileInfos.forEach((fileInfo) => {
    const fileInfoView = new Tag("li", [
      FileInfoView({
        fileInfo,
        onFileDeleting: async () => {
          await api.deleteFile(fileInfo.Name);
          await updateFileList();
        },
      }),
    ]);
    fileListView.appendChild(fileInfoView.toDOM());
  });
}
