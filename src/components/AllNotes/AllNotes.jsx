import React from "react";
import { Card, Image, Button, Header } from "semantic-ui-react";

export default function Allnotes({ note, user, handleDeleteNote }) {


  return (
    <>
      <Header color="brown">{note.user.username} </Header>
      <Card key={note._id} >
        <Card.Content textAlign="left">
          <Card.Header style={{color: 'orange'}}>{note.title}</Card.Header>
          <Card.Description style={{ fontSize: '20px' }}>{note.text}</Card.Description>
          <Button size="tiny" onClick={ () => handleDeleteNote(note._id)} color="brown">X</Button>
        </Card.Content>
      </Card>
    </>
  )
}