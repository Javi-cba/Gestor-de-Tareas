import { useEffect, useState } from 'react';
import CmpListTasks from '../../components/privado/CmpListTask';
import CmpFilterTask from '../../components/privado/CmpFilterTask';
import CmpInsertTask from '../../components/privado/CmpInsertTask';
import axios from 'axios';
const URLAPi = process.env.REACT_APP_URL_API_BACK;

const PageTask = () => {
  const [getFiltroBusq, setFiltroBusq] = useState({ idUser: '0', name: '' });
  const [getTasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [Open, setOpen] = useState(false);
  const [Load, setLoad] = useState(false);

  const fetchData = async () => {
    setLoad(true);
    try {
      const resp = await axios.get(`${URLAPi}/api/tasks`);
      setTasks(resp.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterTasks = listTask => {
    return listTask.filter(task => {
      const nameMatches =
        getFiltroBusq.name === '' ||
        task.name.toLowerCase().includes(getFiltroBusq.name.toLowerCase());
      const userMatches =
        getFiltroBusq.idUser === '0' || task.user._id === getFiltroBusq.idUser; // "0" = "Todos Los Usuarios"
      return nameMatches && userMatches;
    });
  };

  const filteredTasks = filterTasks(getTasks);

  return (
    <section className="section-task">
      <CmpInsertTask
        onConfirm={fetchData}
        open={Open}
        setOpen={setOpen}
        setSelectedTask={setSelectedTask}
        selectedTaskEdit={selectedTask}
      />
      <CmpFilterTask onChange={setFiltroBusq} tasks={getTasks} />
      <CmpListTasks
        getTasks={filteredTasks}
        getLoad={Load}
        onDelete={fetchData}
        onEdit={task => {
          setSelectedTask(task);
          console.log(task);
          setOpen(true); // Abre el Drawer
        }}
      />
    </section>
  );
};
export default PageTask;
