
import { officerList } from "./officers/OfficerList.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { officerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNoteButton.js"
import "./notes/NoteList.js"
import "./alibis/ShowAlibisButton.js"
import "./alibis/AlibisList.js"
import "./witnesses/ShowWitnessButton.js"
import "./witnesses/WitnessList.js"
import { ShowWitnessListButton } from "./witnesses/ShowWitnessButton.js"
import { getWitnesses } from "./witnesses/WitnessDataProvider.js"



officerList()
CriminalList()
ConvictionSelect()
officerSelect()
NoteForm()
ShowNoteButton()
ShowWitnessListButton()
getWitnesses()