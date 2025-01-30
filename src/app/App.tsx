import { Button, Checkbox, Input, Listbox } from '@/shared/ui';
import './styles/globals.scss';
import { FormProvider, useForm } from 'react-hook-form';

function App() {
  const methods = useForm({});

  const onSubmit = methods.handleSubmit(data => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <Input name='name' />

        <Listbox
          name='student'
          options={[
            { name: 'Vasya', value: '1' },
            { name: 'Petya', value: '2' },
            { name: 'Lolik', value: '3' },
          ]}
        />

        <Checkbox name='isFull' />

        <Button type='submit'>submit</Button>
      </form>
    </FormProvider>
  );
}

export default App;
