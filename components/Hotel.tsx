import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type HotelProps = {
  item: {
    id: string;
    name: string;
    adress?: string;
    smalladress?: string;
    cuisines: string | string[];
    aggregate_rating: string | number;
    featured_image: string;
    time: string;
    description?: string;
    average_cost_for_two?: number;
    longitude?: number;
    latitude?: number;
  };
  
  menu?: { name: string; price: number }[];
};

const Hotel = ({ item, menu }: HotelProps) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/hotel",
          params: {
            id: item.id,
            name: item.name,
            adress: item.adress,
            description: item.description,
            smalladress: item.smalladress,
            cuisines: Array.isArray(item.cuisines)
              ? item.cuisines.join(", ")
              : item.cuisines,
            aggregate_rating: item.aggregate_rating.toString(),
            menu: menu ? JSON.stringify(menu) : "",
          },
        })
      }
      style={{
        marginHorizontal: 6,
        marginVertical: 12,
        borderRadius: 20,
        backgroundColor: "white",
        
        
        
        
        elevation: 5, 
      }}
    >
      <Image
        style={{
          width: "100%",
          aspectRatio: 6 / 4,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        source={{ uri: item.featured_image }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              paddingHorizontal: 10,
              marginTop: 10,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            {item.name}
          </Text>
          {item.description && (
            <Text
              style={{
                paddingHorizontal: 10,
                marginTop: 3,
                fontSize: 15,
                fontWeight: "500",
                color: "gray",
              }}
            >
              {item?.description}
            </Text>
          )}
          <Text
            style={{
              paddingHorizontal: 10,
              marginTop: 3,
              fontSize: 14,
              fontWeight: "500",
              color: "#505050",
            }}
          >
            {item.time}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#006A4E",
            borderRadius: 4,
            paddingHorizontal: 4,
            paddingVertical: 5,
            marginRight: 10,
            gap: 3,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            {item.aggregate_rating}
          </Text>
          <Ionicons name="star" size={15} color="white" />
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: "#C8C8C8",
          marginHorizontal: 10,
          marginVertical: 4,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          marginHorizontal: 8,
          marginVertical: 5,
        }}
      >
        <MaterialCommunityIcons
          name="brightness-percent"
          size={24}
          color="#1F75FE"
        />
        <Text style={{ marginLeft: 2, color: "#1F75FE", fontWeight: "500" }}>
          20% OFF up to Rs 100
        </Text>
      </View>
    </Pressable>
  );
};

export default Hotel;

const styles = StyleSheet.create({});
