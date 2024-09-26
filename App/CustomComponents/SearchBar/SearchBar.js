import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import globalStyles from '../../Globals/globalStyles';

const SearchBar = ({searchText, onSearchChange, onClear, onEndSearch}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name, email, or address"
        onChangeText={onSearchChange}
        value={searchText}
        onEndEditing={() => onEndSearch(searchText)}
      />
      {searchText.length > 0 && (
        <TouchableOpacity onPress={onClear} style={styles.clearButton}>
          <Text style={globalStyles.clearButtonText}>✖</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#6200EE',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#333',
  },
  clearButton: {
    marginLeft: 10,
    padding: 5,
  },
});

export default SearchBar;
