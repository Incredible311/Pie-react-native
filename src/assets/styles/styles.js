
import { StyleSheet, StatusBar, Dimensions } from "react-native";

export const MainBlue = '#22B7ED';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ContainerStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#ffffff'
    },
    scrollView: {
        backgroundColor: '#ffffff',
        marginHorizontal: 5,
        paddingHorizontal: 10,
    },
    content: {
        paddingBottom: 20,
        minHeight: windowHeight - 50
    }
})

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
        alignItems: 'center',

    },

    loading: {
        width: '30%',
        height: '100%'
    }
});

export const SignUpStyle = StyleSheet.create({

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

export const ContentViewStyle = StyleSheet.create({

    backgroundVideo: {
        aspectRatio: 1.7,
        width: '100%',
        marginTop: 20
    },

    videoTagSubView: {
        marginTop: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
    },

    videoRankView: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        marginVertical: 5
    },

    postDateText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 5
    },

    viewNumText: {
        fontSize: 13,
        marginLeft: 5
    },

})

export const UserViewStyle = StyleSheet.create({
    
    subTitleText: {
        fontSize: 20,
        color: '#22B7ED',
    },

    subContentView: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },

    subContentLeftView: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center'
    },

    subContentIcon: {
        width: 35,
        height: 35,
        borderRadius: 100,
        marginRight: 10
    },

    subContentLeftText: {
        fontSize: 14
    },

    subContentRightText: {
        fontSize: 16
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

})

export const InfluencerStyle = StyleSheet.create({

    InfluencerTitle: {
        fontSize: 18,
        marginVertical: 10,
    },

    timeSlotView: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 10,
    },

    rateNum: {
        fontSize: 16,
        color: MainBlue,
        fontStyle: 'italic'
    },

    callTypeView: {
        marginTop: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },

    callTypeText: {
        marginTop: 40,
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

    toggleBtn: {
        width: 70,
        fontSize: 17,
        borderColor: MainBlue,
        borderWidth: 1,
        borderRadius: 50,
        height: 35,
        width: 90,
        marginRight: 10
    },

    toggleBtnSelect: {
        width: 70,
        fontSize: 17,
        borderColor: MainBlue,
        borderWidth: 1,
        borderRadius: 50,
        height: 35,
        width: 90,
        backgroundColor: MainBlue,
        marginRight: 10
    },
})

export const UserFeedStyle = StyleSheet.create({

    feedView: {
        flexDirection: "row",
        alignItems: 'flex-start',
        width: '100%',
        justifyContent: 'flex-start',
        marginVertical: 10
    },

    feedText: {
        marginLeft: 15,
        fontSize: 17,
        lineHeight: 30
    }
})

export const QuestionsStyle = StyleSheet.create({
    questionView: {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'flex-start',
        marginVertical: 15
    },

    questionNum: {
        fontSize: 17,
        fontWeight: 'bold',
        color: MainBlue
    },

    questionText: {
        marginLeft: 15,
        fontSize: 16,
        lineHeight: 25
    }
})

export const ScorecardStyle = StyleSheet.create({
    
    scoreview: {
        marginVertical: 20
    },

    scorelist: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginVertical: 5
    },

    scoretext: {
        fontSize: 16
    },

    scorenum: {
        fontSize: 15,
        color: MainBlue,
        borderWidth: 1,
        borderColor: MainBlue,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 3
    }
})

export const ScheduleStyle = StyleSheet.create({
    scheduleTitleView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 15
    },

    scheduleTitleText: {
        fontSize: 15
    },

    scheduleTitleDate: {
        fontSize: 15,
        fontStyle: 'italic'
    },

    scheduleTitleMonth: {
        fontSize: 16
    },

    scheduleTimeView: {
        flexDirection: "row",
        alignItems: 'center',
        marginVertical: 5
    },

    scheduleTime: {
        fontSize: 15,
        color: MainBlue,
        borderRadius: 5,
        borderColor: MainBlue,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginRight: 10
    },
    scheduleTimeContent: {
        fontSize: 12
    },
    liveShowView: {
        textAlign: 'center',
        alignSelf:'center',
        alignItems: 'center',
        width: 110,
        marginHorizontal: 10
    }
})