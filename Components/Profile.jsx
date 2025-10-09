import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';

export default function Profile() {
  const fields = [
    {label: 'Username', placeholder: 'Emma Watson'},
    {label: 'First name', placeholder: 'Emma'},
    {label: 'Last name', placeholder: 'Watson'},
    {label: 'Date of Birth', placeholder: '25-25-2020'},
    {label: 'Roll No', placeholder: '1125'},
    {label: 'Registration No', placeholder: '123456'},
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.upperProfile}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../assets/backarrow.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Text style={styles.headerText}>Profile</Text>

          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../assets/Questionmark.png')}
              style={styles.helpIcon}
            />
          </TouchableOpacity>
        </View>

        <ImageBackground
          source={require('../assets/profileimg.png')}
          resizeMode="contain"
          style={styles.profileImg}
        />

        <Text style={styles.userName}>Shahzar Raza</Text>
      </View>

      {/* Profile Fields */}
      <ScrollView style={styles.lowerProfile}>
        {fields.map((field, index) => (
          <View key={index} style={styles.fieldWrapper}>
            <Text style={styles.label}>{field.label}</Text>
            <TextInput
              style={styles.input}
              placeholder={field.placeholder}
              placeholderTextColor="#AE2327"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upperProfile: {
    height: 200,
    backgroundColor: '#AE2327',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: 'center',
    paddingTop: 10,
  },
  headerRow: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    padding: 5,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  helpIcon: {
    width: 25,
    height: 25,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  profileImg: {
    height: 90,
    width: 90,
    borderRadius: 45,
    marginVertical: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  lowerProfile: {
    flex: 1,
    width: '90%',
    marginLeft: '5%',
    marginTop: '8%',
  },
  fieldWrapper: {
    marginBottom: 15,
  },
  label: {
    color: '#000',
    marginBottom: 6,
    fontSize: 14,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    fontSize: 14,
    paddingVertical: 4,
  },
});
