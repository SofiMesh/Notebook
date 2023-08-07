import React from "react";
import { Card, Image, Button, Header } from "semantic-ui-react";

export default function Allnotes({ note, user, handleDeleteNote }) {


  return (
    <>
      <Header>{note.user.username}</Header>
      <Card key={note._id}>
        <Card.Content textAlign="left">
          <Card.Header>{note.title}</Card.Header>
          <Card.Description>{note.text}</Card.Description>
          <Button onClick={ () => handleDeleteNote(note._id)}>X</Button>
        </Card.Content>
      </Card>
    </>
  )
}