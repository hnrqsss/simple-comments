import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: ""
    }
)

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

// the authentication inst been implemented yet
// export const providers = {
//     'facebook': new firebase.auth.FacebookAuthProvider()
// }
// export const auth = firebase.auth()

export default base