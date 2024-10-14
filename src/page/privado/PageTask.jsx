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

  const fetchData = async () => {
    try {
      const resp = await axios.get(`${URLAPi}/api/tasks`);
      setTasks(resp.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterTasks = listTask => {
    if (getFiltroBusq.idUser === '0') {
      return listTask;
    } else {
      return listTask.filter(task => {
        const nameMatches =
          getFiltroBusq.name === '' ||
          task.name.toLowerCase().includes(getFiltroBusq.name.toLowerCase());
        const userMatches = task.user._id === getFiltroBusq.idUser;
        return nameMatches && userMatches;
      });
    }
  };

  const filteredTasks = filterTasks(getTasks);

  return (
    <section className="section-task">
      <CmpInsertTask onConfirm={fetchData} selectedTaskEdit={selectedTask} />
      <CmpFilterTask onChange={setFiltroBusq} />
      <CmpListTasks
        getTasks={filteredTasks}
        onDelete={fetchData}
        onEdit={setSelectedTask}
      />
    </section>
  );
};
export default PageTask;
