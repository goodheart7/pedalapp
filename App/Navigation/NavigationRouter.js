import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { Images, Colors } from '../Themes'

import TabIcon from '../Components/TabIcon'

// screens identified by the router
import IntroScreen from '../Containers/IntroScreen'
import LoginScreen from '../Containers/LoginScreen'
import ResetPasswordScreen from '../Containers/ResetPasswordScreen'
import LoginSplashScreen from '../Containers/LoginSplashScreen'
import SignUpScreen from '../Containers/SignUpScreen'

import AccountScreen from '../Containers/AccountScreen'
import ShopScreen from '../Containers/ShopScreen'
import FireviewScreen from '../Containers/FireviewScreen'
import SuggestionsScreen from '../Containers/SuggestionsScreen'
import PlannerScreen from '../Containers/PlannerScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

// TO DO: Maybe Sent Reset as child

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='root'>
          <Scene initial key='introScreen' component={IntroScreen} title='IntroScreen' hideNavBar />
          <Scene key='loginScreen' component={LoginScreen} title='LoginScreen' hideNavBar />
          <Scene key='resetPasswordScreen' component={ResetPasswordScreen} title='ResetPasswordScreen' hideNavBar />
          <Scene key='signUpScreen' component={SignUpScreen} title='SignUpScreen' hideNavBar />
          <Scene key='loginSplashScreen' component={LoginSplashScreen} title='LoginSplashScreen' direction='fade' hideNavBar />
          <Scene key='homeScreen' tabs tabBarStyle={{ backgroundColor: Colors.squeeze }} pressOpacity={0.8}>
            <Scene
              key='fireviewScreen'
              title='FireView'
              component={FireviewScreen}
              icon={TabIcon}
              activeIconImage={Images.tabFireviewActive}
              iconImage={Images.tabFireview}
              hideNavBar
            />
            <Scene
              key='shopScreen'
              title='Shop'
              component={ShopScreen}
              icon={TabIcon}
              activeIconImage={Images.tabShopActive}
              iconImage={Images.tabShop}
              hideNavBar
            />
            <Scene
              initial
              key='accountScreen'
              title='Account'
              component={AccountScreen}
              icon={TabIcon}
              activeIconImage={Images.tabAccountActive}
              iconImage={Images.tabAccount}
              hideNavBar
            />
            <Scene
              key='suggestionsScreen'
              title='Suggestions'
              component={SuggestionsScreen}
              icon={TabIcon}
              activeIconImage={Images.tabSuggestionsActive}
              iconImage={Images.tabSuggestions}
              hideNavBar
            />
            <Scene
              key='planner'
              title='Planner'
              component={PlannerScreen}
              icon={TabIcon}
              activeIconImage={Images.tabPlannerActive}
              iconImage={Images.tabPlanner}
              hideNavBar
            />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
