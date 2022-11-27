import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    img24: {
        height: 24,
        width: 24
    },
    img28: {
        height: 28,
        width: 28
    },
    img32:{
        height: 50,
        width: 50
    },
    appBar_img: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "white",
        height: 36,
        width: 36
    },
    search: {
        padding: 15,
    },
    search_title: {
        fontSize: 30,
        fontWeight: "700",
        color: "black",
    },
    search_view: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    search_view_bar: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 3,
        borderRadius: 20,
        width: "80%"
    },
    search_view_bar_icon: {
        height: 28,
        width: 28,
        alignSelf: "center",
        marginLeft:5,
    },
    search_view_filter: {
        height: 50,
        width: "20%",
        marginLeft:5,
        backgroundColor: "white",
        borderRadius: 20,
        justifyContent:"center"
    }
})