import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

const CustomHeader = React.memo(({title, onToggleTheme, isDarkMode}) => {
  return (
    <View
      style={[
        styles.headerContainer,
        isDarkMode ? styles.darkHeader : styles.lightHeader,
      ]}>
      <Text style={[styles.headerText, {fontFamily: 'Montserrat-Bold'}]}>
        {title}
      </Text>

      <View style={styles.switchContainer}>
        <Text style={[styles.switchText, {fontFamily: 'Montserrat-Regular'}]}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
          onValueChange={onToggleTheme}
          value={isDarkMode}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    elevation: 3,
    zIndex: 1,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
  darkHeader: {
    backgroundColor: '#121212',
  },
  lightHeader: {
    backgroundColor: '#6200EE',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    color: '#fff',
    marginRight: 8,
  },
});

export default CustomHeader;
