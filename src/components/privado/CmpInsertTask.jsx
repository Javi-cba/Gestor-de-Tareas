import { useEffect } from 'react';
import { Input, Button, Select, Form, Drawer, Flex } from 'antd';
import {
  PlusCircleOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // Importar el hook useNavigate
import axios from 'axios';

const URLAPi = process.env.REACT_APP_URL_API_BACK;

const CmpInsertTask = ({ onConfirm, selectedTaskEdit, open, setOpen }) => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const navigate = useNavigate(); // Hook para redirigir

  useEffect(() => {
    if (selectedTaskEdit) {
      form.setFieldsValue({
        name: selectedTaskEdit.name || '',
        description: selectedTaskEdit.description || '',
        user: selectedTaskEdit.user ? selectedTaskEdit.user._id : '',
        resume: selectedTaskEdit.resume || '',
      });
      // Si esta editando, el path /edit/{id}
    } else {
      form.resetFields();
    }
  }, [selectedTaskEdit, form, navigate]);

  const postTask = async fields => {
    try {
      const resp = await axios.post(`${URLAPi}/api/task`, fields);
      console.log(resp);
      if (onConfirm) onConfirm();
    } catch (error) {
      console.error('Error al enviar la tarea:', error);
    }
  };

  const putTask = async fields => {
    try {
      const resp = await axios.put(
        `${URLAPi}/api/task/edit/${selectedTaskEdit._id}`,
        fields
      );
      console.log(resp);
      if (onConfirm) onConfirm();
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  };

  const handleFinish = async values => {
    if (selectedTaskEdit) {
      await putTask(values);
    } else {
      await postTask(values);
    }
    form.resetFields();
    setOpen(false);
    navigate('/tareas');
  };

  return (
    <section className="form-section">
      <Button
        type="default"
        onClick={() => {
          form.resetFields();
          setOpen(true);
          navigate('/tareas/crear');
        }}
        icon={<PlusCircleOutlined />}
        style={{ marginLeft: '0.5rem' }}
      >
        Nueva
      </Button>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
          navigate('/tareas');
        }}
        title={selectedTaskEdit ? 'Editar Tarea' : 'Nueva Tarea'}
        placement="right"
      >
        <Form form={form} onFinish={handleFinish}>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese el nombre de la tarea',
              },
            ]}
          >
            <Input placeholder="Nombre de la Tarea" />
          </Form.Item>

          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese la descripción de la tarea',
              },
            ]}
          >
            <Input placeholder="Descripción de la Tarea" />
          </Form.Item>

          <Form.Item
            name="user"
            rules={[
              { required: true, message: 'Por favor seleccione un usuario' },
            ]}
          >
            <Select
              showSearch
              optionFilterProp="children"
              placeholder="Selecciona un usuario"
            >
              <Option value="66720887f3d27a4d4c6c5e8d">POTRO</Option>
              <Option value="6675bce74e95d2fa340d9e3c">PABLO</Option>
              <Option value="66720867f3d27a4d4c6c5e8b">GOMEZ</Option>
              <Option value="66da50078e17e83dcdc2f7b5">DANI</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="resume"
            rules={[
              { required: true, message: 'Por favor ingrese un resumen' },
            ]}
          >
            <Input placeholder="Resumen" />
          </Form.Item>

          <Flex gap="middle" justify="end">
            <Form.Item>
              <Button
                type="default"
                onClick={() => {
                  setOpen(false);
                  form.resetFields();
                  navigate('/tareas');
                }}
                icon={<CloseOutlined />}
              >
                Cancelar
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>
                Confirmar
              </Button>
            </Form.Item>
          </Flex>
        </Form>
      </Drawer>
    </section>
  );
};

export default CmpInsertTask;
