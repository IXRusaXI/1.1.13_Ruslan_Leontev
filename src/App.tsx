import Footer from "./Footer/Footer";
import TodoInput from "./Inputs/TodoInput";
import TodoList from "./TodoList/TodoList";

function App() {
  return (
    <div className="todoapp">
      <h1>Задачи</h1>
      <section>
        <TodoInput />
        <TodoList />
        <Footer />
      </section>
    </div>
  );
}

export default App;
