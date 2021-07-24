import { Dimensions, Image, LogBox, StatusBar, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Color from '../../colors/Color'
import HeaderButton from '../../components/headerButton/HeaderButton'
import HeaderLogo from '../../components/headerLogo/HeaderLogo'
import React from 'react'
import { ScrollView } from 'react-native'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function TermandCondition() {
  LogBox.ignoreLogs(['Setting a timer for a'])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Image
            style={{
              resizeMode: 'stretch',
              width: screenWidth,
              height: screenHeight / 3,
            }}
            source={require('../../assets/apexMobileBanners/TermsConditions.jpg')}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: 15,
            marginTop: 9,
            backgroundColor: '#fff',
            elevation: 40,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              paddingHorizontal: 15,
            }}
          >
            Terms and Conditions for Visa Application
          </Text>
          <View
            style={{
              borderColor: Color.accentColour,
              borderBottomWidth: 3,
              width: screenWidth / 3,
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            CHILTERN T&T hereby declares that we have no role whatsoever in the
            assessment of a visa application, which is the sole prerogative of
            the government of the UAE/Immigration Department. Therefore,
            CHILTERN T&T will not in any manner be liable or responsible for any
            delay in the processing or rejection of any visa application. This
            facility is available for tourists visiting the U.A.E and fulfilling
            the eligibility conditions as announced from time to time by the
            U.A.E Immigration authorities. Issuance and approval of a visa are
            solely regulated by the government of the U.A.E and governed by
            their rules and regulations that may be amended from time to time.
            CHILTERN T&T will sponsor the visitor application subject to the
            visitor fulfilling the eligibility conditions. Visa fees are
            non-refundable and the applicant/visitor will not make any claims to
            refund the same for any reason whatsoever. The visa fee includes the
            credit card charges. Visitors must hold valid travel documents and
            comply with the requirements of the government of UAE/ Immigration
            Authorities. The decision to grant or reject a visa is the sole
            prerogative of the Immigration authorities and it is final. In case
            of rejection of visa application, the applicant will be informed of
            the same and no correspondence will be entertained. As advised
            above, visa fees will not be refunded and no reasons will be
            required to be given. It is understood that whenever the processing
            of the visa application is prevented, delayed, restricted, or
            interfered with for any reasons whatsoever by UAE Immigration
            authorities to process visitor application, then CHILTERN T&T will
            not be liable to any loss or damage which may be suffered as a
            result of such causes. Issuance of a visa or approval of the visa
            application does not in any way guarantee the visitor’s right to
            enter U.A.E. The entry is at the sole discretion of the Immigration
            officer at the airport. In case of denial of visa or entry into
            U.A.E by the Government, CHILTERN T&T will in no way be liable to
            the visitor/guest in any manner whatsoever. CHILTERN T&T will not be
            liable for any losses or damages which the visitor may suffer
            arising from delay in processing or receiving the visa. The visa is
            valid as per the government of U.A.E/issuing authorities rules and
            regulations as amended from time to time. The visa must be availed
            within its period of validity. CHILTERN T&T will not be liable to a
            visitor for any changes or cancellations to government regulations
            that should result in a visitor not being able to travel to or enter
            the U.A.E. CHILTERN T&T will take all reasonable measures to ensure
            that the information provided by the guarantor/visitor in its
            application form will remain confidential. However, CHILTERN T&T
            will not be liable for any unauthorized access by any means to that
            information. The guarantee deposit amount should be collected any
            time within one year from the date of deposit. Upon expiry of the
            above-said duration, the security deposit will not be refunded to
            the guarantor. All visas will be online eVisas however an original
            copy can be requested for an additional fee. A copy of the visa
            shall be provided to the customer once a round trip ticket is
            purchased through either our website or through the Call
            Center/branch network else an additional service charge of AED 100
            will be charged. Cancellation of an issued visa may be requested at
            an additional fee subject to immigration conditions. Visa message or
            OK to board can be updated at an additional fee. If any crime takes
            place during the visit of the traveler sponsored by us they will be
            dealt with by the UAE police department. In case if they are
            imprisoned or if the immigration system shows an overstay the
            guarantor shall be solely responsible for the penalties and
            liabilities. The agency has full authority to take necessary action
            against the guarantor. Cozmo travel reserves the right to change the
            terms and conditions at its discretion and without notice.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: 15,
            marginTop: 9,
            backgroundColor: '#fff',
            elevation: 40,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              paddingHorizontal: 15,
            }}
          >
            Undertaking
          </Text>
          <View
            style={{
              borderColor: Color.accentColour,
              borderBottomWidth: 3,
              width: screenWidth / 3,
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              paddingHorizontal: 15,
              letterSpacing: 0.3,
              lineHeight: 22.3,
            }}
          >
            I hereby undertake full responsibility for the applicant who will be
            entering U.A.E on a visit visa sponsored by COZMO TRAVEL LLC and
            that he/she will leave the country within the stipulated period
            depending on the visa issued, from the date of arrival. In the event
            of a default of this condition, I will forfeit the guarantee deposit
            and bear all legal consequences. I will be solely responsible for
            any expenses related to his travel, accommodation, food, and
            repatriation or any fine imposed by the authorities. The Applicant /
            Guarantor expressly declare that they have read and understood the
            Terms and Conditions and that they are in agreement/compliance
            thereof.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

TermandCondition.navigationOptions = (navData) => {
  return {
    headerTitle: () => <HeaderLogo />,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}
export default TermandCondition
