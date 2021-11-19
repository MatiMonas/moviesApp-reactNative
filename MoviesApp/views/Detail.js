import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  ActivityIndicator,
  View,
} from 'react-native';
import { getMovieDetails } from '../Utils/functions';

const placeholderImg = require('../assets/images/placeholder.png');
const height = Dimensions.get('screen').height;

const Detail = ({ route, navigation }) => {
  const movieId = route.params.movieId;
  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovieDetails(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);
  return (
    <>
      {loaded && (
        <ScrollView>
          <Image
            resizeMode="cover"
            style={styles.movieImage}
            source={
              movieDetail.poster_path
                ? {
                    uri:
                      'https://image.tmdb.org/t/p/w500' +
                      movieDetail.poster_path,
                  }
                : placeholderImg
            }
          />
          <View style={styles.container}>
            <Text style={styles.movieTitle}>{movieDetail.title}</Text>
            {movieDetail.genres && (
              <View>
                {movieDetail.genres.map(genre => {
                  return (
                    <Text key={genre.id} style={styles.genre}>
                      {genre.name}
                    </Text>
                  );
                })}
              </View>
            )}
          </View>
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" color="#ff0000" />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieImage: {
    height: height / 2,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 10,
  },
});

export default Detail;
