import { Navbar, TaskEntry, TaskList } from "./components";
import { useLocalStorage } from "./hooks";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  return (
    <div className="bg-[#364F60] min-h-screen lg:h-screen w-screen bg-cover bg-center bg-[url('https://images.pexels.com/photos/1767664/pexels-photo-1767664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      <Navbar />
      <main className="flex flex-col lg:flex-row lg:h-[86vh] w-screen gap-4 lg:gap-0 overflow-auto">
        <TaskEntry {...{ tasks, setTasks }} />
        <TaskList {...{ tasks, setTasks }} />
      </main>
    </div>
  );
}

export default App;
