import React from "react";
import { Box, Text, useColorModeValue } from "native-base";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Pressable } from "react-native";

interface Props {
    isDone: boolean;
    onToggleCheckBox: () => void;
}

export default function Checkbox(props: Props) {

    const { isDone, onToggleCheckBox } = props;

  return (
      <Box>
          <BouncyCheckbox
              size={25}
              fillColor={useColorModeValue('red', 'yellow')}
              unfillColor="#fff"
              text="Checkbox"
              textStyle={{ color: useColorModeValue('red', 'yellow') }}
              iconStyle={{ borderColor: useColorModeValue('red', 'yellow') }} 
              onPress={onToggleCheckBox}           
          />
      </Box>

    );
}