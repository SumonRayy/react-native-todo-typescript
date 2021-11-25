import * as React from 'react';
import { Text, Box, Center, VStack, themeTools, useTheme, useColorMode, useColorModeValue } from 'native-base';
import ThemeToggle from '../components/theme-toggle';
import Checkbox from '../components/animated-checkbox';

export default function MainScreen() {

  const [ checked, setChecked ] = React.useState(false);
  
  const handleCheckBox = React.useCallback(() => {
    setChecked(prev => !prev);
    console.log('handleCheckBox :', checked);
  }, [ checked ]);


  return (
    <Center 
        _dark={{ bg: 'blueGray.900'}} 
        _light={{ bg: 'blueGray.300'}}
        px= {4}
        flex={1} >
        <VStack space={5} alignItems="center">
          <Box>
            <Checkbox isDone={checked} onToggleCheckBox={handleCheckBox}/>
          </Box>
            <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
                <Text fontSize={20}>Hello Vondu!</Text>
            </Box>
            <ThemeToggle />
        </VStack>
    </Center>
  );
}
