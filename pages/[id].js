 import {getDoc, doc } from "firebase/firestore"
 import { db } from "@/components/firebase"

// 30:32 created dynamic route for todos

// 31:33 implementing SERVER-SIDE-RENDERING 

export async function getServerSideProps(context) {
    // console.log(context)
    // (32:34) open terminal the
    //  context is being logged including a query object an id is in it.
    // with it i can get the todo doc from the fireStore
    //  database then render the information in the server.
    const id = context.query.id
    // console.log(id)
    // return{//(32:10) when using getserversideprops i need to return an object witha props property
    //     props: {

    //     }
    // }
    const docSnap = await getDoc(doc(db, "todos" , id))
    const data = docSnap.data()

    return {
        props: {
            todo: {
                title: data.title,
                detail: data.detail
            }
        }
    }


}
// (33:11) i get my data from firebase.
// i have an id that i get from the context on line 5 
// now i have to get the document by ID to do that i need
// 2 Functions from firebase
// import {getDoc, doc } from "firebase/firestore"
// also import db
// I GET A SINGLE DOCUMENT WITH JUST 1 LINE 


export default function Todo({todo}){
    return (
        <div className="container">
            <h1>Todo title: {todo.title}</h1>
            <h3>Detail: {todo.detail} </h3>
        </div>
    )
}