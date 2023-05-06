// 30:32 created dynamic route for todos

// 31:33 implementing SERVER-SIDE-RENDERING 

export async function getServerSideProps(context) {
    // console.log(context)
    // (32:34) open terminal the
    //  context is being logged including a query object an id is in it.
    // with it i can get the todo doc from the fireStore
    //  database then render the information in the server.
    const id = context.query.id
    console.log(id)
    return{//(32:10) when using getserversideprops i need to return an object witha props property
        props: {

        }
    }

}
// 33:11 i get my data from firebase

export default function Todo(){
    return (
        <div>
            <h1>Todo title:</h1>
            <h3>Detail: </h3>
        </div>
    )
}