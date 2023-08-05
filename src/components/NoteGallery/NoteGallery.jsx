import { Card, Icon, Image } from "semantic-ui-react";
import AllNotes from "../AllNotes/AllNotes"


export default function NoteGallery({notes, itemsPerRow, user }){
   const allNotes= notes.map((note) => {
    return <AllNotes note={note} key={note._id} user={user} />

   })
    return
    <Card.Group itemsPerRow={itemsPerRow}>
        {allNotes}
    </Card.Group>
}




// 