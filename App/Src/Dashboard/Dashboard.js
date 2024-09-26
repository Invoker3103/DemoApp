//main file
import React, {useEffect, useState, useRef} from 'react';
import {
  FlatList,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import UserCard from '../../CustomComponents/CustomUserListTab/UserCard';
import SearchBar from '../../CustomComponents/SearchBar/SearchBar';
import CustomHeader from '../../CustomComponents/CustomHeader/CustomHeader';
import globalStyles from '../../Globals/globalStyles';
import {getUsers} from '../../Services/api';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const flatListRef = useRef(null); // Reference for FlatList

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userList = await getUsers();
        const sortedUsers = userList.sort((a, b) => {
          if (a.gender === 'female' && b.gender !== 'female') return -1;
          if (a.gender !== 'female' && b.gender === 'female') return 1;
          return a.age - b.age;
        });

        setUsers(sortedUsers);
        setFilteredUsers(sortedUsers);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = text => {
    setSearchText(text);

    if (text) {
      const filtered = users.filter(
        user =>
          user.firstName.toLowerCase().includes(text.toLowerCase()) ||
          user.email.toLowerCase().includes(text.toLowerCase()) ||
          user.address.address.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredUsers(filtered.length ? filtered : []);
    } else {
      setFilteredUsers(users);
    }
  };

  const clearSearch = () => {
    setSearchText('');
    setFilteredUsers(users);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        isDarkMode ? styles.darkContainer : styles.lightContainer,
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#121212' : '#6200EE'}
      />

      <CustomHeader
        title="User Dashboard"
        onToggleTheme={handleThemeToggle}
        isDarkMode={isDarkMode}
      />

      <View style={[globalStyles.container, {paddingTop: 80}]}>
        <SearchBar
          searchText={searchText}
          onSearchChange={setSearchText}
          onClear={clearSearch}
          onEndSearch={handleSearch}
        />

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        ) : filteredUsers.length > 0 ? (
          <FlatList
            ref={flatListRef}
            data={filteredUsers}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <UserCard user={item} />}
            contentContainerStyle={{paddingBottom: 100}}
          />
        ) : (
          <Text style={globalStyles.noResultsText}>No users found.</Text>
        )}

        <TouchableOpacity style={styles.scrollButton} onPress={scrollToTop}>
          <Text style={styles.scrollButtonText}>Scroll to Top</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  scrollButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 50,
    elevation: 5,
  },
  scrollButtonText: {
    color: '#fff',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 1,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#000',
  },
});

export default Dashboard;
