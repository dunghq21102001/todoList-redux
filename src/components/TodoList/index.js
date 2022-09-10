import { v4 as uuidv4 } from 'uuid';
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selectors'
import todoListSlice from './TodoListSlice'

export default function TodoList() {
  const [todo, setTodo] = useState('')
  const [priority, setPriority] = useState('Medium')

  const todoList = useSelector(todosRemainingSelector)
  // const searchText = useSelector(searchTextSelector)
  const dispatch = useDispatch()
  const handleInputChange = (e) => {
    setTodo(e.target.value)
  }
  const handleSelectPriority = (value) => {
    setPriority(value)
  }
  const handleAddButtonClick = () => {
    dispatch(todoListSlice.actions.addTodo({
      id: uuidv4(),
      name: todo,
      priority: priority,
      completed: false
    }))
    setTodo('')
    setPriority('Medium')
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((t) => (
          <Todo key={t.id} name={t.name} prioriry={t.priority} completed={t.completed} id={t.id} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todo} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handleSelectPriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddButtonClick} type='primary'>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
