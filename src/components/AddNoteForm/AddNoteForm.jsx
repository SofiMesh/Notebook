import React, { useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";


export default function AddNoteForm({ handleAddNote }) {
    const [state, setState] = useState({
    title: "",
    text: ""
});
const [selectedFile, setSelectedFile] = useState('')
// console.log(title, text)

function handleChange(e){
    setState({
        ...state,
        [e.target.name]: e.target.value
    })
  }
  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData()
    formData.append('title', state.title)
    formData.append('text', state.text)
    formData.append('photo', selectedFile)




    handleAddNote(formData)
}


    return (
        
 <Segment>
    <Form onSubmit={handleSubmit}>
       <Form.Input
        classsName="title"
        name="title"
        value={state.title}
        placeholder="Title"
        onChange={handleChange}
        />

<Form.Input
        classsName="text"
        name="text"
        value={state.text}
        placeholder="Text Goes Here"
        onChange={handleChange}
        />
<Form.Input
              className="form-control"
              type="file"
              name="photo"
              placeholder="upload image"
              onChange={handleFileInput}
              />
<Button type="submit" className="btn">
    Add Note
</Button>

    </Form>
</Segment> 
    );
}