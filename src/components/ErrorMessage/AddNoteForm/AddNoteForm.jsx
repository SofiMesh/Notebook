import React, { useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";


export default fuction AddNoteForm() {
const [state, setState] = useState({
    title: "",
    text: ""
})


function handleChange(e){
    setState({
        ...state,
        [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    const formData = new FormData()
    formData.append('title', state.title)
    formData.appent('text', state.text)



    handleAddPost(formData)
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

<Button type="submit" className="btn">
    Add Note
</Button>

    </Form>
</Segment>
    );
}