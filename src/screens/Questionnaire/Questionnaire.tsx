import React, {useState, FunctionComponent} from 'react';
import Title from '../../components/common/Title';
import form from '../../../questions.json';
import {View, Dimensions, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Page from './components/Page';
import {store} from '../../redux/store';
import * as actions from '../../redux/actions';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PageOneScreen = () => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  // const test = () => {
  //   try {
  //     store.dispatch(actions.question.goForward());
  //     console.log('test');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handlePress = () => {
    if (activeIndex + 1 >= form.questions.length) {
      return;
    }
    // if (activeIndex === 6 && buttonIndex === 0) {
    //   console.log('7th question');
    // }
    // else if(activeIndex === 6 && buttonIndex === 1){
    //   console.log("another choice")
    // }
    form.questions[activeIndex].choices.map((choice, i) =>
      console.log(choice, i),
    );
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
          <TouchableOpacity>
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
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default PageOneScreen;
