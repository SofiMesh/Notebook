import { useState, useEffect } from "react";
import PageHeader from "../../components/Header/Header";
import * as noteApi from "../../utils/noteApi";
import { Grid } from "semantic-ui-react";

import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import NoteGallery from "../../components/NoteGallery/NoteGallery";

export default function FeedPage({ user, handleLogout }) {
    const [state, setState] = useState({
        notes: [],
        error: "",
    });

    const { notes, error } = state;

    useEffect(() => {
        

        getNotes();
    }, []);
    async function getNotes() {
        try {
            const responseData = await noteApi.getAll();
            setState((prevState) => ({
                ...prevState,
                notes: responseData.note,
            }));
        } catch (err) {
            setState((prevState) => ({
                ...prevState,
                error: "Error Fetching Notes, Check terminal",
            }));
            console.log(err, "error in getNotes");
        }
    }
    async function handleAddNote(data) {
        try {
            const responseData = await noteApi.create(data);
            setState((prevState) => ({
                ...prevState,
                notes: [responseData.data, ...prevState.notes],
            }));
        } catch (err) {
            setState((prevState) => ({
                ...prevState,
                error: "Error Creating a Note",
            }));
            console.log(err, "err in handleAddNote");
        }
    }

    async function handleDeleteNote(noteId) {
        try {
            await noteApi.remove(noteId);
           getNotes()
        } catch (err) {
            setState((prevState) => ({
                ...prevState,
                error: "Error Deleting a Note",
            }));
            console.log(err, "err in handleDeleteNote");
        }
    }

    return (
        <>
            <Grid>
                <NoteGallery notes={notes} handleDeleteNote={handleDeleteNote} />
                <PageHeader handleLogout={handleLogout} user={user} />
                <AddNoteForm user={user} handleAddNote={handleAddNote} />
            </Grid>
        </>
    );
}