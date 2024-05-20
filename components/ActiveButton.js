import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Text } from "react-native";

const ActiveButton = (props)=>{
    return(
        <LinearGradient
        colors={['rgba(14, 191, 211, 0.9)', 'rgba(68, 93, 248, 0.9)']}
        end={{x:1,y:1}}
        start={{x:0.1, y:0.2}}
        className={`rounded-full ${props.containerClass}`} >

            <TouchableOpacity className={`p-3 px-4 ${props.buttonClass}`}>

                <Text className="text-white font-bold">
                    {props.value}
                </Text>

            </TouchableOpacity>

        </LinearGradient>
    )
}

export default ActiveButton