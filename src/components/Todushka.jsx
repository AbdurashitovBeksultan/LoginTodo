import React, { useState } from 'react';
import {
  Button,
  Card,
  List,
  ListItem,
  TextField,
  Container,
  Typography
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

const TodoApp = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center">
        TODO LIST
      </Typography>
      <TextField
        label="Новая задача"
        variant="outlined"
        margin="normal"
        fullWidth
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button variant="outlined" color="primary" onClick={addTask} >
        Добавить 
      </Button>
      <List>
        {tasks.map((task, index) => (
          <Card key={index} style={{ marginTop: '10px' }}>
            <ListItem>
              {task}
              <Button
               color="error"
               variant="contained"
                onClick={() => removeTask(index)}
                style={{ marginLeft: '10px' }}
              >
            Delete           
           </Button>
            </ListItem>
          </Card>
        ))}
      </List>
      <Button
        variant="contained"
        color="success"
        onClick={() => navigate('/')}
      >
        Выйти
      </Button>
    </Container>
  );
};

export default TodoApp;
