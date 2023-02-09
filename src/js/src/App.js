import {getAllCellphones} from './client';
import React, { Component } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import {Table,Modal,Spin} from 'antd';
import 'antd/dist/antd.min.css';
import './App.css';
import Container from './Container';
import Footer from './Footer';
import AddPhoneForm from './forms/AddPhoneForm';
import { errorNotfication } from './Notification';

const getIndicatorIcon = () => <LoadingOutlined style={{ fontSize: 24 }} spin />;

class App extends Component {

  state = {
    cellphones: [],
    isFetching: false,
    isAddPhoneModalVisible :false
  }
  componentDidMount() {
    this.fetchCellphones();
  }

  openAddPhoneModal = () => this.setState({isAddPhoneModalVisible: true})
  closeAddPhoneModal = () => this.setState({isAddPhoneModalVisible: false})

  fetchCellphones = () => {
    this.setState({
      isFetching: true
    });
    getAllCellphones()
    .then(res => res.json()
    .then(cellphones => {

      console.log(cellphones)
      this.setState({
        cellphones,
        isFetching: false
      })
    })).catch(error => {

      console.log(error.error);
      const message = error.error.message;
      const description = error.error.error;
      errorNotfication(message,description);
      this.setState({
        isFetching:false
      })
    });
  }

  render(){
    
    const{ cellphones,isFetching,isAddPhoneModalVisible } = this.state

    if(isFetching) {
      return (
        <Container>
          <Spin indicator={getIndicatorIcon()}/>
        </Container>
      )
    };

    const columns = [
      {
        title: 'CellphoneId',
        dataIndex: 'CellphoneId',
        key: 'CellphoneId'
      },
      {
        title: 'Modal',
        dataIndex: 'modal',
        key: 'modal'
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price'
      },
      {
        title: 'RAM',
        dataIndex: 'RAM',
        key: 'ROM'
      },
      {
        title: 'ROM',
        dataIndex: 'ROM',
        key: 'ROM'
      }
    ]

    return (
      <Container>
        <Table 
          style={{marginBottom: '80px'}}
          dataSource={cellphones} 
          columns={columns} 
          pagination = {false}
          rowKey = 'cellphoneId'/>
        <Modal
          title = 'Add new cellphone'
          open = {isAddPhoneModalVisible}
          onOk={this.closeAddPhoneModal}
          onCancel={this.closeAddPhoneModal}
          width = {1000}>
            <p>Are you sure to add a new phone?</p>
            <AddPhoneForm 
              onSuccess={() => {
                this.closeAddPhoneModal();
                this.fetchCellphones()}}
            />
        </Modal>
        <Footer 
          numberOfPhones={cellphones.length}
          handleAddPhoneClickEvent={this.openAddPhoneModal}/>         
      </Container>    
    );
  }
}

export default App;
