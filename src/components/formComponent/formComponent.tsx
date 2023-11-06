/** @jsxImportSource theme-ui */

import { Flex } from 'theme-ui';
import * as styles from './formComponent.styles';
import { useDataContext } from '../../context/data.context';
import { useIsMobile } from '../../utils/cssBreakpoints.utils';
import { Button, TextInput } from '@infotrack/zenith-ui';
import { FormEvent } from 'react';

// import * as FX from './formComponent.fx';

interface MainProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FormComponent = (props: MainProps) => {
  const { formState, setFormState } = useDataContext();
  const isMobile = useIsMobile();

  // your data shape here
  const showResult = (e: FormEvent, values: any) => {
    e.preventDefault();
    console.clear();
    console.table({ values });
  };

  const updateField = (prettyName: string) => {
    const name = prettyName.replace(/\s/g, '');

    return {
      labelText: prettyName,
      value: formState[name],
      onChange: (e) => setFormState({ ...formState, [name]: e.target.value }),
      fullWidth: true,
    };
  };

  return (
    <form title="form" onSubmit={(e) => showResult(e, formState)}>
      <Flex sx={styles.wrapper(isMobile)}>
        <TextInput {...updateField('First Name')} />
        <TextInput {...updateField('Last Name')} />
        <TextInput {...updateField('Phone Number')} />
        <Button type="submit">Console log</Button>
      </Flex>
    </form>
  );
};
