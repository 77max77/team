import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Text } from 'react-native';

const ComplaintPage = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleAddPhoto = () => {
    setPhotos(prevPhotos => [...prevPhotos, 'https://via.placeholder.com/150']);
  };

  const handleSubmit = () => {
    console.log('민원을 서버로 전송합니다.');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Image source={require('./png/earth.png')} style={styles.icon} />
          <TextInput
            style={[styles.input, { borderColor: '#D9D9D9' }]}
            placeholder="제목"
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.inputRow}>
          <Image source={require('./png/place.png')} style={styles.icon2} />
          <Text >주소</Text>
          <TextInput
            style={[styles.input, { borderColor: '#D9D9D9' }]}
            placeholder="장소 (세부적으로 적어주세요)"
            value={location}
            onChangeText={setLocation}
          />
        </View>
        <View style={styles.inputRow}>
          <Image source={require('./png/date.png')} style={styles.icon2} />
          <Text >날짜</Text>
          <TextInput
            style={[styles.input, { borderColor: '#D9D9D9' }]}
            placeholder="민원 날짜"
            value={date}
            onChangeText={setDate}
          />
        </View>
        <TextInput
          style={[styles.contentInput, { borderColor: '#D9D9D9' }]}
          placeholder="내용을 설명해주세요."
          value={content}
          onChangeText={setContent}
          multiline
        />
        <View style={styles.photoContainer}>
          {photos.map((photo, index) => (
            <Image
              key={index}
              source={{ uri: photo }}
              style={styles.photo}
            />
          ))}
        </View>
        {photos.length < 4 && <TouchableOpacity style={styles.button} onPress={handleAddPhoto}>
        <Text style={styles.buttonText}>사진 추가</Text>
        </TouchableOpacity>} 
        <View style={styles.disclaimer}>
          <Image source={require('./png/rightEye.png')} style={styles.disclaimerIcon} />
          <Text style={styles.disclaimerText}>
            확인 후 허위 사실일 경우 형사처벌이 있을 수 있습니다.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>민원 등록</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    height: 35,
    borderWidth: 1,
    marginLeft:20,
    marginTop:5,
    marginBottom: 10,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
  },
  contentInput: {
    height: 220,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  photoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  icon: {
    width: 33,
    height: 32,
    marginLeft:20
  },
  icon2: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  disclaimer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  disclaimerIcon: {
    width: 34,
    height: 26,
    marginRight: 10,
  },
  disclaimerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
  },
  button: {
   
    height: 44,
    backgroundColor: '#66E700',
    padding: 10,
    margin: 10,
    borderRadius: 15, // 버튼의 모서리를 둥글게 만듭니다.
    justifyContent: 'center', // 내부 요소를 가운데 정렬합니다.
    alignItems: 'center', // 내부 요소를 가운데 정렬합니다.
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },
  
});

export default ComplaintPage;
