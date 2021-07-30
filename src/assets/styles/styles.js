
import { StyleSheet, StatusBar } from "react-native";

export const MainBlue = '#22B7ED';

export const SplashStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative'
    },

    image: {
        marginLeft: -100,
        height: '100%',
    },

    loadingDiv: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, .25)',
        alignItems:'center',
        
    },

    loading: {
        width: '30%', 
        height: '100%'
    }
});

export const SignUpStyle = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#ffffff'
    },
    scrollView: {
        backgroundColor: '#ffffff',
        marginHorizontal: 5,
    },

    content: {
        paddingHorizontal: 10,
    },

    title: {
        fontSize: 27,
        color: MainBlue,
        marginTop: 5,
        marginBottom: 15,
        width: '100%',
        textAlign: 'center'
    },

    inputBox: {
        width: '100%',
        backgroundColor: '#ffffff',
        marginVertical: 10,
        fontSize: 15,
    },

    radioTitle: {
        marginTop: 10,
        width: '100%',
        textAlign: 'left',
        fontSize: 15,
        color: MainBlue
    },

    radioView: {
        alignItems: 'flex-start',
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 20
    },

    radioItemTitle: {
        marginTop: 7,
        marginRight: 10,
        fontSize: 15
    },

    categoryTitle: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        textAlign: 'left',
        fontSize: 15,
        color: MainBlue,
        alignItems: 'flex-start'
    },

    seletBoxButton: {
        marginTop: 10,
        borderRadius: 20,
        width: '100%',
        borderWidth: 1,
        borderColor: MainBlue,
        backgroundColor: '#ffffff',
        height: 55
    },

    selectBoxText: {
        textAlign: 'left',
        marginLeft: 15,
        color: '#555',
        fontSize: 15
    },

    dropdownContent: {
        borderRadius: 10,
    },

    socialTitle: {
        marginTop: 30,
        fontSize: 15,
        color: '#757575',
        width: '100%',
        textAlign: 'center'
    },

    socialView: {
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center'
    },

    socialButton: {
        width: 40,
        height: 40,
        padding: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: MainBlue,
        marginVertical: 20,
        marginHorizontal: 10
    },

    submitBtn: {
        height: 40,
        borderRadius: 5,
        backgroundColor: MainBlue,
        color: '#ffffff',
        alignItems: 'center',
        paddingTop: 10,
        marginTop: 10,
        marginBottom: 20
    },

    submitText: {
        fontSize: 15,
        color: '#ffffff',
    },

    hashTagTitile: {
        marginTop: 30,
        fontSize: 15,
        color: '#757575',
        width: '100%',
        textAlign: 'left',
        color: MainBlue
    },

    searchAddView: {
        marginTop: 15,
        marginBottom: 10,
        width: '100%',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between'
    },

    searchInputBox: {
        width: '87%',
        backgroundColor: '#ffffff',
        fontSize: 15,
    },

    plusBtnIcon: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: MainBlue,
        color: '#ffffff',
        alignItems: 'center',
        padding: 10,
        marginTop: 15,
        marginBottom: 20
    },

    recentlyAddText: {
        fontSize: 15,
        color: '#777777',
        fontStyle: 'italic',
        marginBottom: 10
    },

    toggleBtnView: {
        alignItems: 'flex-start',
        flexDirection: "row",
        flexWrap: "wrap",
    },

    toggleBtn: {
        width: 70,
        fontSize: 14,
        borderColor: MainBlue,
        borderWidth: 1,
        borderRadius: 50,
        height: 30,
        marginRight: 10
    }, 

    toggleBtnSelect: {
        width: 70,
        fontSize: 14,
        borderColor: MainBlue,
        borderWidth: 1,
        borderRadius: 50,
        height: 30,
        backgroundColor: MainBlue,
        marginRight: 10
    },

    notificationTitle: {
        fontSize: 15,
        color: MainBlue,
        marginTop: 20
    }

});

export const LandingStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#ffffff'
    },
    scrollView: {
        backgroundColor: '#ffffff',
        marginHorizontal: 5,
        paddingHorizontal: 15,
    },
    content: {
        paddingBottom: 20
    },

    topNavView: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        marginTop: -20
    },

    topNavBtnLabel: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000'
    },

    topNavText: {
        fontSize: 20,
        fontWeight: 'bold',
        
    },

    selectTagView: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: -5
    },

    seletBoxButton: {
        marginTop: 10,
        marginHorizontal: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: MainBlue,
        backgroundColor: '#ffffff',
        width: "47%"
    },

    selectBoxText: {
        textAlign: 'left',
        marginLeft: 15,
        color: '#555',
        fontSize: 15,
        color: MainBlue
    },

    dropdownContent: {
        borderRadius: 10,
    },

    dropdownRowText: {
        color: MainBlue
    },

    
});
