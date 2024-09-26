import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import globalStyles from '../../Globals/globalStyles';

const UserCard = ({user}) => {
  const {firstName, lastName, age, gender, image, email, address} = user;
  const fullAddress = `${address.address}, ${address.city}, ${address.state}, ${address.postalCode}`;

  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={globalStyles.titleText}>
          {firstName} {lastName}
        </Text>
        <Text style={globalStyles.subtitleText}>Age: {age}</Text>
        <Text style={styles.genderText}>Gender: {gender}</Text>
        <Text style={styles.emailText}>Email: {email}</Text>
        <Text style={styles.addressText}>{fullAddress}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  genderText: {
    fontSize: 16,
    color: '#555',
  },
  emailText: {
    fontSize: 16,
    color: '#007BFF',
  },
  addressText: {
    fontSize: 14,
    color: '#777',
  },
});

export default UserCard;
