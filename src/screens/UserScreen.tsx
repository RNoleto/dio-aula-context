import { useContext } from "react";
import { Text, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamlist } from "../../App";
import { UserContext } from "../contexts/userContext";

type UserScreenProps = {
    route: RouteProp<RootStackParamlist, "User">
}

export default function UserScreen({ route }: UserScreenProps) {
    const { username } = route.params
    const userContext = useContext(UserContext);
    const nomeStatico = userContext?.nome || "Nenhum nome fornecido";
    const nomeDinamico = userContext?.loginName || "Nenhum nome Salvo";
    return(
        <View>
            <Text style={{ fontSize:32 }}>Nome da Rota: { username }!</Text>
            <Text style={{ fontSize:32 }}>Nome Estatico: { nomeStatico }!</Text>
            <Text style={{ fontSize:32 }}>Nome dinamico: { nomeDinamico }!</Text>
        </View>
    )
}