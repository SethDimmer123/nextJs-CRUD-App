// this is how i get all my documents and display them in my Todos.

//These are the 2 functions i need to get all 
// the documents from a collection.

import { onSnapshot, collection } from "firebase/firestore"
//i use the onSnapshot function takes a picture 
// of my collection and gets all the documents from that 
// collection and gives it to me.
//the onSnapshot function is also a listener
// so everytime there is a change in the collection the
// onSnapshot function will run again.
import { useEffect, useState } from "react"
import { db } from "./firebase"


export default function TodoList() {
    const [todos,setTodos] = useState([])// initially an empty array
//putting all my todos in an array then map over them in my list

//i create a useEffect where i can get all of the todos

useEffect(() => {

    const unsubscribe = onSnapshot(collection(db, "todos"),(snapshot) => {
        console.log(snapshot)// an object is being logged in console.

    // after i pass these in i get an object back which is a snapshot 
    // of my collection
    // the 2nd arguement is the callback function.
    // in the function i recieve an object the object is a snapshot of
    // my collection


        // the docs property is an array with all the documents in my collection
        //so i map through the docs property and put them in my todos array
        // in the useState

        // this is an array so i can map it 
        setTodos(snapshot.docs.map(doc => {
            return {
                id:doc.id,
                title: doc.data().title,
                detail: doc.data().detail
                // the doc has a method called data gives me the data inside my doc which is the title and detail.
                // and access the title from the data.
                


                //in the console i get a bunch of random stuff(25:17)
                // to actually get the data i need to call the data function
                // on the document then i can get the data

            }
        }))
    })

    return unsubscribe 
    //i am returning this function becuase the onSnapshot function is a listener
    // so it listens to my collection and listening for any change in the collection.
    // so anytime i add or delete a document it re-runs unsubscribe function so i get the new data.
    // when i return the function i stop the listener so it will not always take up 
    // resources from my computer

}, [])

//26:06 NOW MY todos array is an array full of objects of my todos
// which means i can map over it and display it in my todos list. 

    return(
        <>
        <div>
            <h1>Todos</h1>
            <ul className="todoList">
                {todos.map(todo=> {
                    return  <li key={todo.id} className="listItem">{todo.title}</li>
                })}
                <li className="listItem">Todo 1</li>
                <li className="listItem">Todo 2</li>
                <li className="listItem">Todo 3</li>
            </ul>
        </div>
        </>
    )
}