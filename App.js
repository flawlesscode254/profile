import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, ImageBackground } from 'react-native';
import {Ionicons} from "@expo/vector-icons"


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <ImageBackground style={{
            height: 350
          }} source={{ uri: "https://images.unsplash.com/photo-1624669240815-815a23372f37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=651&q=80" }}> 
          </ImageBackground>
        </View>
        <View style={{
          marginHorizontal: 20
        }}>
          <Image style={{
            width: 80,
            height: 80,
            borderRadius: 999,
            marginTop: -40
          }} source={{ uri: "https://images.unsplash.com/photo-1624877815516-9cc0ecea541a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" }} />
          <Text style={{
            fontWeight: "bold",
            letterSpacing: 5,
            fontSize: 20,
            marginTop: 10
          }}>Duncan Kipkemoi</Text>
          <View style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <Ionicons style={{
              marginRight: 20
            }} name="camera-outline" size={24} color="black" />
            <Text style={{
              letterSpacing: 3
            }}>Photographer</Text>
          </View>
          <View style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <Ionicons style={{
              marginRight: 20
            }} name="location-outline" size={24} color="black" />
            <Text style={{
              letterSpacing: 3
            }}>Nairobi, Kenya</Text>
          </View>
          <View style={{
            marginTop: 35,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <View>
              <Text>FOLLOWERS</Text>
              <Text style={{
                fontSize: 25
              }}>624</Text>
            </View>
            <View>
              <Text>FOLLOWING</Text>
              <Text style={{
                fontSize: 25
              }}>142</Text>
            </View>
            <View>
              <Text>POSTS</Text>
              <Text style={{
                fontSize: 25
              }}>240</Text>
            </View>
          </View>
          <View style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <View style={{
              backgroundColor: "black",
              borderRadius: 12,
              paddingHorizontal: 20,
              paddingVertical: 7,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row"
            }}>
              <Text style={{
                color: "#FFF"
              }}>Follow</Text>
            </View>
            <View style={{
              backgroundColor: "black",
              borderRadius: 12,
              paddingHorizontal: 20,
              paddingVertical: 7,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row"
            }}>
              <Text style={{
                color: "#FFF"
              }}>Message</Text>
            </View>
            <View style={{
              backgroundColor: "black",
              borderRadius: 12,
              paddingHorizontal: 20,
              paddingVertical: 7,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row"
            }}>
              <Text style={{
                color: "#FFF"
              }}>Hire</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
