import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
const FirstScreen = () => {
  const [region, setRegion] = useState({
    latitude: 15.299327,
    longitude: 74.124956,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {" "}
         
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>9:41</Text>  
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Image
            source={require("./search_icon.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("./user_icon.png")} style={styles.userIcon} />
        </TouchableOpacity>
      </View>
      <MapView style={styles.map} initialRegion={region}>
        <Marker coordinate={region} title="Goa" />
      </MapView>
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.bottomButton}>
          <Image
            source={require("./location_icon.png")}
            style={styles.bottomButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Z</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Image
            source={require("./marker_icon.png")}
            style={styles.bottomButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Image
            source={require("./notification_icon.png")}
            style={styles.bottomButtonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light gray background
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  userIcon: {
    width: 30,
    height: 30,
  },
  map: {
    flex: 1,
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  bottomButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButtonText: {
    fontSize: 18,
  },
  bottomButtonIcon: {
    width: 20,
    height: 20,
  },
});

export default FirstScreen;
