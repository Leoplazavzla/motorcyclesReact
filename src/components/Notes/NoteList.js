import React from "react"
import {Card, CardContent, Grid, Typography, IconButton, CardHeader} from "@mui/material";
import {useNote} from "../../contexts/NotesContext";
import {useAuth} from "../../contexts/AuthContext"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const NoteList = () => {
    const {noteArray, deleteNotes, editNote, setNoteId} = useNote();
    const {currentUser} = useAuth();
    return (
        <>
            {noteArray ?
                <Grid container spacing={1}>
                    {noteArray.map((note) => (
                        <Grid item key={note.id} xs={12} sm={6} md={4}>
                            <Card >
                                <CardHeader
                                title={note.name}
                                action={<>
                                    <IconButton
                                        color={"primary"}
                                        size="small"
                                        onClick={() => {
                                            editNote(note.id, note.name, note.description)
                                            setNoteId(note.id)
                                        }}
                                    >
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton
                                    color={"error"}
                                    size="small"
                                    onClick={() => deleteNotes(note.id, currentUser.email)}
                                    >
                                    <DeleteIcon/>
                                    </IconButton>
                                </>
                                }
                                >

                                </CardHeader>
                                <CardContent>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {note.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
                :
                <div>No notes yet. Please add your first note</div>
            }
        </>
    )
}
export default NoteList;
