import React, { useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";


export default function AddNoteForm({ handleAddNote }) {
  const [state, setState] = useState({
    title: "",
    text: ""
  });

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleAddNote({
      title: state.title,
      text: state.text
    });
    setState({ title: "", text: ""})
  }

  return (
    <Segment attached="top" color="olive">
      <Form onSubmit={handleSubmit}>
        <Form.Input
          className="title"
          name="title"
          value={state.title}
          placeholder="Title"
          onChange={handleChange}
        />

        <Form.TextArea 
          className="text"
          name="text"
          value={state.text}
          placeholder="Text Goes Here"
          onChange={handleChange}
          
        />

        <Button type="submit" className="btn" color="green">
          Add Note
        </Button>
      </Form>
    </Segment>
  );
}