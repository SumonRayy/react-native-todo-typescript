import React from "react";
import { Text, HStack, Switch, useColorMode } from "native-base";

export default function ThemeToggle() {
    
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack>
            <Text style={{marginTop: 10}}>Dark Mode</Text>
            <Switch
                isChecked={colorMode === "light"}
                onToggle={toggleColorMode}
            />
            <Text style={{marginTop: 10}}>Light Mode</Text>
        </HStack>
    );
}