import React from 'react';
import ItemList from './ItemList';
import NewItemForm from './NewItemForm';
import ItemDetail from "./ItemDetail";
import EditItemForm from "./EditItemForm";


class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      selectedItem: null,
      editing: false,
    };
  }

  handleClick = () => {
    if(this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else{
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleDeleteItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    });
  }

  // handleAddQuantityClick = (itemToAddQuantity) => {
  //   // const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
  //   // console.log(selectedItem.quantity);
  //   // console.log(selectedItemQuantity);
  //   // this.setState({currentQuantity: selectedItemQuantity});

  // //   const newQuantity = (parseInt(itemToAddQuantity.quantity) + 1);
  // //   parseInt(itemToAddQuantity.quantity) = newQuantity;
  // //   const editedMainItemList = this.state.mainItemList.filter(item => item.id !== this.state.selectedItem.id).concat(itemToAddQuantity.quantity.toString());
  // //   this.setState({
  // //     mainItemList: editedMainItemList,
  // //     editing: false,
  // //     selectedItem: null
  // //   });
  // // } 

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({mainItemList: newMainItemList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList.filter(item => item.id !== this.state.selectedItem.id).concat(itemToEdit);
    this.setState({
      mainItemList: editedMainItemList,
      editing: false,
      selectedItem: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonStyle = null;

    if (this.state.editing){
      currentlyVisibleState = <EditItemForm item = {this.state.selectedItem} onEditItem = {this.handleEditingItemInList} />
      buttonText = "Return to Item List";
      buttonStyle = "btn btn-warning mt-2";
    } else if(this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail item = {this.state.selectedItem} onClickingDelete = {this.handleDeleteItem} onClickingEdit = {this.handleEditClick} onClickingAddQuantity = {this.handleAddQuantityClick}/>
      buttonText = "Return to Item List";
      buttonStyle = "btn btn-warning mt-2";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "Return to Item List";
      buttonStyle = "btn btn-danger";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.mainItemList} onItemSelection={this.handleChangingSelectedItem}/>;
      buttonText = "Add a new item!";
      buttonStyle = "btn btn-info mt-2";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick} className={buttonStyle}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ItemControl;