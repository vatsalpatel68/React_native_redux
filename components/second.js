import React , {useState} from 'react';
import { View  , Text , Button , TextInput } from 'react-native';
import { connect } from 'react-redux';

const Second = (props) => {
    const [choice , setChoice] = useState("");

    const submitToStore = () => {
       
        props.setCount(choice);
        setChoice('');
    }
    const setInput = (text) =>{
        setChoice(text);
    }
    return(
        <View style = {{ hight : 100  , width : "100%", justifyContent : 'center' , alignItems : 'center'}}>
            <Text>Add data component</Text>
            <TextInput keyboardType = "number-pad"  style={{ height: 40 , width : 100 , borderColor: 'gray', borderWidth: 1 }} value = {choice} onChangeText = {setInput}/> 
            <View style = {{margin : 10}}><Button title="Add" onPress = {() => submitToStore()} /></View>
            <Text>props : {props.count}</Text>
        </View>
    )
}


const mapStateToProps = (state) => {
    return {
        count : state.DATAS.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCount : (data) => dispatch({ type : "ADD" , payload : data}) 
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Second);