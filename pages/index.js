import CreateTodo from "@/components/CreateTodo";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <>
    <div className="container">{/**3:42 */}
    <TodoList />{/**2:48 */}
    <CreateTodo />
    </div>
    </>
  )
}
