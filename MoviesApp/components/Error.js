import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  errorText1: PropTypes.string,
  errorText2: PropTypes.string,
};

const defaultProps = {
  errorText1: 'Oops! It seems that something got broken.',
  errorText2: 'Make sure you are online and restart the Application',
};

class Error extends React.PureComponent {
  render() {
    const { errorText1, errorText2 } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{errorText1}</Text>
        <Text style={styles.text}>{errorText2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '900',
  },
});

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;
export default Error;
