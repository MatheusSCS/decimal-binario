import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import { Button } from 'react-native-elements';


export default function App() { 

  const [data, setData] = useState('');
  const [isSelected, setSelected] = useState(false);
  const [isSelected1, setSelected1] = useState(false);
  const [isSelected2, setSelected2] = useState(false);
  const [isSelected3, setSelected3] = useState(false);
  const [isSelected4, setSelected4] = useState(false);
  const [isSelected5, setSelected5] = useState(false);

  function circuloVazio(){
    return(
      <TouchableOpacity style={styles.circuloVaio}>                
      </TouchableOpacity>
    );
  }

  function circuloPreenchido(){
    return(
      <TouchableOpacity style={styles.circuloPreenchido}>                
      </TouchableOpacity>
    );
  }

  function mostrarDecimal(text: string) {

    console.log(text);

    var decimalNumber = parseInt(text); 
    
    var binario = (decimalNumber >>> 0).toString(2); 

    console.log(binario);

    var binarioInv = binario.split('').reverse().join('');
      
    console.log(binarioInv);

    binarioInv.charAt(0) == '1' ? setSelected5(true) : setSelected5(false);
    binarioInv.charAt(1) == '1' ? setSelected4(true) : setSelected4(false);
    binarioInv.charAt(2) == '1' ? setSelected3(true) : setSelected3(false);
    binarioInv.charAt(3) == '1' ? setSelected2(true) : setSelected2(false);
    binarioInv.charAt(4) == '1' ? setSelected1(true) : setSelected1(false);
    binarioInv.charAt(5) == '1' ? setSelected(true) : setSelected(false);
  }

  return (
    
    <View style={styles.container}>
   
      <View style={styles.row}>
          {isSelected == false ? circuloVazio() : circuloPreenchido() }          
          {isSelected1 == false ? circuloVazio() : circuloPreenchido() }
          {isSelected2 == false ? circuloVazio() : circuloPreenchido() }
          {isSelected3 == false ? circuloVazio() : circuloPreenchido() }
          {isSelected4 == false ? circuloVazio() : circuloPreenchido() }
          {isSelected5 == false ? circuloVazio() : circuloPreenchido() }
      </View>

       <TextInput 
        style={styles.searchBar}
        placeholder="Informe um decimal"     
        value={data}
        keyboardType = 'numeric'
        onChangeText={(text) => {      
           setData(text);
           mostrarDecimal(text);       
        }}              
         
      /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    position: 'absolute',
    paddingLeft: 24,
    width: '50%',
    height: 56,
    borderRadius: 28,
    backgroundColor: 'white',
    color: "#0089a5",

    elevation: 3,
  },
  circuloVaio:{
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    borderColor: '#000000',
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    backgroundColor:'#ffffff',   
    top : -120,    
    marginRight: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circuloPreenchido:{
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    borderColor: '#000000',
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    backgroundColor:'#1000f7',   
    top : -120,    
    marginRight: '5%', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 40,
    color: "#52665A",
  },
  row: {
    flexDirection: 'row',
  },
});
