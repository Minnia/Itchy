import React, {useState, FunctionComponent} from 'react';
import Title from '../../components/common/Title';
import form from '../../../questions.json';
import {View, Dimensions, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Page from './components/Page';
import { store } from '../../redux/store';
import {question} from "../../redux/actions"




const PageOneScreen = () => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  const test = () => {
    try{
store.dispatch(question.goForward()) //needs to be refactored
    }
  }

  const handlePress = () => {
    if (activeIndex + 1 >= form.questions.length) {
      return;
    }
    setActiveIndex(activeIndex + 1);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#bcc6ff'}}>
      <View style={{backgroundColor: '#bcc6ff', height, width}}>
        <Title title="Välmående DLQI" />
        <Page
          onPress={handlePress}
          activeIndex={activeIndex + 1}
          question={form.questions[activeIndex].questionText}
          buttons={form.questions[activeIndex].choices}
        />
        {form.questions[activeIndex].applicable ? (
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 18,
              paddingTop: 8,
            }}>
            Ej tillämpligt
          </Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default PageOneScreen;
