import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

//CUANDO QUEREMOS RENDERIZAR IMAGENES QUE VIENEN DESDE ARCHIVO TENEMOS QUE IMPORTARLA CON EL REQUIRE
const placeholderImg = require('../assets/images/placeholder.png');

//CON PROP-TYPES VERIFICAMOS EL TIPO DE DATO QUE SE ESTA ENVIANDO (SIMIL A TYPESCRIPT)
const propTypes = {
  item: PropTypes.object,
};

class Card extends React.PureComponent {
  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.movieImage}
          source={
            item.poster_path
              ? { uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path }
              : placeholderImg
          }
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
  },
  movieImage: {
    height: 200,
    width: 120,
    borderRadius: 5,
  },
});
Card.propTypes = propTypes;
export default Card;
