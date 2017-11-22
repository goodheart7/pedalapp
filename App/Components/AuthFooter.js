import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/AuthFooterStyles'

export default class AuthFooter extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      isButtonPressed: {
        fireview: false,
        termAndPrivacy: false
      }
    }
  }

  setButtonPressStatus = (buttonName, status) => {
    this.setState(state => Object.assign({}, state, {isButtonPressed: {[buttonName]: status}}))
  }

  render () {
    const {isButtonPressed} = this.state
    return (
      <View style={styles.bottomSection}>
        <TouchableWithoutFeedback
          onPressIn={() => this.setButtonPressStatus('fireview', true)}
          onPressOut={() => this.setButtonPressStatus('fireview', false)}
        >
          <View style={styles.fireviewButton}>
            <Image
              source={isButtonPressed.fireview ? Images.pressed.fireview : Images.fireview}
              resizeMode='contain'
              style={styles.fireviewIcon}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPressIn={() => this.setButtonPressStatus('termAndPrivacy', true)}
          onPressOut={() => this.setButtonPressStatus('termAndPrivacy', false)}
        >
          <View>
            <Text
              style={isButtonPressed.termAndPrivacy ? styles.termsLinkTextPressed : styles.termsLinkText}
            >
              Terms of Service and Privacy Policy
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
