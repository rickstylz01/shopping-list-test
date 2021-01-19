import './App.css';
import React from "react";
import AddItemForm from './components/AddItemForm';
import ShoppingList from './components/ShoppingList';

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleDeleteItem(item) {
    console.log('handle delete item called', { item });
  }
  handleCheckItem(item) {
    console.log('handle check item called', { item });
  }

  render() {
    return (
      // unnecessary div called fragment
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    )
  }
}


export default App;
