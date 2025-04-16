import { useState } from "react"
import folders from "./data.json"
import "./index.css"

const FolderChildren = ({ folder, addChild, deleteChild }: {
  folder: any, addChild: any, deleteChild: any
}) => {
  const [isExpanded, setIsExpanded] = useState<any>({});

  return folder.map((f: any, i: number) =>
    <div className="container" key={i}>
      <div>
        <div>
          {f.isFolder && <button onClick={() => setIsExpanded((prev: any) => ({ ...prev, [f.name]: !prev[f.name] }))}>{isExpanded?.[f.name] ? "- " : "+ "}</button>}
          <span>{f.name} </span>
          {f?.isFolder && <button onClick={() => addChild(f.id)}>Add</button>}
          <button onClick={() => deleteChild(f.id)}>Delete</button>
        </div>
        {isExpanded?.[f.name] && f?.children && (<FolderChildren folder={f?.children} addChild={addChild} deleteChild={deleteChild} />)}
      </div >
    </div>
  );
}

export default function FileExplorer() {

  const [folderData, setFolderData] = useState(folders);

  const addChild = (parentId: string) => {

    const newFolderName = prompt("Enter name");
    const isFile = newFolderName?.includes(".");

    const updateTree = (list: any) => {
      const newChildren = {
        id: Date.now().toString(),
        name: newFolderName,
        isFolder: !isFile,
        children: []
      }
      return list.map((node: any) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              newChildren
            ]
          }
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) }
        }
        return node;
      })
    }
    setFolderData((prev: any) => updateTree(prev));
  }

  const deleteChild = (id: string) => {
    const updateTree = (list: any) => {
      return list.filter((node: any) => node.id !== id).map((node: any) => {
        if (node.children) {
          return { ...node, children: updateTree(node.children) }
        }
        return node;
      });
    }
    setFolderData((prev) => updateTree(prev));
  }

  return (
    <>
      <div>File Explorer</div>
      <hr />
      <FolderChildren folder={folderData} addChild={addChild} deleteChild={deleteChild} />
    </>
  )
}