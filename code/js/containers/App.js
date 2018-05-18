import React from "react"
import Header from "../components/header"
import InputTask from "../components/input"
import TaskList from "../components/tasklist"
import Filter from "../components/filter"
import LoadData from "../components/loadData"
import Loader from "../components/loader"
import Search from "../components/search"
import {bindActionCreators} from "redux"
import { connect } from "react-redux";
import {AddTask, DeleteTask, CheckTask, FilterTasks, LoadDataFromFile, valueSearch, activeSearch} from "../actions/index"





class App extends React.Component {
    render() {
      return(
        <div>
          <Header />
          <InputTask addTask = {this.props.AddTask}/>
          <hr />
          <Search  valueSearch = {this.props.valueSearch} activeSearch = {this.props.activeSearch}/>
          <br />
          <Filter activeTasks = {this.props.FilterTasks}/>
          <TaskList deleteTask = {this.props.DeleteTask} checkTask = {this.props.CheckTask} task = {this.props.items}/>
          <hr />
          <LoadData loaddata = {this.props.LoadDataFromFile}/>
          <Loader isLoading = {this.props.loading}/>
        </div>
      )
    }
  }

  function selector(state) {
    switch (state.filter) {
      case "All":
        return state.items;

      case "Active":
        return state.items.filter((item) => {
            return (item.checked === false && state.filter === "Active")
        });

      case "Completed":
        return state.items.filter((item) => {
          return (item.checked === true && state.filter === "Completed")
        });

      case "Priority":
        let copyState = state.items.concat([]);
        return copyState.sort(function(a, b){
          if(parseInt(a.priority) > parseInt(b.priority)) {
            return -1;
          }
          if(parseInt(a.priority) < parseInt(b.priority)) {
            return 1;
          }
          return 0;
        }); 
        
        case "inSearch":
        return state.items.filter((item) => {
            if(item.textTask.toLowerCase().search(state.searchValue.toLowerCase()) != -1) {
              return item;
            }
          });
        }
      }

  

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({AddTask, DeleteTask, CheckTask, FilterTasks, LoadDataFromFile, valueSearch, activeSearch}, dispatch);
  }

  function mapStateToProps(state) {
      return {
        items: selector(state),
        loading: state.loading
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);