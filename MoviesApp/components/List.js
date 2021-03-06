import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};
class List extends React.PureComponent {
  render() {
    const { title, content, navigation } = this.props;
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          {/* CON LAS FLATLIST PODEMOS HACER LISTAS EN REACT NATIVE */}
          <FlatList
            data={content}
            horizontal={true}
            renderItem={({ item }) => (
              <Card navigation={navigation} item={item} />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  list: {
    marginTop: 25,
  },
});
List.propTypes = propTypes;
export default List;
