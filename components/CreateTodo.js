import { useState } from "react"

export default function CreateTodo() {

    // i am using this state to get the user input.
    const [todo, setTodo] = useState({
        title: "",
        detail: ""


    })// intially it will just be an object with a title and detail property
    return (
        <>
            <form>
                <label>Title:</label>
                <br />                  {/**spread operator ... */}
                <input 
                onChange={e => setTodo({ ...todo, title: e.target.value })} 
                type="text"
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
                ></textarea>
            </form>
        </>
    )
}

