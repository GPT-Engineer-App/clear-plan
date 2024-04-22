// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Button, Input, List, ListItem, IconButton, Text, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleAddTask = () => {
    if (input.trim() === "") {
      toast({
        title: "No task entered",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const newTask = {
      id: Date.now(),
      text: input,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      }),
    );
  };

  return (
    <Box p={5}>
      <Box mb={4} display="flex" alignItems="center">
        <Input placeholder="Add a new task" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddTask()} mr={2} />
        <Button onClick={handleAddTask} leftIcon={<FaPlus />} colorScheme="teal">
          Add Task
        </Button>
      </Box>
      <List spacing={3}>
        {tasks.map((task) => (
          <ListItem key={task.id} display="flex" alignItems="center" justifyContent="space-between">
            <Text as={task.isCompleted ? "s" : ""} fontSize="lg">
              {task.text}
            </Text>
            <Box>
              <IconButton icon={<FaCheck />} onClick={() => handleToggleComplete(task.id)} colorScheme={task.isCompleted ? "green" : "gray"} aria-label="Complete task" mr={2} />
              <IconButton icon={<FaTrash />} onClick={() => handleDeleteTask(task.id)} colorScheme="red" aria-label="Delete task" />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
