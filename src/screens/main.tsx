import * as React from 'react';
import { Text, Box, Center, VStack, themeTools, useTheme, useColorMode, useColorModeValue } from 'native-base';
import ThemeToggle from '../components/theme-toggle';

export default function MainScreen() {
  return (
    <Center 
        _dark={{ bg: 'blueGray.900'}} 
        _light={{ bg: 'blueGray.300'}}
        px= {4}
        flex={1} >
        <VStack space={5} alignItems="center">
            <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
                <Text fontSize={20}>Hello Vondu!</Text>
            </Box>
            <ThemeToggle />
        </VStack>
    </Center>
  );
}
