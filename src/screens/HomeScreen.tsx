import { Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamlist } from "../../App";

type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamlist, "Home">;
}

export default function HomeScreen({navigation}: HomeScreenProps) {

    const [inputText, setInputText ] = useState("");

    const navigateToUserScreen = () => {
        navigation.navigate("User", { username: inputText })
    }

    return(
        <View>
            <TextInput 
                placeholder="Digite seu nome ..."
                value={inputText}
                onChangeText={(text) => setInputText(text)}
            />
            <Button title="Logar" onPress={navigateToUserScreen}/>
        </View>
    )
}