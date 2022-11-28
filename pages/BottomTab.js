import { faBaby, faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import News from "./News";
import ProfileScreen from "./ProfileScreen";
const BottomTab = createBottomTabNavigator();

const TabBawah = () => {
    return(
    <BottomTab.Navigator >
        <BottomTab.Screen 
        name = "Home"
        component={HomeScreen}
        options={{ headerShown: false,
          tabBarIcon : () => <FontAwesomeIcon icon={faHome}/>
        }} />
        <BottomTab.Screen name="News" component={News} options={{ headerShown: false,
          tabBarIcon : () => <FontAwesomeIcon icon={faBaby}/>
        }}/>
        <BottomTab.Screen name="About" component={ProfileScreen} options={{ headerShown: false,
          tabBarIcon : () => <FontAwesomeIcon icon={faInfoCircle}/>
        }}/>
      </BottomTab.Navigator>
    )
}

export default TabBawah;