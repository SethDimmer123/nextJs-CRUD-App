import { useState } from "react"
// i imported 3 things to create data to the firestore database.
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";// these are 2 functions

// this is how i get my inputs from the USER

export default function CreateTodo() {

    // i am using this state to get the user input.
    const [todo, setTodo] = useState({
        title: "",
        detail: ""
    })// intially it will just be an object with a title and detail property

    // creating a function that can send my todo to the firestore database

    async function handleSubmit() { //sending data to firebase
        const docRef = await addDoc(collection(db, "todos"), todo)
        //reference to document , 
        // im adding the doc to the todos collection,
        //in the first arguement i pass in which database i want 
        // in the second arguement i put what collection i want the doc to be added
        // the second arguement for the addDoc is what i want to be added which is usually an object but in this case i already have the object above
        // (todo) object [line 11] containing title and detail.

        setTodo({// after pressing AddTodo my input fields clear
            title:"",
            detail:"",
        })
    }
    return (
        <>
            <form>
                <label>Title:</label>
                <br />                  {/**spread operator ... */}
                <input 
                onChange={e => setTodo({ ...todo, title: e.target.value })} 
                type="text"
                value={todo.title}
                ></input>
                {/* the new Todo will be an object which 
            is the same as above but i am changing the title */}

            {/* so what i did was i setTodo to be an object then INSIDE THE OBJECT
             i spreaded the Todo object
             so all the properties inside the old todo 
             i added it to this new object in the input tag
             then i changed the title to the e.target.value   */}

             {/* i do the samething for detail */}
                <br />
                <label>Detail:</label>
                <br />
                <textarea onChange={e => setTodo({ ...todo, detail: e.target.value })} 
                value={todo.detail}
                ></textarea>
            </form>
            <button onClick={handleSubmit} >Add Todo</button>
            <p>{JSON.stringify(todo)}</p>
        </>
    )
}

// one more thing i need to do is make the value of the input the todo.title



// (16:35) after creating my firestore database and
// changing rules from if false to true

// i need to access my cloud firestore database

// i do that by going to my firebase.js file and import a function
// import {getFirestore} from "firebase/firestore";

// then add const db = get Firestore(app) under Initialize Firebase

