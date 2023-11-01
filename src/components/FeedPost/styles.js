import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    post: {
      backgroundColor: "#fff",
      marginVertical: 5,
    },
    header: {
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 25,
      marginRight: 10,
    },
    name: {
      fontWeight: "500",
    },
    subtitle: {
      color: "gray",
    },
    icon: {
      marginLeft: "auto",
    },
    description: {
      lineHeight: 20,
      padding: 10,
    },
    image: {
      width: "100%",
      aspectRatio: 1,
    },
    footer: {
      paddingHorizontal: 10,
    },
    statsRow: {
      flexDirection: "row",
      borderBottomWidth: StyleSheet.hairlineWidth,
      paddingVertical: 10,
      borderColor: "lightgray",
    },
    likeImageIcon: {
      width: 20,
      height: 20,
      marginRight: 5,
    },
    likeImagedBy: {
      color: "gray",
    },
    shares: {
      color: "gray",
      marginLeft: "auto",
    },
    buttonRow: {
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-around",
    },
    iconButton: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconButtonText: {
      color: "gray",
      marginLeft: 5,
      fontWeight: "500",
    },
  });
  