import { LinearGradient } from "expo-linear-gradient";
import {ScrollView, Text, TouchableOpacity, View, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {ArrowDownTrayIcon, Bars3CenterLeftIcon, BellIcon} from "react-native-heroicons/solid";
import { useState } from "react";
import ActiveButton from "../components/ActiveButton";
import GameCards from "../components/GameCards";

const categories = ["Action", "Family", "Puzzle", "Education", "Adventure", "Racing"];
const gameCards = [
    {
        id:1,
        title :"Angry Birds",
        image : require("../assets/images/angryBirds.png"),
        downloads : "200k",
        stars : 5
    },
    {
        id:2,
        title :"Subway",
        image :require("../assets/images/subway.png"),
        downloads : "150k",
        stars : 2
    },
    {
        id:3,
        title :"Game-3",
        image :require("../assets/images/game1.jpg"),
        downloads : "130k",
        stars : 3
    },
    {
        id:4,
        title :"Game-4",
        image :require("../assets/images/game3.jpg"),
        downloads : "149k",
        stars : 4
    }
];

const games = [
    {
        id:1,
        title :"Angry Birds",
        image :require("../assets/images/angryBirds.png"),
        downloads : "749k",
        stars : 4.7
    },
    {
        id:2,
        title :"Subway",
        image :require("../assets/images/subway.png"),
        downloads : "687k",
        stars : 4
    },
    {
        id:3,
        title :"Awesome Game",
        image :require("../assets/images/game1.jpg"),
        downloads : "345k",
        stars : 4.1
    },
    {
        id:4,
        title :"Tremendous Game",
        image :require("../assets/images/game2.jpg"),
        downloads : "149k",
        stars : 4
    }
    

]

const ScreenStore = ()=> {
    const [activeCategory, setActiveCategory] = useState("Action");
    const [onClicked, setOnClicked] = useState(null);
    return (
        <LinearGradient
        className="w-full flex-1"
        colors={['rgba(121, 94, 211, 0.4)', 'rgba(9, 93, 248, 0.4)']}>

            <SafeAreaView>

                <View className="container">
                    <View className="flex-row justify-between items-center mx-4">
                        <Bars3CenterLeftIcon size="30" color='#0D163A'/>
                        <BellIcon size="30" color='#0D163A' />
                    </View>
                {/* </View> */}

                {/* Categories */}

                <View className="mt-3 space-y-3">
                    <Text className="ml-4 text-2xl font-bold" style={{color:"#0D163A"}}>
                        Browse Games
                    </Text>
                

                    <View className="pl-4">

                        <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                            {
                                categories.map((item, index)=>{
                                    if(activeCategory==item){
                                        // <active-grdient>
                                        return (
                                        <ActiveButton key={index} value={item} containerClass="mr-2" />
                                        )
                                    }else{
                                    return (
                                        <TouchableOpacity
                                        key={item}
                                        className="bg-blue-200 p-4 px-3 rounded-full mr-2"
                                        onPress={()=>
                                            setActiveCategory(item)
                                        }>
                                            <Text>
                                                {item}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                })
                            }
                        </ScrollView>

                    </View>

                </View>

                {/* Features */}

                <View className="mt-3 space-y-4">

                    <Text className="font-bold ml-4 text-lg" style={{color:'#0D163A'}}>
                            Featured Games
                    </Text>

                    <View className="mt-4">
                        <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        >
                            {
                                gameCards.map((item, index)=>{
                                    return (
                                        <GameCards key={index} cardAtr={item} />
                                    )
                                })
                            }
                        </ScrollView>
                    </View>

                </View>

                {/* List */}

                <View className="mt-3">
                    <View className="flex-row justify-between items-center mb-3">
                        <Text className="font-bold ml-4 text-lg" style={{color:"#0D163A"}}>
                                Top Action Games
                        </Text>
                        <TouchableOpacity className="mr-4">
                            <Text className="text-blue-600 font-bold">
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={{height:320}} showsVerticalScrollIndicator={false}>
                    {
                        games.map((_,idx)=>{
                            let bgColor = (_.id == onClicked) ? "rgba(255,255,255, 0.4)" : "transparent"
                            return(
                                <TouchableOpacity
                                className="mx-4 p-2 mb-2 flex-row rounded-3xl"
                                onPress={()=>{
                                    setOnClicked(_.id);
                                    console.log(_.id, "= _.id value")
                                    console.log(onClicked, "= onclicked value")
                                }}
                                key={idx}
                                style={{backgroundColor : bgColor}}>
                                    <Image 
                                    source={_.image}
                                    style={{width:80, height:80}}
                                    className="rounded-2xl " 
                                    />
                                    <View className="flex-1 flex justify-center pl-3 space-y-3">
                                        
                                        <Text className="font-semibold">
                                            {_.title}
                                        </Text>

                                        <View className="flex-row space-x-3">
                                            <View className="flex-row space-x-3">
                                            <Image
                                            className="w-4 h-4 opacity-75"
                                            source={require("../assets/images/fullStar.png")} 
                                            />
                                            <Text className="text-xs text-gray-600">
                                                {_.stars} stars
                                            </Text>
                                        </View>

                                        <View className="flex-row space-x-3">
                                            <ArrowDownTrayIcon className="text-blue-500" size="15" />
                                            <Text className="text-xs text-gray-600">
                                                {_.downloads} 
                                            </Text>
                                        </View>
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
                
                </View>                

            </SafeAreaView>

        </LinearGradient>
        

    )
}

export default ScreenStore