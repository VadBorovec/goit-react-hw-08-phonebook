import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { TaskList } from '../components/TaskList';
import { TaskEditor } from '../components/TaskEditor';
import { fetchTasks } from '../redux/tasks/operations';
import { selectLoading } from '../redux/tasks/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </>
  );
}
