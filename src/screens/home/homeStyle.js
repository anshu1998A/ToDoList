import { StyleSheet } from 'react-native';

export default homeStyle = StyleSheet.create({
    homeView: {
        flex: 1,
    },
    addDataText: {
        color: 'black',
        fontSize: 20,
    },
    addButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 30
    },
    logOutView: {
        alignContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'orange',
        borderRadius: 4,
        margin: 10,
        justifyContent: 'center',
        width: 150,
        height: 40,
        alignSelf: 'flex-end'
    },
    logOutText: {
        fontSize: 20,
        fontWeight: '700',
        color: 'orange'
    },
    detailsMain: {
        backgroundColor: '#c9c8c5',
        borderRadius: 9,
        marginVertical: 20,
        borderColor: 'orange',
        borderWidth: 1,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        shadowColor: 'orange',
        shadowOpacity: 1
    },
    editMainView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 20,
        shadowColor: 'grey',
        shadowOpacity: 1
    },
    deleteButton: {
        height: 40,
        width: 40,
        marginRight: 10,
        borderRadius: 20,
        marginTop: 10
    },
    editTextView: {
        backgroundColor: 'white',
        height: 25,
        width: 40,
        marginTop: 20,
        marginBottom: 10,
        paddingBottom: 10,
    },
    editText: {
        height: 40,
        fontSize: 20,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})