import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { HeartIcon, ArrowDownTrayIcon } from "react-native-heroicons/solid";



const GameCards = ({cardAtr})=>{
    const [isClicked, setIsClicked] = useState(false);
    const [starRate, setStarRate] = useState(cardAtr.stars);

    return (
        <View className="mr-4 ml-2 relative ">
            <Image source={cardAtr.image} className="w-80 h-60 rounded-2xl" />
            <LinearGradient 
            colors={["transparent","rgba(0, 0, 0, 0.4)"]} 
            className="absolute rounded-2xl h-full w-full flex justify-between p-4">

                <View className="flex-row justify-end ">
                    <TouchableOpacity 
                    className="p-3 rounded-full"
                    style={{backgroundColor:"rgba(255, 255, 255, 0.6)"}}
                    onPress={()=>{
                        setIsClicked(!isClicked);
                        
                    }}>
                        <HeartIcon size="25" color={isClicked ? "red" : "white"} />
                    </TouchableOpacity>
                </View>
                          

                {/* Active Stars */}

                <View className="flex-row justify-start relative">

                    <View className="flex-col w-full justify-between ">

                        <View className="flex-row justify-between ">                           

                            <View className="flex-row justify-start pb-5 ">
                            {   
                                Array(5).fill(0).map((_,idx)=>{
                                    if(starRate >= idx+1){
                                    return (
                                        <Image key={idx} source={require("../assets/images/fullStar.png")} 
                                        className="w-5 h-5"/>
                                        
                                    )
                                    }if(5-starRate!=0){
                                        return (
                                            <Image key={idx} source={require("../assets/images/emptyStar.png")} 
                                            className="w-5 h-5"/>                                     
                                        )
                                    }
                                }) 
                            
                            }
                            <View className="absolute top-5">
                                <Text Text className="font-bold text-gray-300 pl-0" style={{fontSize:"17px"}}> {cardAtr.title} </Text>  
                            </View>
                              
                            </View>

                            {/* <Text className="text-xl font-bold text-gray-300"> {cardAtr.title} </Text> */}

                            <View className="flex-row justify-end ">

                                {/* <Text className="text-xl font-bold text-gray-300"> {cardAtr.title} </Text> */}

                                <View className="flex-row justify-end">
                                    < ArrowDownTrayIcon size="24" color="lightgrey"/>
                                </View>                               
                            </View>



                        </View>

                        {/* <View className="absolute flex-row justify-start mt-5 mb-2">
                            <Text className="text-xl font-bold text-gray-300"> {cardAtr.title} </Text>
                        </View>  */}

                        {/* Download Icon */}

                        {/* <View className="flex-row justify-end border-2 border-b-violet-400">
                            < ArrowDownTrayIcon size="24" color="lightgrey"/>
                        </View> */}



                    </View>

                </View>

            </LinearGradient>


        </View>
    )
}

export default GameCards