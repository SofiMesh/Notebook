import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function AllNotes({ note }) {
  return (
    <Card key={note._id}>
      <Card.Content textAlign="left">
        <Image
          floated="left"
          size="large"
          avatar
          src={
            note.user.photoUrl || "https://react.semantic-ui.com/images/wireframe/square-image.png"
          }
        />
        <Card.Header floated="right">{note.user.username}</Card.Header>
      </Card.Content>

      <Image src={note.photoUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{note.text}</Card.Description>
      </Card.Content>
    </Card>
  );
}