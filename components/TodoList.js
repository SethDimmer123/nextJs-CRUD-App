// (21:13) 
// this is how i get all my documents and display them in my Todos.

// (21:41) These are the 2 functions i need to get all 
// the documents from a collection.

import { onSnapshot, collection } from "firebase/firestore"
// (22:19) i use the onSnapshot function takes a picture 
// of my collection and gets all the documents from that 
// collection and gives it to me.
//(22:34)the onSnapshot function is also a listener
// so everytime there is a change in the collection the
// onSnapshot function will run again.
import { useEffect, useState } from "react"
import { db } from "./firebase"

// (21:43) i get all of the todos adn put them in an array and 
// map over them in my list.


export default function TodoList() {//(2:48)
    const [todos,setTodos] = useState([])// (21:52) initially an empty array
//putting all my todos in an array then map over them in my list

// (22:08)i create a useEffect where i can get all of the todos

useEffect(() => {
    //(22:45) this is how i use the onSnapshot function
    const unsubscribe = onSnapshot(collection(db, "todos"),(snapshot) => {
        console.log(snapshot)// (23:38) in this function i handle whatever i
        // i want to do with the snapshot object that i received so i console log
        // the object to see what it is.
        // an object is being logged in console.

    // (23:19) after i pass the database and the todos collection
    //  in i get an object back which is a snapshot of my collection.
    // the 2nd arguement is the callback function.
    // in the function i recieve an object the object is a snapshot of
    // my collection i called it snapshot but you can call it anything.


        // (24:05) the docs property is 
        // an array with all the documents in my collection.
        //so i map through the docs property and 
        // put them in my todos array in the useState.

        // this is an array so i can map it 
        setTodos(snapshot.docs.map(doc => {
//(24:42)the doc on line 48 is each individual document in my 
// collection the doc has a method called data.
// the data will give the data INSIDE MY DOC which is th title and detail.
// then i access the title and detail
            return {
                id:doc.id,// (27:09) key prop missing solved id auto generated from firestore database
                title: doc.data().title,
                detail: doc.data().detail
                //(25:17) in the console i get a bunch of random stuff
                // to actually get the data i need to call the data function
                // on the document then i can get the data.

            }
        }))
    })

    return unsubscribe 
    //(27:50) i am returning this function 
    // becuase the onSnapshot function is a listener.
    
    // so it listens to my collection and 
    // listening for any change in the collection.

    // so anytime i add or delete a document it 
    // re-runs unsubscribe function so i get the new data.

    // when i return the function i stop the listener 
    // so it will not always take up resources from my computer.

}, [])//don't forget dependency array

//(26:06) NOW my todos array is an array full of objects of my todos
// which means i can map over it and display it in my todos list. 

    return(//(2:48)
        <>
        <div>
            <h1>Todos</h1>
            <ul className="todoList">{/** 4:21 */}
                {todos.map(todo => {
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