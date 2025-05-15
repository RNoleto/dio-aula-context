import { Text, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamlist } from "../../App";

type UserScreenProps = {
    route: RouteProp<RootStackParamlist, "User">
}

export default function UserScreen({ route }: UserScreenProps) {
    const { username } = route.params
    return(
        <View>
            <Text>Bem vindo { username }!</Text>
        </View>
    )
}