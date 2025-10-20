import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { useState } from 'react';
import Swiper from 'react-native-swiper';
import PersonalInfo from './components/PersonalInfo';
import MovieBooking from './components/MovieBooking';

export default function App() {
  const [booking, setBooking] = useState({
    bookDate: "2000-02-02",
    movieTitle: "",
    numberOfSeats: 0,
    balcony: 0,
  });

  return (
    <View style={styles.screencontainer}>
      <View style={styles.imgview}>
        <Image source={require('./assets/moviesV3.png')} />
      </View>
      <Swiper showsButtons={true}>
        <PersonalInfo screenstyle={styles.screen} data={booking} setData={setBooking} />
        <MovieBooking screenstyle={styles.screen} data={booking} setData={setBooking} />
      </Swiper>
    </View>
  );
}

var width = Dimensions.get('window');

const styles = StyleSheet.create({
  imgview: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 0.5,
    marginTop: "8%",
  },
  screencontainer: {
    flexDirection: "column",
    flex: 1,
    padding: "1%",
    backgroundColor: "lightgrey",
  },
  screen: {
    flex: 1,
    alignItems: "start",
    padding: "10%",
  },
});
