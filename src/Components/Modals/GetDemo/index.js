import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Modal,
  Typography,
  Form,
  Input,
  Checkbox,
  Row,
  Col,
  Button,
  Result,
  Spin,
} from 'antd';
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  ShopOutlined,
  CarOutlined,
} from '@ant-design/icons';
import Logo from '../../UI/Logo';
import logo from '../../../Theme/Images/logo-new-en.png';
const GetDemo = ({ visible, onClose }) => {
  const [disabledButton, setDisabledButton] = useState(true);
  const [sendingForm, setSendingForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    enterprise: '',
    fleetSize: '',
    services: [],
  });
  const { Title } = Typography;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
  };

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Token e3cc5327c522d07fe7fb516dd4b8462e7ad166fa',
    },
  };

  const onFinish = (values) => {
    setSendingForm(true);
    axios
      .post(
        `https://www.drivetech.pro/api/v1/request_demo/`,
        values,
        axiosConfig
      )
      .then((res) => {
        if (res.data.success) {
          setSendingForm(false);
          setShowSuccessModal(true);
          onClose(false);
          setFormValues({
            name: '',
            email: '',
            phone: '',
            enterprise: '',
            fleetSize: '',
            services: [],
          });
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFieldsChange = (value, values) => {
    let newArray = { ...formValues, ...values };
    setFormValues(newArray);
  };

  useEffect(() => {
    const checkProperties = (formValues) => {
      for (var key in formValues) {
        if (
          formValues[key] === null ||
          formValues[key] === '' ||
          formValues[key].length === 0
        )
          return true;
      }
      return false;
    };
    setDisabledButton(checkProperties(formValues));
  }, [formValues]);

  return (
    <>
      <Modal visible={visible} footer={false} onCancel={onClose} centered>
        <Logo src={logo} alt='drivetech' width={160} />
        <Title
          level={4}
          style={{ textAlign: 'left', marginTop: 40, marginBottom: 40 }}
        >
          Solicita una prueba gratuita
        </Title>
        <Spin spinning={sendingForm}>
          {visible && (
            <Form
              {...layout}
              name='basic'
              initialValues={{ remember: false }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              onValuesChange={onFieldsChange}
            >
              <Form.Item
                name='name'
                rules={[{ required: true, message: 'Ingresa tu nombre' }]}
              >
                <Input
                  prefix={<UserOutlined style={{ marginRight: 10 }} />}
                  placeholder='Nombre y Apellido'
                  disabled={sendingForm}
                />
              </Form.Item>

              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Ingresa un email válido. Ej: usuario@email.com',
                    type: 'email',
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined style={{ marginRight: 10 }} />}
                  placeholder='Email'
                  type='email'
                  disabled={sendingForm}
                />
              </Form.Item>

              <Form.Item
                name='phone'
                rules={[
                  { required: true, message: 'Ingresa tu número de contacto' },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined style={{ marginRight: 10 }} />}
                  placeholder='Teléfono'
                  type='tel'
                  disabled={sendingForm}
                />
              </Form.Item>

              <Form.Item
                name='enterprise'
                rules={[
                  {
                    required: true,
                    message: 'Ingresa el nombre de tu empresa',
                  },
                ]}
              >
                <Input
                  prefix={<ShopOutlined style={{ marginRight: 10 }} />}
                  placeholder='Empresa'
                  disabled={sendingForm}
                />
              </Form.Item>

              <Form.Item
                name='fleetSize'
                rules={[
                  { required: true, message: 'Ingresa el tamaño de tu flota' },
                ]}
              >
                <Input
                  prefix={<CarOutlined style={{ marginRight: 10 }} />}
                  placeholder='Tamaño de flota'
                  type='number'
                  min='0'
                  disabled={sendingForm}
                />
              </Form.Item>

              <Form.Item labelCol={{ span: 24 }} name='services'>
                <Checkbox.Group
                  value={null}
                  onChange={null}
                  disabled={sendingForm}
                >
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <Checkbox value='seguridad'>Seguridad</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value='gestion_y_control'>
                        Control y gestión
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value='trazabilidad'>Trazabilidad</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item>
                <Button
                  size='large'
                  block
                  type='primary'
                  htmlType='submit'
                  disabled={disabledButton || sendingForm}
                >
                  {!sendingForm ? 'Solicitar prueba' : '...'}
                </Button>
              </Form.Item>
            </Form>
          )}
        </Spin>
      </Modal>
      <Modal
        visible={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        footer={false}
        closable={false}
      >
        <Result
          status='success'
          title='Hemos recibido tu solicitud'
          subTitle='Uno de nuestros ejecutivos te contactará a la brevedad'
          extra={
            <Button type='primary' onClick={() => setShowSuccessModal(false)}>
              Entendido
            </Button>
          }
        />
      </Modal>
    </>
  );
};

export default GetDemo;
