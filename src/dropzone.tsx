import * as React from "react";
import {useDropzone} from 'react-dropzone'
import { createRoot } from "react-dom/client";
import { root, Graph } from "./renderer";


export function MyDropzone() {

  const onDrop = React.useCallback((acceptedFiles: any) => {
    // Do something with the files
    acceptedFiles.forEach((file: Blob) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const text = reader.result as string;
        const data = JSON.parse(text);
        console.log(data)
        console.log(data['graphData']['labels'])
        console.log(data['graphData']['datasets'])
        const graphData = {
          labels: data['graphData']['labels'],
          datasets: data['graphData']['datasets']
        };


        root.render(
          <div>
            <MyDropzone />,
            <Graph graphData={graphData} />
          </div>
        );
      }
      reader.readAsText(file)
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive, open} = useDropzone({onDrop, noClick: true})


  const baseStyle = {
      // border: "1px dotted #888"
  };
  const borderNormalStyle = {
    border: "3px dotted #000",
    backgroundColor: "#888",
    width: "600px"
  };
  const borderDragStyle = {
    border: "3px dotted #888",
    transition: 'border .5s ease-in-out',
    backgroundColor: "#DDD",
    width: "600px"
  };

  const style = React.useMemo(() => (
    { ...baseStyle, ...(isDragActive ? borderDragStyle : borderNormalStyle)}
  ), [isDragActive]);

  return (
    <div>
      <button type="button" onClick={open}>Select Files</button>
      <div {...getRootProps()} style={style}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag and drop some files here</p>
        }
      </div>
    </div>
  )
}
