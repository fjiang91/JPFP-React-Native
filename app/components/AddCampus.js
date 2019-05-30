import React from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../reducers/Campus';
import { TextInput, View, Button, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});

class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      address: '',
      description: '',
      validateNewCampus: true
    };
  }

  validateForm = () => {
    if (this.state.name.length && this.state.imageUrl.length && this.state.address.length && this.state.description.length) {
      this.setState({validateNewCampus: false})
    } else {
      this.setState({validateNewCampus: true})
    }
  };

  handleNameInput = name => {
    this.setState({ name }, this.validateForm);
  };

  handleAddressInput = address => {
    this.setState({ address }, this.validateForm);
  };

  handleDescriptionInput = description => {
    this.setState({ description }, this.validateForm);
  };

  handleImageUrlInput = imageUrl => {
    this.setState({ imageUrl }, this.validateForm);
  };

  handleSubmit = () => {
    this.props.addCampus(this.state);
    this.setState({
        name: '',
        imageUrl: '',
        address: '',
        description: '',
        validateNewCampus: true
    });
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Campus Name"
          value={this.state.name}
          onChangeText={this.handleNameInput}
          style={style.input}
        />
        <TextInput
          placeholder="Address"
          value={this.state.address}
          onChangeText={this.handleAddressInput}
          style={style.input}
        />
        <TextInput
          placeholder="Description"
          value={this.state.description}
          onChangeText={this.handleDescriptionInput}
          style={style.input}
        />
        <TextInput
          placeholder="Campus Image Url"
          value={this.state.imageUrl}
          onChangeText={this.handleImageUrlInput}
          style={style.input}
        />
        <Button title="Add Campus" style={style.input} onPress={this.handleSubmit}
        disabled={this.state.validateNewCampus} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampus(campus))
  }
}

export default connect(null, mapDispatchToProps)(AddCampus);
