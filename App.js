import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View,Button,ScrollView } from 'react-native';
import style from './style'

export default function App() {
  return (
    <ScrollView>
    <View>
      <View style={{backgroundColor:'black'}}>
        <Text style={{fontWeight:'bold',fontSize:25,color:'#1e90ff',textAlign:'center',marginTop:16}}>I'm Saish Sawant</Text>
        <Text style={{fontWeight:'bold',fontSize:12,textAlign:'center',color:'white'}}>Thriving to be software developer</Text>
      </View>

      <StatusBar style="auto" />

        <View style={{justifyContent:'flex-start'}}>
          <Text style={{fontWeight:'bold',fontSize:25,color:'#1e90ff',marginLeft:3,textAlign:'center'}}>Skills</Text>
          <Button style={{fontWeight:'bold',fontSize:14,color:'white',borderColor:'white'}} title='HTML'></Button>
          <Button style={{fontWeight:'bold',fontSize:14,color:'white',borderColor:'white'}} title='CSS'></Button>
          <Button style={{fontWeight:'bold',fontSize:14,color:'white',borderColor:'white'}} title='React'></Button>
          <Button style={{fontWeight:'bold',fontSize:14,color:'white',borderColor:'white'}} title='Bootstrap'></Button>
        </View>

        <View style={{justifyContent:'flex-start'}}>
          <Text style={{fontWeight:'bold',fontSize:25,color:'#1e90ff',marginLeft:3,textAlign:'center'}}>Strengths</Text>
          <Button style={{fontWeight:'bold',fontSize:14,color:'white',borderColor:'white'}} title='Polite'></Button>
          <Button style={{fontWeight:'bold',fontSize:14,color:'white',borderColor:'white'}} title='Patience'></Button>
          <Button style={{fontWeight:'bold',fontSize:14,color:'white',borderColor:'white'}} title='Hardworker'></Button>
          <Button style={{fontWeight:'bold',fontSize:14,color:'white',borderColor:'white'}} title='Bootstrap'></Button>
        </View>

        <View style={{justifyContent:'flex-start'}}>
          <Text style={{marginTop:15,fontWeight:'bold',fontSize:25,color:'#1e90ff',textAlign:'center'}}>Education</Text>
          
          
          <View style={{backgroundColor:'#1e90ff',borderBlockColor:'white',borderBottomWidth:2}}> 
            <Text style={{fontSize:20,fontWeight:'900',marginLeft:5,color:'white'}}>Master's in Computer Applications</Text>
            <Text style={{fontSize:18,fontWeight:'800',marginLeft:5,color:'yellow'}}>Goa University</Text>
            <Text style={{fontSize:15,fontWeight:'600',marginLeft:5,color:'white'}}>2022-Present</Text>
          </View>

          <View style={{backgroundColor:'#1e90ff', borderBlockColor:'white',borderBottomWidth:2}}>
            
            <Text style={{fontSize:20,fontWeight:'900',marginLeft:5,color:'white'}}>Bachelor's in Computer Applications</Text>
            <Text style={{fontSize:18,fontWeight:'800',marginLeft:5,color:'yellow'}}>Fr.Agnel College Of Arts & Commerce</Text>
            <Text style={{fontSize:15,fontWeight:'600',marginLeft:5,color:'white'}}>2019-2022</Text>
          </View>

          <View style={{backgroundColor:'#1e90ff',borderBlockColor:'white',borderBottomWidth:2}}>
            
            <Text style={{fontSize:20,fontWeight:'900',marginLeft:5,color:'white'}}>HSSC (Commerce)</Text>
            <Text style={{fontSize:18,fontWeight:'800',marginLeft:5,color:'yellow'}}>Deepvihar Higher Secondary</Text>
            <Text style={{fontSize:15,fontWeight:'600',marginLeft:5,color:'white'}}>2018-2019</Text>
          </View>

          <View style={{backgroundColor:'#1e90ff'}}>
            
            <Text style={{fontSize:20,fontWeight:'900',marginLeft:5,color:'white'}}>SSC</Text>
            <Text style={{fontSize:18,fontWeight:'800',marginLeft:5,color:'yellow'}}>Vaddem Nagar English High School</Text>
            <Text style={{fontSize:15,fontWeight:'600',marginLeft:5,color:'white'}}>2016-2017</Text>
          </View>

        </View>

        <View>
            <Text style={{marginTop:15,fontWeight:'bold',fontSize:25,color:'#1e90ff',textAlign:'center'}}>Projects</Text>
          <View style={{backgroundColor:'#1e90ff',borderBlockColor:'white',borderBottomWidth:2}}> 
            <Text style={{fontSize:20,fontWeight:'900',marginLeft:5,color:'white'}}>Cubicle Booking System</Text>
          </View>

          <View style={{backgroundColor:'#1e90ff',borderBlockColor:'white',borderBottomWidth:2}}> 
            <Text style={{fontSize:20,fontWeight:'900',marginLeft:5,color:'white'}}>Hulu Clone</Text>
          </View>

          <View style={{backgroundColor:'#1e90ff',borderBlockColor:'white',borderBottomWidth:2}}> 
            <Text style={{fontSize:20,fontWeight:'900',marginLeft:5,color:'white'}}>Portfolio</Text>
          </View>

        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
