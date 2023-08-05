import { useState, useEffect } from "react";
import PageHeader from "../../components/Header/Header";
import * as noteApi from "../../utils/noteApi";
import { Grid } from "semantic-ui-react";
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import NoteGallery from "../../components/NoteGallery/NoteGallery"

export default function FeedPage({user}) {
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState("");




    //CRUD- create
    async function handleAddNote(data) {
        try {
            const responseData = await notesApi.create(data);
            console.log(responseData);
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
            setNotes(responseFromTheServer.note);
        } catch (err) {
            console.log(err, "error in getNotes");
            setError("Error Fetching Notes, Check terminal");
        }
    }


    useEffect(() => {
        getNotes();
    }, []);

    return (

        <Grid >
            <Grid.Row>
                <Grid.Column>
                    <PageHeader />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <AddNoteForm handleAddNote={handleAddNote} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                 <NoteGallery notes={notes} />
                </Grid.Column>
            </Grid.Row>
        </Grid>

    )
}
