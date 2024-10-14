import { useState, useEffect } from 'react';
import { Input, Button, Select, Form } from 'antd';
import { CloseOutlined, PlusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';

const URLAPi = process.env.REACT_APP_URL_API_BACK;

const CmpInsertTask = ({ onConfirm, selectedTaskEdit }) => {
  const { Option } = Select;
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm(); // Crear la referencia del formulario

  useEffect(() => {
    console.log(selectedTaskEdit);
    if (selectedTaskEdit) {
      form.setFieldsValue({
        name: selectedTaskEdit.name || '',
        description: selectedTaskEdit.description || '',
        user: selectedTaskEdit.user._id || '',
        resume: selectedTaskEdit.resume || '',
      });
    } else {
      form.resetFields();
    }
  }, [selectedTaskEdit, form]);

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
        `${URLAPi}/api/task?taskId=${selectedTaskEdit._id}`,
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
  };

  return (
    <section className="form-section">
      {visible ? (
        <CloseOutlined className="icon" onClick={() => setVisible(!visible)} />
      ) : (
        <PlusCircleOutlined
          className="icon"
          onClick={() => setVisible(!visible)}
        />
      )}

      {visible && (
        <Form form={form} onFinish={handleFinish} className="form">
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
              placeholder=" Selecciona un usuario"
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

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Confirmar
            </Button>
          </Form.Item>
        </Form>
      )}
    </section>
  );
};

export default CmpInsertTask;
