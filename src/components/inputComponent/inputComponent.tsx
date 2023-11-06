/**  @jsxImportSource theme-ui  */

import * as styles from './inputComponent.styles';

import { Flex, PageHeader, Text, TextInput } from '@infotrack/zenith-ui';

import { useDataContext } from '../../context/data.context';
import { useNavigate } from 'react-router-dom';

interface Props {
  name: string;
}

export const InputComponent = (props: Props) => {
  const { word, setWord } = useDataContext();
  const navigate = useNavigate();

  return (
    <Flex sx={styles.wrapper}>
      <PageHeader
        backButtonProps={{
          children: 'Go Back',
          onClick: () => {
            navigate(-1);
          },
        }}
        paths={['Start', 'Component']}
      />

      <Flex sx={styles.input}>
        <TextInput
          labelText="What's your name?"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <Flex sx={styles.word}>
          <Text variant="title"> {`${props.name} ${word}`}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
