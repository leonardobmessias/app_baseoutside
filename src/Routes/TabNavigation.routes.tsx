import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AgentProfile from '../Components/AgentProfile'
import { FeedAgent } from '../Components/FeedAgent'
import { LabelMenuBotton } from '../Components/MenuBotton/LabelMenuBotton'
import AgentPRofile from '../screens/Agent/AgentProfile'
import { GetSponsorAgent } from '../screens/Agent/GetSponsorAgent'
import { Home } from '../screens/Agent/Home'
import { Search } from '../screens/Agent/Search'
import { StackNavigation } from './StackNavigation.routes'

const {Navigator,Screen}  = createBottomTabNavigator()
export function TabNavigation(){
  return(
  <Navigator screenOptions={{tabBarHideOnKeyboard:true,tabBarShowLabel:false,}}>
    <Screen name= "Home" options={{ tabBarIcon:()=><LabelMenuBotton nameLabel='Home' />}} component={Home} />
    <Screen name='Search' options={{tabBarIcon:()=><LabelMenuBotton nameLabel='Search' />}} component={Search} />
    <Screen name='Share' options={{tabBarShowLabel:false,tabBarIcon:()=><LabelMenuBotton nameLabel='Share' />}} component={GetSponsorAgent}/>
    <Screen name='Statisticks' options={{ tabBarShowLabel:false,tabBarIcon:()=><LabelMenuBotton nameLabel='Statistics' />}} component={GetSponsorAgent}/>
    <Screen name='Profile' options={{ tabBarShowLabel:false,tabBarIcon:()=><LabelMenuBotton nameLabel='Profile' />}} component={StackNavigation}/>
  </Navigator>
  )
}