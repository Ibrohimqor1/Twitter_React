import AppHeader from "../AppHeader";
import PostaddForm from "../PostaddForm/PostaddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import "./App.css";
import "../AppHeader/AppHeader.css";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Future programmer",
          important: true,
          like: true,
          id: "1",
        },
        { label: "That is so good", important: false, like: false, id: "2" },
        { label: "Ulugbek Umirov", important: false, like: false, id: "3" },
      ],
      term: "",
      filter: "all",
    };
    this.DeleteItem = this.DeleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToogleLike = this.onToogleLike.bind(this);
    this.onToogleimportant = this.onToogleimportant.bind(this);
    this.Searchpost = this.Searchpost.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.MaxId = 4;
  }

  Searchpost(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }
  onUpdateSearch(term) {
    this.setState({ term });
  }
  filterPost(items, filter) {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  }
  onFilterSelect(filter) {
    this.setState({ filter });
  }
  DeleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      console.log(before);
      console.log(after);
      const newArr = [...before, ...after];
      return {
        data: newArr,
      };
    });
  }
  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.MaxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }
  onToogleLike(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, like: !oldItem.like };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  }
  onToogleimportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, important: !oldItem.important };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  }

  render() {
    const { term, data, filter } = this.state;
    const liked = data.filter((item) => item.like).length;
    const addpost = data.length;
    const VisiblePost = this.filterPost(this.Searchpost(data, term), filter);
    return (
      <div className="App">
        <AppHeader liked={liked} addpost={addpost} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={VisiblePost}
          onDelete={this.DeleteItem}
          onToogleLike={this.onToogleLike}
          onToogleimportant={this.onToogleimportant}
        />
        <PostaddForm onAdd={this.addItem} />
      </div>
    );
  }
}
