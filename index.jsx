import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/users';
import Roles from './components/roles';
import Notification from './components/notification';
import City_list from './components/city_list';
import Bot_management from './components/bot_management';
import Menu from './components/menu';
import menu from './img/menu.svg';
import sunset from './img/sunset.svg';



class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            show_page: 'users',
            class_menu: 'closed_menu',
            style_logo: 'logo_show',
            data: [],
            table: [],
        }

        this.ButtonMenu = this.ButtonMenu.bind(this);

        
    }

    updateData(value){
         this.setState({show_page: value});
    }

    componentDidMount(){
        fetch( `https://api.exchangeratesapi.io/latest?base=EUR`, {metod: 'GET'})
    .then((response) => response.json())
    .then((crs) => this.setState({data: crs.rates}))
    }


    ButtonMenu(){
      let arr = [];
      let arr1 = [];
        for(const i in this.state.data){
            arr.push(i);
            arr1.push(<input type='text' key={this.state.data[i]} value={this.state.data[i]}></input>)
           this.setState({table: arr1})
        }

        // if(this.state.class_menu === 'closed_menu'){
        //     this.setState(
        //         {class_menu: 'open_menu',
        //         style_logo: 'logo_show',})
        // }else if(this.state.class_menu === 'open_menu'){
        //     this.setState(
        //     {class_menu: 'closed_menu',
        //     style_logo: 'logo_hidden',})
        // }

    }

    Page(props) {

        if (props.step === 'users') {
            return <Users />
        } else if (props.step === 'roles') {
            return <Roles/>
        } else if (props.step === 'notification') {
            return <Notification/>
        }else if (props.step === 'city_list') {
            return <City_list/>
        }else if (props.step === 'bot_management') {
            return <Bot_management/>
        }
    }
    render() {
        return (
            <div className="Page">

                <header>
                    <div className="Page_Main_Header">
                    <div className="Page_Header_leftSidebar" id={this.state.style_logo}>
                            <img src={sunset} className="_icon"></img>
                            <span>Weather bot</span>
                    </div>
                    <label htmlFor = "Page_Header_buttonMenu">
                    <img src={menu} className="_icon"></img>
                    </label>
                    </div>
                    <input type='checkbox' id="Page_Header_buttonMenu"></input>
                    <Menu className="Page_Heade_Menu" updateData={this.updateData.bind(this)}></Menu>
                </header>

                <main>

                    <div className = "Page_Content">
                        <div>{this.state.table}</div>
                        <this.Page step={this.state.show_page} ></this.Page>
                    </div>
                </main>
                <footer></footer>
            </div>
        )
    }
}

ReactDOM.render((
    <Home></Home>
), document.getElementById('root'));