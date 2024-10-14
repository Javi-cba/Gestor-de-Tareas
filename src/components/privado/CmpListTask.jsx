import axios from 'axios';
import { useState } from 'react';
import { Card, Table, Empty, List, Pagination } from 'antd';
import {
  BarsOutlined,
  AppstoreOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
const URLAPi = process.env.REACT_APP_URL_API_BACK;

const CmpListTask = ({ getTasks, onDelete, onEdit }) => {
  const [tipoList, setTipoList] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const paginatedTasks = getTasks.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const onPageChange = page => {
    setCurrentPage(page);
  };
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Acciones',
      key: 'actions',
      render: (text, record) => (
        <>
          <DeleteOutlined
            className="icon"
            onClick={() => handleDeleteTask(record._id)}
          />

          <EditOutlined
            className="icon"
            onClick={() => handleEditTask(record)}
          />
        </>
      ),
    },
  ];
  const handleDeleteTask = async id => {
    try {
      await axios.delete(`${URLAPi}/api/task?taskId=${id}`);

      if (onDelete) onDelete();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditTask = async task => {
    if (onEdit) onEdit(task);
  };

  return (
    <section>
      <div className="buttonsList">
        <BarsOutlined
          className={tipoList === 0 ? 'iconListSelected' : 'iconList'}
          onClick={() => setTipoList(0)}
        />
        <AppstoreOutlined
          className={tipoList === 1 ? 'iconListSelected' : 'iconList'}
          onClick={() => setTipoList(1)}
        />
      </div>

      <div>
        {tipoList === 1 ? (
          //cuadriculas
          <section>
            <List
              className="listss"
              dataSource={paginatedTasks}
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
              }}
              renderItem={task => (
                <List.Item>
                  <Card hoverable className="cardss">
                    <div>
                      <h3>{task.name}</h3>
                      <p>{task.description}</p>
                      <DeleteOutlined
                        className="icon"
                        onClick={() => handleDeleteTask(task._id)}
                      />
                      <EditOutlined
                        className="icon"
                        onClick={() => handleEditTask(task)}
                      />
                    </div>
                  </Card>
                </List.Item>
              )}
              locale={{
                emptyText: <Empty description="No existen tareas" />,
              }} // Mensaje vacío
            />

            <Pagination
              current={pageSize}
              pageSize={pageSize}
              total={getTasks.length}
              onChange={onPageChange}
              showSizeChanger={false}
            />
          </section>
        ) : (
          //lista en forma de Tabla
          <Table
            dataSource={getTasks}
            className="table"
            columns={columns}
            rowKey="_id"
            locale={{ emptyText: <Empty description="No existen tareas" /> }}
            pagination={{
              pageSize: 5,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default CmpListTask;