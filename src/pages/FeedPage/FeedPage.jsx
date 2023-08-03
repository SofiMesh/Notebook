import { useState, useEffect } from "react";
// // import PageHeader from "../../components/Header/Header";
// import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import * as noteApi from "../../utils/noteApi";

export default function FeedPage() {
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState("");




//CRUD- create
    async function handleAddNote(data) {
        try {
          const responseData = await noteApi.create(data);
          setNotes([responseData.data, ...notes]);
        } catch (err) {
            console.log(err, "err in handleAddPost FeedPage");
            setError("Error Creating a Post");
        }
    }
    
//CRUD-read
async function getNotes() {
    try {
        const responseFromTheServer = await noteApi.getAll(); 
        console.log(responseFromTheServer);
        setNotes(responseFromTheServer.notes);
      } catch (err) {
        console.log(err, "error in getNotes");
        setError("Error Fetching Notes, Check terminal");
      }
}


    useEffect(() => {
        getNotes();
      }, []);

return(

<Grid centered>
      <Grid.Row>
        <Grid.Column>
          {/* <PageHeader /> */}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
<AddNoteForm handleAddNote={handleAddNote}/>
</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          {/* <NoteGallery notes={notes}/> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
   
    )
}
