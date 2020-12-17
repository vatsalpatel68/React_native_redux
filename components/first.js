import React, {useCallback} from 'react';
import { useState } from 'react';
import { View  , Text , Button , TextInput , StyleSheet ,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux';

const First = (props) => {

    const [value, onChangeText] = React.useState('');


    const addTODO = useCallback(() =>{
        if(value == '')
            return
        props.addToDo(value , Math.random());
        onChangeText('');
    })


    const deleteItem = (obj) => {
        props.deleteToDO(obj.id); 
    }

    return(
        <View style = {{ flex : 1 , margin : 10}}>
        <View style = {{ hight : 100  , width : "100%", justifyContent : 'center' , alignItems : 'center'}}>
        <TextInput
            style={{ height: 40, width : 250 , borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder = "Please enter the data."
        />
        <View style = {{ flexDirection : 'row' , padding : 5 , width :  '50%' , justifyContent :'space-around'}}>
            <Button title="Add !" onPress = {() => {addTODO()}}/>
            <Button title="click!" onPress = {() => props.navigation.navigate('second')}/>
        </View>
        </View>
        <View style = {{ flex : 1}}>
            
            <ScrollView>
            {props.todos.map(once => {
                return <TouchableOpacity onPress = {() => deleteItem(once)} key={once.id}><View style = {styles.listItems} ><Text>{once.data}</Text></View></TouchableOpacity>
            })}
            </ScrollView>
            
        </View>
        </View>
    )
}


const mapStateToProps = (state) => {
    return {
        todos : state.TODO
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo : (data , id) => dispatch({ type : "ADDTODO" , payload : {
            data : data,
            id : id
        }}),

        deleteToDO : (id) => dispatch({ type : "DELETETODO" , payload : {
            id : id
        }})
    }
}


const styles = StyleSheet.create({
    listItems : {
        width : '90%',
        padding : 10,
        borderWidth : 1,
        marginHorizontal : "5%",
        marginTop : 5
        
    }
})
export default connect(mapStateToProps , mapDispatchToProps)(First);