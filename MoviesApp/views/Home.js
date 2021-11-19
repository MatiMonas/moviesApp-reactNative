import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { getData } from '../Utils/functions';
import { SliderBox } from 'react-native-image-slider-box';
import { List, Error } from '../components/';

const dimentions = Dimensions.get('screen');

const Home = ({ navigation }) => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaries, setDocumentaries] = useState();

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTvMoviesData,
          familyMoviesData,
          documentaryMoviesData,
        ]) => {
          const moviesImagesArray = [];
          upcomingMoviesData.forEach(movie => {
            moviesImagesArray.push(
              `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            );
          });
          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvMoviesData);
          setFamilyMovies(familyMoviesData);
          setDocumentaries(documentaryMoviesData);
        },
      )
      .catch(() => setError(true))
      .finally(() => setLoaded(true));
  }, []);

  return (
    <>
      {/* PARA PODER SCROLLEAR NECESITO AGREGAR EL SCROLL VIEW */}
      {loaded && !error && (
        <ScrollView>
          {moviesImages && (
            <View style={styles.sliderContainer}>
              {/* AGREGAR SLIDERS A REACT NATIVE CON SLIDER BOX */}
              <SliderBox
                dotStyle={styles.sliderStyle}
                autoplay={true}
                circleLoop={true}
                sliderBoxHeight={dimentions.height / 1.5}
                images={moviesImages}
              />
            </View>
          )}

          {/* Popular Movies */}

          {popularMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular movies"
                content={popularMovies}
              />
            </View>
          )}

          {/* Popular Tv  */}
          {popularTv && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular on TV"
                content={popularTv}
              />
            </View>
          )}
          {/* Family Movies */}
          {familyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Family movies"
                content={familyMovies}
              />
            </View>
          )}

          {/* Documentaries */}
          {documentaries && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Documentaries"
                content={documentaries}
              />
            </View>
          )}
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" color="#ff0000" />}
      {error && <Error />}
    </>
  );
};

//Como dar estilos con React Native
const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  sliderStyle: {
    height: 0,
  },
});

export default Home;
