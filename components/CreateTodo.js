import { useState } from "react"
// (17:36)i imported 3 things to create data 
// to the firestore database.
import { db } from "./firebase";
// these are 2 functions (line 6)
import { addDoc, collection } from "firebase/firestore";

// this is how i get my inputs from the USER

export default function CreateTodo() {//(6:15)

    // i am using this state to get the user input.
    const [todo, setTodo] = useState({// (07:44)
        title: "",
        detail: ""
    })// intially it will just be an object with a title and detail property

    // creating a function that can send my todo to the firestore database

    async function handleSubmit() { //sending data to firebase(18:05)
        const docRef = await addDoc(collection(db, "todos"), todo)
        // (18:15)
        //reference to document , 
        // im adding the doc to the todos collection,
        //in the first arguement i pass in which database i want 
        // in the second arguement i put what collection i want the doc to be added
        // the second arguement for the addDoc is what i want to be added 
        // which is usually an object but in this case 
        // i already have the object above
        // (todo) object [line 11] containing title and detail.
        // THIS IS ALL I HAVE TO DO TO SEND DATA TO FIRESTORE DATABASE

        setTodo({//(20:52) after pressing AddTodo my input fields clear
            title:"",
            detail:"",
        })
    }
    return (
        <>
            <form>{/**{07:22} */}
                <label>Title:</label>
                <br />                  {/**spread operator ... */}
                <input 
                onChange={e => setTodo({ ...todo, title: e.target.value })}
                type="text"
                value={todo.title}
                ></input>
                {/* 8:46 */}
                {/* the new Todo will be an object which 
            is the same as above but i am changing the title */}
            {/* so what i did was i setTodo to be an object then INSIDE THE OBJECT
             i spreaded the Todo object
             so all the properties inside the old todo (the old useState todo)
             i added it to this new object in the input tag {line 38}
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
            {/**I ADDED THE HANDLE SUBMIT FUNCTION TO ADD THE TODO 
             * TO MY FIRESORE DATABASE WHEN I CLICK THE Add Todo button */}

            {/**
             * the reason i put the button outside the form
             * was because if it was inside the form and i press the button
             * then it will refresh the page.
             */}
            <p>{JSON.stringify(todo)}</p>
        </>
    )
}

// one more thing i need to do is make the value 
// of the input the todo.title line 40 and line 56.
// (09:29)
// i have handled getting the inputs from the user


// 10:35 i add firebase to have a database where i can store my todos
// and create,read,and update them. 

// creates firebase 11:21 

// creates a new file called firebase.js (11:48)

// paste firebase credentials in firebase .js

// KEEP THE KEYS HIDDEN BY USING A .env.local file



